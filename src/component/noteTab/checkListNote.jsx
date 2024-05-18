import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function CheckListTab() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        backgroundColor: "bgitem.main",
        marginTop: "10px",
        padding: "10px 10px 30px ",

        borderRadius: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 10px 0 20px",
        }}
      >
        <Box component="h3" sx={{ color: "text.main" }}>
          CHECK LIST
        </Box>
        <MoreHorizIcon sx={{ cursor: "pointer", color: "text.main" }} />
      </div>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Resent" value="1" />
            <Tab label="Recommended" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" style={{ padding: 0 }}>
          <div
            style={{
              display: "grid",
              gap: "15px",
              padding: "25px 10px 0",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            {" "}
            <div
              style={{
                border: "3px solid #888",
                padding: "20px 0 20px 50px",
              }}
            >
              {" "}
              <FormGroup>
                <FormControlLabel
                  sx={{ color: "text.main" }}
                  control={<Checkbox defaultChecked />}
                  label="No name note"
                />
                <FormControlLabel
                  sx={{ color: "text.main" }}
                  control={<Checkbox />}
                  label="No name note"
                />
                <FormControlLabel
                  sx={{ color: "text.main" }}
                  control={<Checkbox />}
                  label="No name note"
                />
                <FormControlLabel
                  sx={{ color: "text.main" }}
                  control={<Checkbox />}
                  label="No name note"
                />
              </FormGroup>
              <Box
                component="p"
                sx={{
                  position: "relative",
                  bottom: "0px",
                  left: "-20px",
                  fontSize: "12px",
                  color: "text.main",
                  background: "#999",
                  width: "fit-content",
                  padding: "3px 10px",
                  borderRadius: "8px",
                }}
              >
                created 29/01/2023
              </Box>
            </div>
            <div
              style={{
                border: "3px solid #888",
                padding: "20px 0 20px 50px",
              }}
            >
              {" "}
              <FormGroup>
                <FormControlLabel
                  sx={{ color: "text.main" }}
                  control={<Checkbox defaultChecked />}
                  label="No name note"
                />
                <FormControlLabel
                  sx={{ color: "text.main" }}
                  control={<Checkbox />}
                  label="No name note"
                />
                <FormControlLabel
                  sx={{ color: "text.main" }}
                  control={<Checkbox />}
                  label="No name note"
                />
                <FormControlLabel
                  sx={{ color: "text.main" }}
                  control={<Checkbox />}
                  label="No name note"
                />
              </FormGroup>
              <Box
                component="p"
                sx={{
                  position: "relative",
                  bottom: "0px",
                  left: "-20px",
                  fontSize: "12px",
                  color: "text.main",
                  background: "#999",
                  width: "fit-content",
                  padding: "3px 10px",
                  borderRadius: "8px",
                }}
              >
                created 29/01/2023
              </Box>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2" style={{ padding: 0 }}></TabPanel>
      </TabContext>
    </Box>
  );
}
