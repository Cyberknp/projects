import os
import sqlite3

DATABASE_PATH = os.path.join(os.path.dirname(__file__), "college.db")


def get_connection():
    conn = sqlite3.connect(DATABASE_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON")
    return conn


def fetch_all_students():
    conn = get_connection()
    try:
        cursor = conn.execute("SELECT * FROM students")
        rows = cursor.fetchall()
        return [dict(row) for row in rows]
    finally:
        conn.close()


def fetch_student_by_id(student_id: int):
    conn = get_connection()
    try:
        cursor = conn.execute(
            "SELECT * FROM students WHERE student_id = ?", (student_id,)
        )
        row = cursor.fetchone()
        return dict(row) if row else None
    finally:
        conn.close()


def create_student(data: dict):
    conn = get_connection()
    try:
        cursor = conn.execute(
            """
            INSERT INTO students (first_name, last_name, student_course, email, date_of_birth)
            VALUES (?, ?, ?, ?, ?)
            """,
            (
                data["first_name"],
                data["last_name"],
                data["student_course"],
                data["email"],
                data["date_of_birth"],
            ),
        )
        conn.commit()
        last_id = cursor.lastrowid
        if last_id is None:
            return None
        return fetch_student_by_id(last_id)
    finally:
        conn.close()


def update_student(student_id: int, data: dict):
    conn = get_connection()
    try:
        fields = []
        values = []
        for key, value in data.items():
            if value is not None:
                fields.append(f"{key} = ?")
                values.append(value)

        if not fields:
            return fetch_student_by_id(student_id)

        values.append(student_id)
        query = f"UPDATE students SET {', '.join(fields)} WHERE student_id = ?"

        conn.execute(query, values)
        conn.commit()
        return fetch_student_by_id(student_id)
    finally:
        conn.close()


def delete_student(student_id: int):
    conn = get_connection()
    try:
        cursor = conn.execute(
            "DELETE FROM students WHERE student_id = ?", (student_id,)
        )
        conn.commit()
        return cursor.rowcount > 0
    finally:
        conn.close()
