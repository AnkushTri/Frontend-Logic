import React from "react";

const LazyLoading = () => {
  return (
    <div>
      {/* Placeholder image */}
      <img
        src="placeholder.jpg"
        alt="Placeholder"
        style={{ width: "100px", height: "100px" }}
      />
      {/* Actual image loaded lazily */}
      <div style={{ height: "1000px" }}>
        {/* This div creates space, pushing the actual image below the initial viewport */}
      </div>
      <img
        src="anku.jpg"
        alt="Actual Image"
        loading="lazy"
        style={{ width: "100px", height: "100px" }}
      />
    </div>
  );
};

export default LazyLoading;
