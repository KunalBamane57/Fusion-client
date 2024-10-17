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
    { rollNo: "23BCS131", totalMarks: 0, grade: "" },
    { rollNo: "23BCS001", totalMarks: 0, grade: "" },
    { rollNo: "23BCS003", totalMarks: 0, grade: "" },
    { rollNo: "23BCS004", totalMarks: 0, grade: "" },
    { rollNo: "23BCS005", totalMarks: 0, grade: "" },
    { rollNo: "23BCS006", totalMarks: 0, grade: "" },
    { rollNo: "23BCS007", totalMarks: 0, grade: "" },
  ]);

  const handleGenerateGrades = () => {
    const updatedStudents = students.map((student) => {
      const grade = student.totalMarks > 50 ? "Pass" : "Fail";
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
        <TextInput value={student.grade || "Add manually"} readOnly />
      </td>
    </tr>
  ));

  return (
    <Container
      fluid
      mx="20px"
      style={{ backgroundColor: "white" }}
      py="10px"
      px="20px"
      className="main_grading_scheme"
    >
      <h1>Manage Evaluations</h1>
      <p>(Please Click on Generate button before uploading)</p>
      <ScrollArea style={{ height: 400 }}>
        <Box sx={{ width: "100%" }}>
          <Table striped className="Grading_table">
            <thead>
              <tr>
                <th>Roll No</th>
                <th>Total Marks (%)</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </Box>
      </ScrollArea>
      <div className="btn">
        <Button mt="md" onClick={handleGenerateGrades}>
          Generate Grades
        </Button>
      </div>
    </Container>
  );
}

export default ManageEvaluations;
