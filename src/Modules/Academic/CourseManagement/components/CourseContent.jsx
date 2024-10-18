import React, { useState } from "react";
import { Button, Table, TextInput, ActionIcon, FileInput } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import "./CourseContent.css";

function CourseContent() {
  // State for modules, where each module contains its name and its slides
  const [modules, setModules] = useState([]);

  // Input states
  const [moduleInput, setModuleInput] = useState("");
  const [slideInput, setSlideInput] = useState(null);
  const [selectedModuleIndex, setSelectedModuleIndex] = useState(null); // To track which module to add slides to

  // Add a new module
  const addModule = () => {
    if (moduleInput.trim()) {
      setModules([...modules, { name: moduleInput, slides: [] }]);
      setModuleInput(""); // Clear input field
    }
  };

  // Add a new slide to the selected module
  const addSlide = () => {
    if (slideInput && selectedModuleIndex !== null) {
      const updatedModules = [...modules];
      updatedModules[selectedModuleIndex].slides.push({
        name: slideInput.name,
        file: URL.createObjectURL(slideInput),
      });
      setModules(updatedModules);
      setSlideInput(null); // Clear file input field
    }
  };

  // Delete a module by index
  const deleteModule = (index) => {
    const updatedModules = modules.filter((_, i) => i !== index);
    setModules(updatedModules);
  };

  // Delete a slide from a module
  const deleteSlide = (moduleIndex, slideIndex) => {
    const updatedModules = [...modules];
    updatedModules[moduleIndex].slides = updatedModules[
      moduleIndex
    ].slides.filter((_, i) => i !== slideIndex);
    setModules(updatedModules);
  };

  return (
    <div className="content-container">
      {/* Module Section */}
      <div className="module-section">
        <h2>Add a Module</h2>
        <TextInput
          placeholder="Enter module name"
          value={moduleInput}
          onChange={(e) => setModuleInput(e.target.value)}
        />
        <Button
          onClick={addModule}
          style={{ margin: "10px 0" }}
          className="submit_btn"
        >
          Submit
        </Button>

        <Table highlightOnHover>
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Name of the Module</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {modules.map((module, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{module.name}</td>
                <td>
                  <ActionIcon color="red" onClick={() => deleteModule(index)}>
                    <IconTrash />
                  </ActionIcon>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Slide Section */}
      <div className="slide-section" style={{ marginTop: "30px" }}>
        <h2>Upload a Slide for a Module</h2>
        <FileInput
          placeholder="Upload slide file"
          value={slideInput}
          onChange={setSlideInput} // Update on file selection
        />
        <TextInput
          placeholder="Select Module Index (e.g., 0 for Module 1)"
          value={selectedModuleIndex}
          onChange={(e) => setSelectedModuleIndex(parseInt(e.target.value, 10))}
          type="number"
          min="0"
          max={modules.length - 1}
        />
        <Button
          onClick={addSlide}
          style={{ margin: "10px 0" }}
          className="submit_btn"
        >
          Submit
        </Button>

        <Table highlightOnHover>
          <thead>
            <tr>
              <th>Module Name</th>
              <th>Slides</th>
            </tr>
          </thead>
          <tbody>
            {modules.map((module, moduleIndex) => (
              <tr key={moduleIndex}>
                <td>{module.name}</td>
                <td>
                  <Table highlightOnHover>
                    <thead>
                      <tr>
                        <th>Sr.</th>
                        <th>Slide Name</th>
                        <th>Action</th>
                        <th>View</th>
                      </tr>
                    </thead>
                    <tbody>
                      {module.slides.map((slide, slideIndex) => (
                        <tr key={slideIndex}>
                          <td>{slideIndex + 1}</td>
                          <td>{slide.name}</td>
                          <td>
                            <ActionIcon
                              color="red"
                              onClick={() =>
                                deleteSlide(moduleIndex, slideIndex)
                              }
                            >
                              <IconTrash />
                            </ActionIcon>
                          </td>
                          <td>
                            <a
                              href={slide.file}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default CourseContent;
