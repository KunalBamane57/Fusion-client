import React, { useState } from "react";
import {
  Button,
  TextInput,
  Table,
  Container,
  ScrollArea,
  Box,
} from "@mantine/core";
import "./ManageEvaluations.css";

function ManageEvaluations() {
  const [students, setStudents] = useState([
    { rollNo: "23BCS131", totalMarks: "", grade: "" },
    { rollNo: "23BCS001", totalMarks: "", grade: "" },
    { rollNo: "23BCS003", totalMarks: "", grade: "" },
    { rollNo: "23BCS004", totalMarks: "", grade: "" },
    { rollNo: "23BCS005", totalMarks: "", grade: "" },
    { rollNo: "23BCS006", totalMarks: "", grade: "" },
    { rollNo: "23BCS007", totalMarks: "", grade: "" },
  ]);

  const handleGenerateGrades = () => {
    const updatedStudents = students.map((student) => {
      const grade =
        student.totalMarks && student.totalMarks > 50 ? "Pass" : "Fail";
      return { ...student, grade };
    });
    setStudents(updatedStudents);
  };

  const handleTotalMarksChange = (index, value) => {
    setStudents((prev) =>
      prev.map((student, i) =>
        i === index ? { ...student, totalMarks: value } : student,
      ),
    );
  };

  const handleGradeChange = (index, value) => {
    setStudents((prev) =>
      prev.map((student, i) =>
        i === index ? { ...student, grade: value } : student,
      ),
    );
  };

  const rows = students.map((student, index) => (
    <tr key={index}>
      <td>
        <TextInput value={student.rollNo} readOnly />
      </td>
      <td>
        <TextInput
          placeholder="Total Marks"
          value={student.totalMarks}
          onChange={(e) => handleTotalMarksChange(index, e.currentTarget.value)}
        />
      </td>
      <td>
        <TextInput
          placeholder="Add manually"
          value={student.grade}
          onChange={(e) => handleGradeChange(index, e.currentTarget.value)}
        />
      </td>
    </tr>
  ));

  return (
    <Container
      fluid
      style={{ backgroundColor: "white" }}
      className="ManageEvaluations"
    >
      <h1>Manage Evaluations</h1>
      <p>(Please Click on Generate button before uploading)</p>
      <ScrollArea style={{ height: 400 }}>
        <Box sx={{ width: "100%" }}>
          <Table striped className="custom-table">
            <thead>
              <tr>
                <th>Roll No</th>
                <th>Total Marks Obtained</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </Box>
      </ScrollArea>
      <div>
        <Button className="btn" mt="md" onClick={handleGenerateGrades}>
          Generate Grades
        </Button>
      </div>
    </Container>
  );
}

export default ManageEvaluations;
