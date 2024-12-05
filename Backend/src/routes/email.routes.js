import dotenv from 'dotenv';
import express from "express";
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

// Get the __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create the transporter using Gmail service
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.AUTH_EMAIL, // Your email address
        pass: process.env.AUTH_PASS   // Use an App Password for Gmail
    }
});

// Define the route for sending emails
router.post('/send-email', (req, res) => {
    const { name, email, role, message } = req.body;

    // Validate request body
    if (!name || !email || !role || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    let mailOptions = {
        from: process.env.AUTH_EMAIL,
        to: email,
        subject: `Mentorship Request from ${name}`,
        text: `Dear ${name},\n\n${message}\n\nRole: ${role}`,
        html: `<h1>Dear ${name},</h1><p>${message}</p><p><strong>Role:</strong> ${role}</p>`,
        
        attachments: [
            {
                filename: 'invitation.pdf', // Example attachment
                path: path.join(__dirname, 'invitation.pdf') // Ensure the file path is correct
            }
        ]
    };

    // Send email using the transporter
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error); // Log the error for debugging
            return res.status(500).json({ error: 'Failed to send email' });
        }
        res.status(200).json({ message: 'Email sent successfully', info: info.response });
    });
});

export default router;
