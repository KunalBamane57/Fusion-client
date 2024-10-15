import React, { useState } from "react";
import { Button, Select, TextInput, Table } from "@mantine/core";
import "./Grading_scheme.css";

function Grading_scheme() {
  const [evaluationType, setEvaluationType] = useState("");
  const [weightage, setWeightage] = useState("");
  const [gradeBounds, setGradeBounds] = useState({
    O: { lower: "", upper: "" },
    "A+": { lower: "", upper: "" },
    A: { lower: "", upper: "" },
    "B+": { lower: "", upper: "" },
    B: { lower: "", upper: "" },
    "C+": { lower: "", upper: "" },
    C: { lower: "", upper: "" },
    "D+": { lower: "", upper: "" },
    D: { lower: "", upper: "" },
    F: { lower: "", upper: "" },
  });

  const handleGradeChange = (grade, bound, value) => {
    setGradeBounds((prev) => ({
      ...prev,
      [grade]: { ...prev[grade], [bound]: value },
    }));
  };

  return (
    <div className="main_grading_scheme">
      <div className="heading">
        <h1>Create Grading Scheme</h1>
      </div>

      <div
        className="type_of_evaluation"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <Select
          label="Type of Evaluation"
          placeholder="Select Evaluation"
          data={[
            "Project",
            "Lab Evaluation",
            "Assignment",
            "Quiz",
            "Mid Sem Exam",
            "End Sem Exam",
            "Attendance",
          ]}
          value={evaluationType}
          onChange={(value) => setEvaluationType(value || "")}
          style={{ flex: 1 }}
          styles={{
            label: {
              fontSize: "18px",
            },
          }}
        />
        <TextInput
          label="Weightage (%)"
          placeholder="Enter Weightage"
          value={weightage}
          onChange={(event) => setWeightage(event.currentTarget.value)}
          style={{ flex: 1 }}
          styles={{
            label: {
              fontSize: "18px",
            },
          }}
        />
        <Button style={{ marginBottom: "-20px" }}>Add</Button>
      </div>

      <div
        className="grading_table"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <Table striped highlightOnHover className="Grading_table">
          <thead>
            <tr>
              <th>Grade</th>
              <th>Lower Bound (%)</th>
              <th>Upper Bound (%)</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(gradeBounds).map((grade) => (
              <tr key={grade}>
                <td style={{ margin: "auto" }}>{grade}</td>
                <td>
                  <TextInput
                    placeholder="Lower Bound"
                    value={gradeBounds[grade].lower}
                    onChange={(e) =>
                      handleGradeChange(grade, "lower", e.currentTarget.value)
                    }
                    style={{ width: "500px", margin: "auto" }}
                  />
                </td>
                <td>
                  <TextInput
                    placeholder="Upper Bound"
                    value={gradeBounds[grade].upper}
                    onChange={(e) =>
                      handleGradeChange(grade, "upper", e.currentTarget.value)
                    }
                    style={{ width: "500px", margin: "auto" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <Button variant="filled" color="blue">
          Upload Grading Scheme
        </Button>
      </div>
    </div>
  );
}

export default Grading_scheme;
