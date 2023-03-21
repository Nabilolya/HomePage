const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");



const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("The server started on port 3000 !!!!!!");
});

app.get("/", (req, res) => {
  res.send(
    "<h1 style='text-align: center'>Wellcome to FunOfHeuristic <br><br>😃👻😃👻😃👻😃👻😃</h1>"
  );
});

app.post("/sendmail", (req, res) => {
  console.log("request came");
  //let user = req.body;
  sendMail( info => {
    console.log(`The mail has beed send 😃 and the id is ${info.messageId}`);
    res.send(info);
  });
});

async function sendMail(callback) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "nabilbouhassounolya@gmail.com",
      pass: "fbkfkgfzzzvyuxkr"
    }
  });

  let mailOptions = {
    from: 'nabilbouhassounolya@gmail.com', // sender address
    to: "nabilbouhassounolya@gmail.com", // list of receivers
    subject: "Welcome,MIT Consulting!", // Subject line
    html: `<h1>Hello, We hope you are doing very well, thanks for your message </br> A member from MIT Consulting will contact you soon.</h1><br>
    <h4>Thanks for joining us</h4>`
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}
