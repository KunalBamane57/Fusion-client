import { useState } from "react";
import SubmitAttendance from "./Attendance/SubmitAttendance";
import "./Attendance.css";
import Viewattendance from "./Attendance/Viewattendance";

function Attendance() {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div className="Main">
      <div className="attendance-buttons">
        <button onClick={() => setActiveComponent("view")}>
          View Attendance
        </button>
        <button onClick={() => setActiveComponent("submit")}>
          Submit Attendance
        </button>
      </div>

      <div className="attendance">
        {activeComponent === "view" && (
          <div className="view_attendance">
            <Viewattendance />
          </div>
        )}
        {activeComponent === "submit" && (
          <div className="submit_attendance">
            <SubmitAttendance />
          </div>
        )}
      </div>
    </div>
  );
}

export default Attendance;
