import React from "react";
import { Table, Title, Paper, Text, Group } from "@mantine/core";

function Attendance() {
  const attendanceData = [
    {
      id: 1,
      courseId: "CS3009",
      courseName: "Network Security & Cryptography",
      totalPresent: 18,
      totalAttendance: 20,
      percentage: "90%",
    },
    {
      id: 2,
      courseId: "CS3010",
      courseName: "Software Engineering",
      totalPresent: 18,
      totalAttendance: 20,
      percentage: "90%",
    },
    {
      id: 3,
      courseId: "CS3011",
      courseName: "Artificial Intelligence",
      totalPresent: 18,
      totalAttendance: 20,
      percentage: "90%",
    },
    {
      id: 4,
      courseId: "CS8028",
      courseName: "Hardware Security",
      totalPresent: 14,
      totalAttendance: 15,
      percentage: "93%",
    },
    {
      id: 5,
      courseId: "HS3004",
      courseName: "Ecology & Environment Science",
      totalPresent: 10,
      totalAttendance: 10,
      percentage: "100%",
    },
  ];

  const rows = attendanceData.map((course) => (
    <tr key={course.id}>
      <td>{course.id}</td>
      <td>{course.courseId}</td>
      <td>{course.courseName}</td>
      <td>{course.totalPresent}</td>
      <td>{course.totalAttendance}</td>
      <td>
        <Text color={course.percentage === "100%" ? "green" : "blue"}>
          {course.percentage}
        </Text>
      </td>
    </tr>
  ));

  return (
    <Paper shadow="xs" padding="lg">
      <Group position="center">
        <Title order={1}>Attendance</Title>
      </Group>
      <Table highlightOnHover verticalSpacing="md">
        <thead>
          <tr>
            <th>#</th>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Total Present</th>
            <th>Total Attendance</th>
            <th>Percentage %</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Paper>
  );
}

export default Attendance;
