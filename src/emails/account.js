const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "adnanghazzaal@gmail.com",
    subject: "Welcome to the app",
    text: `Welcome ${name} to the task api.`,
  });
};

const sendGoodbyeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "adnanghazzaal@gmail.com",
    subject: "We are Sad to See You Leave",
    text: `Dear ${name}Please take some time to tell us how we could have kept you from leaving our service.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendGoodbyeEmail,
};
