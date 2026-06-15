import { Request, Response } from "express";
import pool from "../db";

export const getStudents = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await pool.query(
      "SELECT * FROM students ORDER BY id DESC"
    );

    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch students",
    });
  }
};

export const createStudent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, age, photo_url, achievements, joined_date } = req.body;

    const parsedAge = age ? Number(age) : null;
    const uploadedPhotoUrl = req.file
      ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
      : undefined;
    const normalizedPhotoUrl =
      typeof photo_url === "string" ? photo_url.trim() : undefined;
    const resolvedPhotoUrl = uploadedPhotoUrl ?? normalizedPhotoUrl ?? "";

    const result = await pool.query(
      `
      INSERT INTO students
      (
        name,
        age,
        photo_url,
        achievements,
        joined_date
      )
      VALUES ($1,$2,$3,$4,$5)
      RETURNING *
      `,
      [name, parsedAge, resolvedPhotoUrl, achievements ?? null, joined_date ?? null]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    const message = error instanceof Error ? error.message : "Unknown error";

    res.status(500).json({
      message: "Failed to create student",
      error: message,
    });
  }
};

export const updateStudent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      res.status(400).json({ message: "Invalid student id" });
      return;
    }

    const { name, age, photo_url, achievements, joined_date, remove_photo } =
      req.body;
    const parsedAge = age ? Number(age) : null;
    const shouldRemovePhoto = remove_photo === "true" || remove_photo === true;
    const normalizedPhotoUrl =
      typeof photo_url === "string" ? photo_url.trim() : undefined;
    const uploadedPhotoUrl = req.file
      ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
      : undefined;
    const resolvedPhotoUrl =
      uploadedPhotoUrl ??
      (normalizedPhotoUrl !== undefined ? normalizedPhotoUrl || null : null);

    const result = await pool.query(
      `
      UPDATE students
      SET
        name = COALESCE($1, name),
        age = COALESCE($2, age),
        photo_url = CASE
          WHEN $7::boolean THEN ''
          WHEN $3::text IS NULL THEN photo_url
          ELSE $3::text
        END,
        achievements = COALESCE($4, achievements),
        joined_date = COALESCE($5, joined_date)
      WHERE id = $6
      RETURNING *
      `,
      [
        name ?? null,
        parsedAge,
        resolvedPhotoUrl,
        achievements ?? null,
        joined_date ?? null,
        id,
        shouldRemovePhoto,
      ]
    );

    if (result.rowCount === 0) {
      res.status(404).json({ message: "Student not found" });
      return;
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    const message = error instanceof Error ? error.message : "Unknown error";
    res.status(500).json({
      message: "Failed to update student",
      error: message,
    });
  }
};

export const deleteStudent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      res.status(400).json({ message: "Invalid student id" });
      return;
    }

    const result = await pool.query(
      `
      DELETE FROM students
      WHERE id = $1
      RETURNING *
      `,
      [id]
    );

    if (result.rowCount === 0) {
      res.status(404).json({ message: "Student not found" });
      return;
    }

    res.status(200).json({
      message: "Student deleted successfully",
      student: result.rows[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to delete student",
    });
  }
};