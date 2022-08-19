const nodemailer = require("nodemailer");
const process = require("process");

export default function handler(req, res) {
  const body = req.body;

  console.log("process", process.env);

  console.log("body name", body.nameOfPerson);
  console.log("body email", body.emailAddress);
  console.log("body message", body.messageOfPerson);

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
    from: body.emailAddress,
    to: "ryancahela@gmail.com",
    subject: `a contact message from ${body.nameOfPerson} from your website`,
    text: body.messageOfPerson,
    html: `<p>${body.messageOfPerson}</p>`,
  };

  transport.sendMail(message, (err, info) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: `Error: ${err}`,
      });
    } else {
      console.log("info", info);
    }
  });

  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({
    success: true,
    data: `name: ${body.nameOfPerson} email: ${body.emailAddress} message: ${body.messageOfPerson}`,
  });
}
