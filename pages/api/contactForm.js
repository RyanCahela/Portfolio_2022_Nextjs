const nodemailer = require("nodemailer");
const process = require("process");

export default function handler(req, res) {
  const body = req.body;

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  var message = {
    from: body.emailAddress.value,
    to: "ryancahela@gmail.com",
    subject: `a contact message from ${body.nameOfPerson.value} from your website`,
    text: body.messageOfPerson.value,
    html: `<p>${body.messageOfPerson.value}</p>`,
  };

  transport.sendMail(message, (err, info) => {
    console.log("error", err);
    if (err) {
      res.status(500).json({
        success: false,
        message: `Error: ${err}`,
      });
    } else {
      console.log("info", info);
      // Found the name.
      // Sends a HTTP success code
      res.status(200).json({
        success: true,
        data: `name: ${body.nameOfPerson.value} email: ${body.emailAddress.value} message: ${body.messageOfPerson.value}`,
      });
    }
  });
}
