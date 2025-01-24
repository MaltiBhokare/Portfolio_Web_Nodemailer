

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// const app = express();

// // Middleware to parse JSON request bodies
// app.use(express.json());

// // CORS Middleware to allow frontend requests
// app.use(cors());

// // MongoDB Connection
// const mongoURI =
//   "mongodb+srv://user2422:2422@cluster0.qdvbx.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"; // MongoDB URI
// mongoose
//   .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("Connected to MongoDB Atlas"))
//   .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));

// // Define the user schema and model
// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   message: { type: String, required: true },
// });

// const User = mongoose.model("User", userSchema, "users"); // "users" is your collection name

// // API endpoint to handle form submissions
// app.post("/contact", async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     // Validate request data
//     if (!name || !email || !message) {
//       return res.status(400).json({ error: "All fields are required." });
//     }

//     // Save the form data to the database
//     const newUser = new User({ name, email, message });
//     await newUser.save();

//     // Set up nodemailer to send a confirmation email to the user
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       secure: true,
//       port: 465,
//       auth: {
//         user: "yogitabhokare2003@gmail.com", // Replace with your email
//         pass: "kvag lyqf bshw hbuo", // Replace with your email password or app-specific password
//       },
//     });

//     // Sending email to the user who filled out the contact form
//     const mailOptions = {
//       from: "your-email@gmail.com", // Sender email (this is your email, must be authenticated)
//       to: email, // Recipient email (the user who submitted the form)
//       subject: "Confirmation of Your Message Submission",
//       text: `
//         Hello ${name},

//         Thank you for reaching out! We have received your message and will get back to you as soon as possible.

//         Here's the message you submitted:
        
//         ${message}

//         Best regards,
//         Your Name or Company
//       `,
//       replyTo: email, // Reply-to email set to the user's email
//     };

//     // Send the email
//     await transporter.sendMail(mailOptions);

//     // Respond with a success message
//     res.status(201).json({ message: "Message sent successfully!" });
//   } catch (error) {
//     console.error("Error saving user:", error);
//     res.status(500).json({ error: "An error occurred while saving the message." });
//   }
// });

// // Start the Express server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });




const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

const corsOptions = {
  origin: "https://portfolio-web-nodemailer-client.vercel.app", // Your frontend domain
  methods: "GET,POST,PUT,DELETE", // Allow specific HTTP methods
  allowedHeaders: "Content-Type,Authorization", // Allow specific headers
};

// CORS Middleware to allow frontend requests
app.use(cors(corsOptions));

// MongoDB Connection
const mongoURI =
  "mongodb+srv://user2422:2422@cluster0.qdvbx.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"; // MongoDB URI
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));

// Define the user schema and model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const User = mongoose.model("User", userSchema, "users"); // "users" is your collection name

// Test Route to check if the server is working
app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

// API endpoint to handle form submissions
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate request data
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Save the form data to the database
    const newUser = new User({ name, email, message });
    await newUser.save();

    // Set up nodemailer to send a confirmation email to the user
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      port: 465,
      auth: {
        user: "yogitabhokare2003@gmail.com", // Replace with your email
        pass: "kvag lyqf bshw hbuo", // Replace with your email password or app-specific password
      },
    });

    // Sending email to the user who filled out the contact form
    const mailOptions = {
      from: "your-email@gmail.com", // Sender email (this is your email, must be authenticated)
      to: email, // Recipient email (the user who submitted the form)
      subject: "Confirmation of Your Message Submission",
      text: `
        Hello ${name},

        Thank you for reaching out! We have received your message and will get back to you as soon as possible.

        Here's the message you submitted:
        
        ${message}

        Best regards,
        Your Name or Company
      `,
      replyTo: email, // Reply-to email set to the user's email
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with a success message
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ error: "An error occurred while saving the message." });
  }
});

// Start the Express server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



