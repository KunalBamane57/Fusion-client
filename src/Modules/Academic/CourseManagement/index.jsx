import { useState } from "react";
import { Text, Button, Group } from "@mantine/core";
import CustomBreadcrumbs from "../../../components/Breadcrumbs";
import Announcements from "./components/Announcements";
import Attendance from "./components/Attendance";
import CourseContent from "./components/CourseContent";
import GradeScheme from "./components/GradeScheme";
import SubmitMarks from "./components/SubmitMarks";
import EvaluateAssignment from "./components/EvaluateAssignment";
import ManageEvaluations from "./components/ManageEvaluations";

function CourseManagementPage() {
  const [activeComponent, setActiveComponent] = useState("Announcements");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Announcements":
        return <Announcements />;
      case "Attendance":
        return <Attendance />;
      case "CourseContent":
        return <CourseContent />;
      case "EvaluateAssignment":
        return <EvaluateAssignment />;
      case "GradeScheme":
        return <GradeScheme />;
      case "ManageEvaluations":
        return <ManageEvaluations />;
      case "SubmitMarks":
        return <SubmitMarks />;
      default:
        return <Announcements />;
    }
  };

  return (
    <>
      <CustomBreadcrumbs />
      <Text>Course Management Page</Text>

      <Group position="center" spacing="md" mb="md">
        <Button onClick={() => setActiveComponent("Announcements")}>
          Announcements
        </Button>
        <Button onClick={() => setActiveComponent("Attendance")}>
          Attendance
        </Button>
        <Button onClick={() => setActiveComponent("CourseContent")}>
          Course Content
        </Button>
        <Button onClick={() => setActiveComponent("EvaluateAssignment")}>
          Evaluate Assignment
        </Button>
        <Button onClick={() => setActiveComponent("GradeScheme")}>
          Grade Scheme
        </Button>
        <Button onClick={() => setActiveComponent("ManageEvaluations")}>
          Manage Evaluations
        </Button>
        <Button onClick={() => setActiveComponent("SubmitMarks")}>
          Submit Marks
        </Button>
      </Group>

      {renderComponent()}
    </>
  );
}

export default CourseManagementPage;
