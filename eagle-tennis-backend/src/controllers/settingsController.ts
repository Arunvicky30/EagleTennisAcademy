import { Request, Response } from "express";
import pool from "../db";

export const getSettings = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await pool.query(
      "SELECT * FROM academy_settings LIMIT 1"
    );

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
        
      message: "Failed to fetch academy settings",
    });
  }
};