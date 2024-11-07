import { useState } from "react";
import { useSelector } from "react-redux";
import { Text, Group } from "@mantine/core";
import CustomBreadcrumbs from "../../../components/Breadcrumbs";
import Announcements from "./components/Announcements";
import Attendance from "./components/Attendance";
import CourseContent from "./components/CourseContent";
import GradeScheme from "./components/GradeScheme";
import SubmitMarks from "./components/SubmitMarks";
import EvaluateAssignment from "./components/EvaluateAssignment";
import ManageEvaluations from "./components/ManageEvaluations";

import Std_Attendance from "./components/Std_Attendance";
import Student_dashboard from "./components/Student_dashboard";
import Student_viewContent from "./components/Student_viewContent";
import Courses from "./components/Student_Registration/Courses";
import Finalreg from "./components/Student_Registration/Finalreg";

import "./index.css";

function CourseManagementPage() {
  const [activeComponent, setActiveComponent] = useState("Announcements");
  const role = useSelector((state) => state.user.role);

  const renderComponent = () => {
    if (role === "Professor") {
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
    } else {
      switch (activeComponent) {
        case "Student_dashboard":
          return <Student_dashboard />;
        case "Std_Attendance":
          return <Std_Attendance />;
        case "Student_viewContent":
          return <Student_viewContent />;
        case "Courses":
          return <Courses />;
        case "Finalreg":
          return <Finalreg />;
        default:
          return <Student_dashboard />;
      }
    }
  };

  const isActive = (component) => activeComponent === component;

  return (
    <>
      <CustomBreadcrumbs />
      <Text>Course Management Page</Text>

      {role === "Professor" ? (
        <>
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
      ) : (
        <>
          <Group position="center" spacing="md" mb="md" className="grp_btn">
            <button
              onClick={() => setActiveComponent("Student_dashboard")}
              className={isActive("Student_dashboard") ? "active" : ""}
            >
              Student Dashboard
            </button>
            <button
              onClick={() => setActiveComponent("Std_Attendance")}
              className={isActive("Std_Attendance") ? "active" : ""}
            >
              Attendance
            </button>
            <button
              onClick={() => setActiveComponent("Student_viewContent")}
              className={isActive("Student_viewContent") ? "active" : ""}
            >
              View Content
            </button>
            <button
              onClick={() => setActiveComponent("Courses")}
              className={isActive("Courses") ? "active" : ""}
            >
              Courses
            </button>
            <button
              onClick={() => setActiveComponent("Finalreg")}
              className={isActive("Finalreg") ? "active" : ""}
            >
              Final Registration
            </button>
          </Group>

          {renderComponent()}
        </>
      )}
    </>
  );
}

export default CourseManagementPage;
