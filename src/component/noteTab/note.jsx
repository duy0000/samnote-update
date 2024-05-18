import Box from "@mui/material/Box";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Tab from "@mui/material/Tab";
import { SliderNoteTab } from "../slider";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function Note() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "bgitem.main",
        borderRadius: "10px",
        padding: "0 0px 30px 10px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 30px 0 20px",
        }}
      >
        <Box component="h3" sx={{ color: "text.main" }}>
          NOTE
        </Box>
        <MoreHorizIcon sx={{ cursor: "pointer", color: "text.main" }} />
      </div>
      <TabContext value={value}>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider", marginBottom: "24px" }}
        >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Resent" value="1" />
            <Tab label="Recommended" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ width: "100%", padding: 0 }}>
          <SliderNoteTab />
        </TabPanel>
        <TabPanel value="2" sx={{ width: "100%", padding: 0 }}>
          <SliderNoteTab />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
