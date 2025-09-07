import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // MS
    httpOnly: true, // prevent XSS attacks cross-site scripting attacks
    sameSite: "strict", // CSRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development",
  });

  return token;
};

// This code generates a JSON Web Token (JWT) for a user and sets it as an HTTP-only cookie.

// const token = jwt.sign(...): This line creates the JWT.

// { userId }: The payload of the token. It stores the user's ID to identify them later.

// process.env.JWT_SECRET: A secret key used to sign the token. This secret is vital for verifying the token's authenticity.

// expiresIn: "7d": The token is set to expire in 7 days, making it unusable after that time.

// res.cookie(...): This line sets the JWT as a cookie in the user's browser.

// "jwt": The name of the cookie.

// token: The actual JWT string being stored.

// maxAge: 7 * 24 * 60 * 60 * 1000: The cookie's expiration time in milliseconds, matching the token's 7-day lifespan.

// httpOnly: true: This is a security setting that prevents client-side JavaScript from accessing the cookie, mitigating XSS attacks.

// sameSite: "strict": Another security setting that restricts how the cookie is sent with cross-site requests, providing protection against CSRF attacks.

// secure: process.env.NODE_ENV !== "development": This ensures the cookie is only sent over HTTPS connections in a production environment.

// In short, the function generates a secure, time-limited token and stores it in a protected cookie on the user's browser.