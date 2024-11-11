import React, { useState } from "react";
import { Button, TextInput, Table } from "@mantine/core";
import "./Grading_scheme.css";

function GradeScheme() {
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
            {Object.keys(gradeBounds).map((grade) => (
              <tr key={grade}>
                <td>{grade}</td>
                <td>
                  <TextInput
                    placeholder="Lower Bound"
                    value={gradeBounds[grade].lower}
                    onChange={(e) =>
                      handleGradeChange(grade, "lower", e.currentTarget.value)
                    }
                  />
                </td>
                <td>
                  <TextInput
                    placeholder="Upper Bound"
                    value={gradeBounds[grade].upper}
                    onChange={(e) =>
                      handleGradeChange(grade, "upper", e.currentTarget.value)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div className="upload_button_wrapper">
        <Button variant="filled" color="blue" className="add_button">
          Upload Grading Scheme
        </Button>
      </div>
    </div>
  );
}

export default GradeScheme;
