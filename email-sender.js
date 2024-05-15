// Require nodemailer module
const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
    service: 'Gmail', // Use your email service provider here (e.g., 'Gmail', 'Yahoo', etc.)
    auth: {
        user: 'loladeajay@gmail.com', // Your email address
        pass: 'magnificoman123' // Your email password or app-specific password
    }
});

// Email message options
let mailOptions = {
    from: 'favourololadeajayi@gmail.com', // Sender email address
    to: 'favourololadeajayi@gmail.com', // Receiver email address (same as sender for sending email to yourself)
    subject: 'Test Email', // Email subject
    text: 'This is a test email sent using Node.js and nodemailer!', // Plain text body
    html: '<p>This is a <b>test email</b> sent using <strong>Node.js</strong> and <strong>nodemailer</strong>!</p>' // HTML body (optional)
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error occurred while sending email:', error);
    } else {
        console.log('Email sent successfully:', info.response);
    }
});
