import React, { useState, useEffect } from "react";
import { withResizeDetector } from "react-resize-detector";
import MonacoEditor from "@monaco-editor/react";

const containerStyles = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const AdaptiveComponent = ({ width, height }) => {
  const [color, setColor] = useState("red");

  useEffect(() => {
    setColor(width > 500 ? "coral" : "aqua");
  }, [width]);

  // return <div style={{ backgroundColor: color, ...containerStyles }}>{`${width}x${height}`}</div>;
  return (
    <div style={{ backgroundColor: color, ...containerStyles }}>
      <MonacoEditor
        theme='vs-dark'
        //height={height}
        height={"100%"}
        options={{
          wordWrap: "on",
        }}
      />
    </div>
  );
};

const AdaptiveWithDetector = withResizeDetector(AdaptiveComponent);

const ResizeEditor = ({ height }) => {
  //return <AdaptiveWithDetector />;
  return (
    <MonacoEditor
      height={height}
      defaultLanguage='javascript'
      defaultValue='// some comment'
      options={{
        automaticLayout: true,
      }}
    />
  );
};

export default ResizeEditor;
