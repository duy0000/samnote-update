import { Box } from "@mui/material";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function WriteNote() {
  const [value, setValue] = useState("");

  return (
    <Box sx={{ backgroundColor: "bgitem.main", stroke: "text.main" }}>
      <ReactQuill
        sx={{ backgroundColor: "bgitem.main", stroke: "text.main" }}
        // theme="snow"
        value={value}
        onChange={setValue}
        toolbarOptions
        placeholder="write note here"
        id="coment"
      />
    </Box>
  );
}
