import React, { useState } from "react";

const DragAndDrop = () => {
  const [dragging, setDragging] = useState(false);
  const [droppedFiles, setDroppedFiles] = useState([]);

  const handleDragStart = () => {
    setDragging(true);
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const files = [...e.dataTransfer.files];
    setDroppedFiles(files);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragOver={(e) => e.preventDefault()}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{
        border: `2px dashed ${dragging ? "blue" : "black"}`,
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <div
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        style={{
          backgroundColor: dragging ? "lightblue" : "white",
          padding: "10px",
          borderRadius: "5px",
          cursor: "move",
        }}
      >
        Drag files here!
      </div>
      <div style={{ marginTop: "10px" }}>
        {droppedFiles.length > 0 && (
          <ul>
            {droppedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DragAndDrop;
