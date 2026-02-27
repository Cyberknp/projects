from database import (
    create_student,
    delete_student,
    fetch_all_students,
    fetch_student_by_id,
    update_student,
)
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from models import StudentCreate, StudentResponse, StudentUpdate

app = FastAPI(title="College Student Management API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/students", response_model=list[StudentResponse])
def get_all_students():
    students = fetch_all_students()
    return students


@app.get("/students/{student_id}", response_model=StudentResponse)
def get_student(student_id: int):
    student = fetch_student_by_id(student_id)
    if not student:
        raise HTTPException(status_code=404, detail="Student not found")
    return student


@app.post("/students", response_model=StudentResponse, status_code=201)
def add_student(student: StudentCreate):
    created = create_student(student.model_dump())
    if not created:
        raise HTTPException(status_code=500, detail="Failed to create student")
    return created


@app.put("/students/{student_id}", response_model=StudentResponse)
def edit_student(student_id: int, student: StudentUpdate):
    existing = fetch_student_by_id(student_id)
    if not existing:
        raise HTTPException(status_code=404, detail="Student not found")
    updated = update_student(student_id, student.model_dump(exclude_unset=True))
    return updated


@app.delete("/students/{student_id}")
def remove_student(student_id: int):
    existing = fetch_student_by_id(student_id)
    if not existing:
        raise HTTPException(status_code=404, detail="Student not found")
    delete_student(student_id)
    return {"message": "Student deleted successfully"}
