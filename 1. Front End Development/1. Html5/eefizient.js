// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
// Create an Express.js app
const app = express();
// Use middleware to parse JSON and URL-encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Define a POST endpoint to handle form submissions
app.post('/submit-form', (req, res) => {
  // Extract data from the request
  const { name, email, otherInfo } = req.body;

  // Create an email transport
  const transporter = nodemailer.createTransport({
    service: 'your-email-service-provider',
    auth: {
      user: 'your-email@example.com',
      pass: 'your-email-password',
    },
  });
  // Compose the email content
  const mailOptions = {
    from: 'your-email@example.com',
    to: email,
    subject: 'Confirmation Email',
    text: `Thank you for submitting the form. Here is the information you entered:\n\nName: ${name}\nEmail: ${email}\nOther Info: ${otherInfo}`,
  };
  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Email could not be sent');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Form submitted successfully');
    }
  });
});
// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
