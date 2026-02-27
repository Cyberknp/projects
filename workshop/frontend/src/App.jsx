import React, { useState } from "react";
import "./App.css";

const API_BASE = "http://localhost:8000";

function App() {
  const [activeTab, setActiveTab] = useState("add");

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    student_course: "",
    email: "",
    date_of_birth: "",
  });
  const [addMessage, setAddMessage] = useState(null);
  const [addError, setAddError] = useState(null);
  const [addLoading, setAddLoading] = useState(false);

  const [searchId, setSearchId] = useState("");
  const [student, setStudent] = useState(null);
  const [searchError, setSearchError] = useState(null);
  const [searchLoading, setSearchLoading] = useState(false);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    setAddMessage(null);
    setAddError(null);
    setAddLoading(true);

    try {
      const response = await fetch(`${API_BASE}/students`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.detail || "Failed to add student");
      }

      const created = await response.json();
      setAddMessage(
        `Student "${created.first_name} ${created.last_name}" added successfully with ID: ${created.student_id}`,
      );
      setFormData({
        first_name: "",
        last_name: "",
        student_course: "",
        email: "",
        date_of_birth: "",
      });
    } catch (err) {
      setAddError(err.message);
    } finally {
      setAddLoading(false);
    }
  };

  const handleSearchStudent = async (e) => {
    e.preventDefault();
    setStudent(null);
    setSearchError(null);
    setSearchLoading(true);

    if (!searchId.trim()) {
      setSearchError("Please enter a Student ID");
      setSearchLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_BASE}/students/${searchId}`);

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.detail || "Student not found");
      }

      const data = await response.json();
      setStudent(data);
    } catch (err) {
      setSearchError(err.message);
    } finally {
      setSearchLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Student Information System</h1>
      </header>

      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === "add" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("add");
            setAddMessage(null);
            setAddError(null);
          }}
        >
          Add Student
        </button>
        <button
          className={`tab-btn ${activeTab === "search" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("search");
            setSearchError(null);
            setStudent(null);
          }}
        >
          Retrieve Student
        </button>
      </div>

      <main className="content">
        {activeTab === "add" && (
          <section className="card">
            <h2>Add New Student</h2>
            <form className="form" onSubmit={handleAddStudent}>
              <div className="form-group">
                <label htmlFor="first_name">First Name</label>
                <input
                  id="first_name"
                  name="first_name"
                  type="text"
                  value={formData.first_name}
                  onChange={handleFormChange}
                  placeholder="Enter first name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="last_name">Last Name</label>
                <input
                  id="last_name"
                  name="last_name"
                  type="text"
                  value={formData.last_name}
                  onChange={handleFormChange}
                  placeholder="Enter last name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="student_course">Course</label>
                <input
                  id="student_course"
                  name="student_course"
                  type="text"
                  value={formData.student_course}
                  onChange={handleFormChange}
                  placeholder="Enter course name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="Enter email address"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="date_of_birth">Date of Birth</label>
                <input
                  id="date_of_birth"
                  name="date_of_birth"
                  type="date"
                  value={formData.date_of_birth}
                  onChange={handleFormChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={addLoading}
              >
                {addLoading ? "Adding..." : "Add Student"}
              </button>
            </form>

            {addMessage && <div className="message success">{addMessage}</div>}
            {addError && <div className="message error">{addError}</div>}
          </section>
        )}

        {activeTab === "search" && (
          <section className="card">
            <h2>Retrieve Student by ID</h2>
            <form className="form search-form" onSubmit={handleSearchStudent}>
              <div className="form-group">
                <label htmlFor="search_id">Student ID</label>
                <input
                  id="search_id"
                  type="number"
                  min="1"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  placeholder="Enter student ID"
                  required
                />
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={searchLoading}
              >
                {searchLoading ? "Searching..." : "Search"}
              </button>
            </form>

            {searchError && <div className="message error">{searchError}</div>}

            {student && (
              <div className="student-details">
                <h3>Student Details</h3>
                <table className="details-table">
                  <tbody>
                    <tr>
                      <td className="label">Student ID</td>
                      <td>{student.student_id}</td>
                    </tr>
                    <tr>
                      <td className="label">First Name</td>
                      <td>{student.first_name}</td>
                    </tr>
                    <tr>
                      <td className="label">Last Name</td>
                      <td>{student.last_name}</td>
                    </tr>
                    <tr>
                      <td className="label">Course</td>
                      <td>{student.student_course}</td>
                    </tr>
                    <tr>
                      <td className="label">Email</td>
                      <td>{student.email}</td>
                    </tr>
                    <tr>
                      <td className="label">Date of Birth</td>
                      <td>{student.date_of_birth}</td>
                    </tr>
                    <tr>
                      <td className="label">Enrollment Date</td>
                      <td>{student.student_enrollment_date}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
