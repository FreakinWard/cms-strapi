module.exports = ({ env }) => ({
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  upload: {
    config: {
      provider: "strapi-provider-upload-azure-storage",
      providerOptions: {
        authType: env("STORAGE_AUTH_TYPE", "default"),
        account: env("STORAGE_ACCOUNT"),
        accountKey: env("STORAGE_ACCOUNT_KEY"),//either account key or sas token is enough to make authentication
        sasToken: env("STORAGE_ACCOUNT_SAS_TOKEN"),
        serviceBaseURL: env("STORAGE_URL"), // optional
        containerName: env("NODE_ENV"),
        // containerName: 'assets',
        defaultPath: "assets",
        cdnBaseURL: env("STORAGE_CDN_URL"), // optional
        defaultCacheControl: env("STORAGE_CACHE_CONTROL"), // optional
        removeCN: env("REMOVE_CONTAINER_NAME", true), // optional, if you want to remove container name from the URL
      },
    },
  },
});
