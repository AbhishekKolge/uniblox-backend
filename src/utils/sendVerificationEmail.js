const { sendEmail } = require('./sendEmail');

const sendVerificationEmail = async ({
  name,
  email,
  verificationToken,
  origin,
}) => {
  const verifyEmailUrl = `${origin}/auth/verify?token=${verificationToken}&email=${email}`;

  const message = `<p>Please confirm your email by clicking on the following link: <a href='${verifyEmailUrl}'>Verify Email</a></p>`;

  const html = `<h4>Hello, ${name}</h4> ${message}`;

  return sendEmail({
    to: email,
    subject: "E-Commerce Craze Email Confirmation",
    html,
  });
};

module.exports = { sendVerificationEmail };
