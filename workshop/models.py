from typing import Optional

from pydantic import BaseModel


class StudentCreate(BaseModel):
    first_name: str
    last_name: str
    student_course: str
    email: str
    date_of_birth: str


class StudentUpdate(BaseModel):
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    student_course: Optional[str] = None
    email: Optional[str] = None
    date_of_birth: Optional[str] = None


class StudentResponse(BaseModel):
    student_id: int
    first_name: str
    last_name: str
    student_course: str
    student_enrollment_date: str
    email: str
    date_of_birth: str

    class Config:
        from_attributes = True
