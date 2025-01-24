


import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const [isSuccess, setIsSuccess] = useState(null); // Success message state

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Frontend validation
        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill out all fields.");
            return;
        }

        setIsLoading(true); // Start loading
        setIsSuccess(null); // Reset success message

        try {
            const response = await fetch("http://localhost:5000/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSuccess("Message sent successfully!"); // Success message
                setFormData({ name: "", email: "", message: "" }); // Reset form data
                // Display success pop-up message
                window.alert("Message sent successfully!"); // Popup success
            } else {
                const errorData = await response.json();
                setIsSuccess(`Failed to send message: ${errorData.message || "Unknown error"}`);
            }
        } catch (error) {
            console.error("Error:", error);
            setIsSuccess("Error sending message. Please try again later.");
            // Display error pop-up message
            window.alert("Error sending message. Please try again later.");
        } finally {
            setIsLoading(false); // Stop loading
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <h1 className="contact-heading">Get in Touch</h1>
                <p className="contact-description">
                    Have a project or just want to say hello? Drop a message below and I'll get back to you as soon as I can!
                </p>

                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-field">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="contact-input"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="form-field">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="contact-input"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div className="form-field">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="contact-textarea"
                            placeholder="Your Message"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="contact-btn" disabled={isLoading}>
                        {isLoading ? "Sending..." : "Send Message"}
                    </button>
                </form>

                {isSuccess && <p className="success-message">{isSuccess}</p>} {/* Success or error message */}
            </div>
        </section>
    );
};

export default Contact;
