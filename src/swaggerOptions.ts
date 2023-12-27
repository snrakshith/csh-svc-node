// import dotenv from "dotenv";
// import path from "path";

// dotenv.config({
//   path: path.resolve(`./src/environments/.env.${process.env.NODE_ENV}`),
// });

export const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Sample REST API",
      version: "1.0.0",
      description: "CSH-backend Repository Swagger Documentation.",
    },
    servers: [
      {
        url: process.env.BASE_URL,
      },
    ],
  },
  apis: ["./src/routes/apis/*.ts"],
};
