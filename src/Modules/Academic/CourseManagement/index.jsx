import { useState } from "react";
import { Text, Group } from "@mantine/core"; // Removed Button import
import CustomBreadcrumbs from "../../../components/Breadcrumbs";
import Announcements from "./components/Announcements";
import Attendance from "./components/Attendance";
import CourseContent from "./components/CourseContent";
import GradeScheme from "./components/GradeScheme";
import SubmitMarks from "./components/SubmitMarks";
import EvaluateAssignment from "./components/EvaluateAssignment";
import ManageEvaluations from "./components/ManageEvaluations";
import "./index.css";

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

  const isActive = (component) => activeComponent === component;

  return (
    <>
      <CustomBreadcrumbs />
      <Text>Course Management Page</Text>

      <Group position="center" spacing="md" mb="md" className="grp_btn">
        <button
          onClick={() => setActiveComponent("Announcements")}
          className={isActive("Announcements") ? "active" : ""}
        >
          Announcements
        </button>
        <button
          onClick={() => setActiveComponent("Attendance")}
          className={isActive("Attendance") ? "active" : ""}
        >
          Attendance
        </button>
        <button
          onClick={() => setActiveComponent("CourseContent")}
          className={isActive("CourseContent") ? "active" : ""}
        >
          Course Content
        </button>
        <button
          onClick={() => setActiveComponent("EvaluateAssignment")}
          className={isActive("EvaluateAssignment") ? "active" : ""}
        >
          Evaluate Assignment
        </button>
        <button
          onClick={() => setActiveComponent("GradeScheme")}
          className={isActive("GradeScheme") ? "active" : ""}
        >
          Grade Scheme
        </button>
        <button
          onClick={() => setActiveComponent("ManageEvaluations")}
          className={isActive("ManageEvaluations") ? "active" : ""}
        >
          Manage Evaluations
        </button>
        <button
          onClick={() => setActiveComponent("SubmitMarks")}
          className={isActive("SubmitMarks") ? "active" : ""}
        >
          Submit Marks
        </button>
      </Group>

      {renderComponent()}
    </>
  );
}

export default CourseManagementPage;
