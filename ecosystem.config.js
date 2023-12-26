module.exports = {
  apps: [
    {
      name: "CSH-backend",
      script: "./dist/index.js",
      watch: ".",
      instances: 1,
      env: {
        NODE_ENV: "dev",
      },
      env_test: {
        NODE_ENV: "local",
      },
      env_production: {
        NODE_ENV: "prod",
      },
    },
  ],
};
