import { useState, useEffect } from "react";
import {
  Table,
  LoadingOverlay,
  TextInput,
  Group,
  Button,
  Paper,
  Title,
  Stack,
} from "@mantine/core";
import axios from "axios";
import { getAttendance } from "../../../../../routes/courseMgmtRoutes";
import "./Attendance_global.css";

function ViewAttendance() {
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    student_id: "",
    instructor_id: "",
    date_from: "",
    date_to: "",
  });

  const fetchAttendance = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("authToken");
      const params = { ...filters };
      const response = await axios.get(getAttendance, {
        params,
        headers: { Authorization: `Token ${token}` },
      });
      setAttendanceData(response.data.data);
    } catch (error) {
      console.error("Error fetching attendance:", error);
      alert(error.response?.data?.error || "Failed to fetch attendance");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    fetchAttendance();
  };

  return (
    <Paper shadow="xs" p="lg" radius="md">
      <Stack spacing="md">
        <Title order={4} align="center">
          Attendance Records
        </Title>

        <form onSubmit={handleFilterSubmit}>
          <Group grow spacing="sm" wrap="wrap">
            <TextInput
              placeholder="Student ID"
              value={filters.student_id}
              onChange={(e) => handleFilterChange("student_id", e.target.value)}
            />
            <TextInput
              placeholder="Instructor ID"
              value={filters.instructor_id}
              onChange={(e) =>
                handleFilterChange("instructor_id", e.target.value)
              }
            />
            <TextInput
              type="date"
              value={filters.date_from}
              onChange={(e) => handleFilterChange("date_from", e.target.value)}
            />
            <TextInput
              type="date"
              value={filters.date_to}
              onChange={(e) => handleFilterChange("date_to", e.target.value)}
            />
            <Button type="submit" variant="light" color="blue">
              Apply
            </Button>
          </Group>
        </form>

        <div style={{ position: "relative" }}>
          <LoadingOverlay visible={loading} />
          <Table striped highlightOnHover withColumnBorders>
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Instructor ID</th>
                <th>Date</th>
                <th>Present</th>
                <th>Total Attendance</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.length > 0 ? (
                attendanceData.map((record) => (
                  <tr key={record.id}>
                    <td>{record.student_id}</td>
                    <td>{record.instructor_id}</td>
                    <td>{record.date}</td>
                    <td>{record.present}</td>
                    <td>{record.no_of_attendance}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    style={{ textAlign: "center", color: "#888" }}
                  >
                    No data found
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </Stack>
    </Paper>
  );
}

export default ViewAttendance;
