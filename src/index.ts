import express, { Request, Response } from "express";

const app = express();

app.get("/test", (req: Request, res: Response) => {
  res.json({ status: 200, message: "Running Successfully" });
});

app.get("/", (req: Request, res: Response) => {
  res.json({ status: 200, message: "Fine!!" });
});

app.listen("4000", () => console.log("listening on 4000"));
