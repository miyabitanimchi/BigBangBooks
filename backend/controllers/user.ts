import { Request, Response, Router } from "express";

const router = Router();

router.get("/:id", (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: `Hi ${req.params.id}!` });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export const UserRoutes = router;
