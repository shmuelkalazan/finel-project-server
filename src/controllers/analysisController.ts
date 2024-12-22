import { Request, Response } from "express";
import { IterorEvent } from "../interfaces/IterorEvent";
import {seed} from "../servises/analysisService"

export const seedcontroller = async (
    req: Request<IterorEvent>,
    res: Response
  ) => {
    try {
      await seed();
      res.status(200).json("good bye");
    } catch (error) {
      res.json({ error: error  });
    }
  };