import React, { useEffect } from "react";
import { Button, TextInput, Table } from "@mantine/core";
import "./Gradingscheme.css";

function GradeScheme() {
  useEffect(() => {
    // Declare table only once
    const tableElement = document.querySelector(".grading_table");

    if (tableElement) {
      const inputs = tableElement.querySelectorAll("input");

      inputs.forEach((input) => {
        input.addEventListener("input", (e) => {
          const row = e.target.closest("tr");
          const grade = row.querySelector("td:first-child").innerText;

          // Ensure closest td exists and has the data-bound attribute
          const boundCell = e.target.closest("td");
          const bound = boundCell ? boundCell.dataset.bound : null;

          if (bound) {
            console.log(
              `Grade: ${grade}, Bound: ${bound}, Value: ${e.target.value}`,
            );
          } else {
            console.error("No data-bound attribute found");
          }
        });
      });

      // Cleanup event listeners when the component unmounts
      return () => {
        inputs.forEach((input) => {
          input.removeEventListener("input", () => {});
        });
      };
    }
  }, []);

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
            {["O", "A+", "A", "B+", "B", "C+", "C", "D+", "D", "F"].map(
              (grade) => (
                <tr key={grade}>
                  <td>{grade}</td>
                  <td data-bound="lower">
                    <TextInput placeholder="Lower Bound" />
                  </td>
                  <td data-bound="upper">
                    <TextInput placeholder="Upper Bound" />
                  </td>
                </tr>
              ),
            )}
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
