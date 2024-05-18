import Box from "@mui/material/Box";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Tab from "@mui/material/Tab";
import { SliderPrivateNote } from "../slider";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function PrivateTab() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        width: "100%",
        padding: "20px 30px",

        borderRadius: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h5 style={{ color: "#888888" }}>PRIVATE NOTE</h5>
        <MoreHorizIcon sx={{ cursor: "pointer" }} />
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
          <SliderPrivateNote />
        </TabPanel>
        <TabPanel value="2" sx={{ width: "100%", padding: 0 }}>
          {/* <SliderPrivateNote /> */}
        </TabPanel>
      </TabContext>
    </Box>
  );
}
