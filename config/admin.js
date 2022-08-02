module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','muwWBzyVNQkmCrwU80q24g=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT','jG2IVYPoyKpBfBBHBojgVg=='),
  },
});
