import { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";
import initMiddleware from "@/Utilities/init-middleware";

const cors = initMiddleware(
  Cors({
    methods: ["GET", "POST", "OPTIONS"],
    origin: "*",
  })
);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);

  res.status(200).json({ message: "Hello, World!" });
};

export default handler;
