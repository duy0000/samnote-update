import Box from "@mui/material/Box";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Tab from "@mui/material/Tab";
import { SliderPinnedNote } from "../slider";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function PinnedNoteTab() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        backgroundColor: "bgitem.main",
        overflow: "hidden",
        padding: "10px 10px 30px",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0px 10px 0 20px",
        }}
      >
        <Box component="h3" sx={{ color: "text.main" }}>
          PINNED NOTE
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
          <SliderPinnedNote />
        </TabPanel>
        <TabPanel value="2" sx={{ width: "100%", padding: 0 }}>
          <SliderPinnedNote />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
