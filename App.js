// Import required packages
const cron = require('node-cron');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables from .env file

// Adding nodemailer with environment variables from the env file
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // SMTP server hostname for Gmail
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD
    }
  });


// Function responsible for creating and sending email using nodemailer
function sendEmail() {
  // Creates object 
  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.RECIPIENT_EMAIL,
    subject: 'Daily Reminder',
    text: 'Good Morning Sunshine! This is your daily reminder.' // Email message
  };

  // This sends the email
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

// Schedule sending email daily at 10 AM EST
cron.schedule('5 20 * * *', () => {
  console.log('Scheduling email...');
  sendEmail();
}, {
  timezone: 'America/New_York' // Setting the timezone to EST
});
