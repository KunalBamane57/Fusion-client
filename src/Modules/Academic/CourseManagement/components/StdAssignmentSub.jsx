import React, { useState, useEffect } from "react";
import "./StdAssignmentSub.css";
import axios from "axios";
import { Button } from "@mantine/core";

function StdAssignmentSub() {
  const [assignmentTitle, setAssignmentTitle] = useState("");
  const [assignmentID, setAssignmentID] = useState(null);
  const [file, setFile] = useState(null);
  const [assignments, setAssignments] = useState([]);

  const student_id = "22BSM024";
  const course_id = 2;
  useEffect(() => {
    const fetchAssignments = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        alert("Authentication token missing.");
        return;
      }

      try {
        const res = await axios.get(
          `http://127.0.0.1:8000/ocms/api/assignments/course/${course_id}/`,
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          },
        );
        setAssignments(res.data);
      } catch (error) {
        console.error("Failed to fetch assignments:", error);
        alert("Failed to load assignments.");
      }
    };

    fetchAssignments();
  }, [course_id]);

  const handleAssignmentClick = (assignment) => {
    setAssignmentID(assignment.id);
    setAssignmentTitle(assignment.assignment_name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !assignmentTitle || !assignmentID) {
      alert("Please fill all the fields.");
      return;
    }

    const token = localStorage.getItem("authToken");
    if (!token) {
      alert("Authentication token missing.");
      return;
    }

    const formData = new FormData();
    formData.append("student_id", student_id);
    formData.append("assignment_id", assignmentID);
    formData.append("upload_url", file);
    formData.append("assign_name", assignmentTitle);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/ocms/api/submit-assignment/",
        formData,
        {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "multipart/form-data",
          },
        },
      );

      console.log("Success:", response.data);
      alert("Assignment submitted successfully!");
      setAssignmentTitle("");
      setAssignmentID(null);
      setFile(null);
    } catch (error) {
      console.error("Submission error:", error.response?.data || error.message);
      alert("Submission failed. Check console for details.");
    }
  };

  return (
    <div className="submission-container">
      <h1 className="title">Assignment Submission</h1>

      <div className="tabContainer">
        {assignments.map((assignment) => (
          <Button
            key={assignment.id}
            className="assignmentButton"
            onClick={() => handleAssignmentClick(assignment)}
          >
            {assignment.assignment_name}
          </Button>
        ))}
      </div>

      <form className="submission-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="innerhead">
            <h1 className="form-label">Assignment Title:</h1>
          </div>
          <input
            id="assignmentTitle"
            type="text"
            value={assignmentTitle}
            onChange={(e) => setAssignmentTitle(e.target.value)}
            className="form-input"
            placeholder="Enter assignment title"
            required
          />
        </div>

        <div className="form-group">
          <div className="innerhead">
            <h1 className="form-label">Upload File:</h1>
          </div>
          <input
            id="fileUpload"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="file-input"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default StdAssignmentSub;
