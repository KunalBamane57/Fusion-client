import React, { useState } from "react";
import "./StdAssignmentSub.css";
import axios from "axios";

function StdAssignmentSub() {
  const [assignmentTitle, setAssignmentTitle] = useState("");
  const [file, setFile] = useState(null);

  // TEMP: Hardcoded IDs — replace with actual values from auth/session/context
  const student_id = "22BSM024";
  const assignment_id = 2;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !assignmentTitle) {
      alert("Please fill all the fields.");
      return;
    }

    const token = localStorage.getItem("authToken");
    if (!token) {
      alert("Authentication token missing.");
      return;
    }

    const formData = new FormData();
    formData.append("student_id", student_id); // replace dynamically
    formData.append("assignment_id", assignment_id); // replace dynamically
    formData.append("upload_url", file); // assuming file is needed
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
      setFile(null);
    } catch (error) {
      console.error("Submission error:", error.response?.data || error.message);
      alert("Submission failed. Check console for details.");
    }
  };

  return (
    <div className="submission-container">
      <h1 className="title">Assignment Submission</h1>
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
