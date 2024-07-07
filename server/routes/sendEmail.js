const Router = require("express");
const nodemailer = require("nodemailer");

const router = new Router();

router.post("/send-email", (req, res) => {
  const { name, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'reece22@ethereal.email',
        pass: 'Uq4sTmXcrCxZQvVqJB'
    }
});

  const mailOptions = {
    from: "smtp.ethereal.email",
    to: "reece22@ethereal.email",
    subject: "test message",
    text: `this message from ${name},\n
           e-mail: ${email} \n
           telephone: ${phone}\n
           message: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: 'Error sending email', error: error.toString() });
    }
    res.status(200).json({ message: 'Email sent successfully', info });
  });

});

module.exports = router;
