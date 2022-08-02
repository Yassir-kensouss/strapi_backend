module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    "users-permissions": {
      config: {
        jwtSecret: env('ADMIN_JWT_SECRET'),
      }
    },
    graphql: {
        enabled: true,
        config: {
          playgroundAlways: false,
          defaultLimit: 10,
          maxLimit: 20,
          apolloServer: {
            tracing: true,
          },
        }
      }
    // ...
  });