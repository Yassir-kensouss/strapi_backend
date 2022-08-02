module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS", [
      "HOST",
      "PORT",
      "APP_KEYS",
      "API_TOKEN_SALT",
      "ADMIN_JWT_SECRET",
      "JWT_SECRET",
      "CLOUDINARY_NAME",
      "CLOUDINARY_KEY",
      "CLOUDINARY_SECRET"
    ]),
  },
});
