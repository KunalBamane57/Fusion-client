import React, { useEffect, useState } from "react";
import { Button, TextInput, Table, Notification } from "@mantine/core";
import axios from "axios";
import "./Gradingscheme.css";

function GradeScheme() {
  const [gradingData, setGradingData] = useState({});
  const [message, setMessage] = useState(null);

  const grades = ["O", "A+", "A", "B+", "B", "C+", "C", "D+", "D", "F"];

  const handleInputChange = (grade, bound, value) => {
    setGradingData((prevData) => ({
      ...prevData,
      [`${grade}_${bound}`]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "/api/submit-grading-scheme",
        gradingData,
      );
      if (response.status === 200) {
        setMessage({
          type: "success",
          text: "Grading scheme uploaded successfully!",
        });
      } else {
        setMessage({ type: "error", text: "Failed to upload grading scheme." });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "An error occurred while submitting the grading scheme.",
      });
    }
  };

  useEffect(() => {
    // Cleanup notification after 5 seconds
    if (message) {
      const timer = setTimeout(() => setMessage(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="main_grading_scheme">
      <div className="heading">
        <h1>Create Grading Scheme</h1>
      </div>
      <div className="grading_table_wrapper">
        <Table striped highlightOnHover className="Grading_table">
          <thead>
            <tr>
              <th>Grade</th>
              <th>Lower Bound (%)</th>
              <th>Upper Bound (%)</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((grade) => (
              <tr key={grade}>
                <td>{grade}</td>
                <td data-bound="lower">
                  <TextInput
                    placeholder="Lower Bound"
                    onChange={(e) =>
                      handleInputChange(grade, "Lower", e.target.value)
                    }
                  />
                </td>
                <td data-bound="upper">
                  <TextInput
                    placeholder="Upper Bound"
                    onChange={(e) =>
                      handleInputChange(grade, "Upper", e.target.value)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div className="upload_button_wrapper">
        <Button
          variant="filled"
          color="blue"
          className="add_button"
          onClick={handleSubmit}
        >
          Upload Grading Scheme
        </Button>
      </div>

      {message && (
        <Notification color={message.type === "success" ? "green" : "red"}>
          {message.text}
        </Notification>
      )}
    </div>
  );
}

export default GradeScheme;
