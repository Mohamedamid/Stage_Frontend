import React from "react";
import pdfFile from "./cv.pdf";

const PDFViewer: React.FC = () => {
  return (
    <div style={{ height: "80vh", width: "100%", margin: "auto" }}>
      <iframe
        src={pdfFile}
        title="PDF Viewer"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </div>
  );
};

export default PDFViewer;
