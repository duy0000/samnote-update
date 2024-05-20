import { Box } from "@mui/material";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function WriteNote() {
  const [value, setValue] = useState("");

  return (
    <ReactQuill
      sx={{}}
      // theme="snow"
      value={value}
      onChange={setValue}
      toolbarOptions
      placeholder="write note here"
      id="coment"
    />
  );
}
