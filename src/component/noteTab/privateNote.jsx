import Box from "@mui/material/Box";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Tab from "@mui/material/Tab";
import { SliderPrivateNote } from "../slider";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function PrivateNoteTab() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        backgroundColor: "bgitem.main",
        borderRadius: "10px",

        padding: "0 10px 30px 10px",
        marginTop: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "10px 10px 0px 20px",
          padding: "10px 0px 0 10px",
        }}
      >
        <Box component="h3" sx={{ color: "text.main" }}>
          PRIVATE NOTE
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
        <TabPanel value="1" sx={{ padding: 0 }}>
          <SliderPrivateNote />
        </TabPanel>
        <TabPanel value="2" sx={{ padding: 0 }}></TabPanel>
      </TabContext>
    </Box>
  );
}
