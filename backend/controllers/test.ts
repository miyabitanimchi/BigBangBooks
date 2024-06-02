import { Request, Response } from "express";

export const TestController = (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "API is working" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
