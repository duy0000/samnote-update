import Box from "@mui/material/Box";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function InformationTab() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        backgroundColor: "bgitem.main",
        borderRadius: "10px",
        height: "fit-content",
        marginTop: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "20px 20px 20px 30px ",
          justifyContent: "space-between",
        }}
      >
        <Box component="h3" sx={{ color: "text.main" }}>
          NEW RECORDED INFORMATION
        </Box>
        <MoreHorizIcon sx={{ cursor: "pointer", color: "text.main" }} />
      </div>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Photo" value="1" />
            <Tab label="Document" value="2" />
            <Tab label="Audio" value="3" />
            <Tab label="Note" value="4" />
            <Tab label="Email" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "10px",
            }}
          >
            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="../public/img/image-info.jpg"
                alt=""
              />
              <Box
                component="p"
                sx={{
                  textAlign: "center",
                  color: "text.main",
                  padding: "20px 0 10px",
                }}
              >
                29/01/2023
              </Box>
            </div>{" "}
            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="../public/img/image-info.jpg"
                alt=""
              />
              <Box
                component="p"
                sx={{
                  textAlign: "center",
                  color: "text.main",
                  padding: "20px 0 10px",
                }}
              >
                29/01/2023
              </Box>
            </div>{" "}
            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="../public/img/image-info.jpg"
                alt=""
              />
              <Box
                component="p"
                sx={{
                  textAlign: "center",
                  color: "text.main",
                  padding: "20px 0 10px",
                }}
              >
                29/01/2023
              </Box>
            </div>{" "}
            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="../public/img/image-info.jpg"
                alt=""
              />
              <Box
                component="p"
                sx={{
                  textAlign: "center",
                  color: "text.main",
                  padding: "20px 0 10px",
                }}
              >
                29/01/2023
              </Box>
            </div>{" "}
            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="../public/img/image-info.jpg"
                alt=""
              />
              <Box
                component="p"
                sx={{
                  textAlign: "center",
                  color: "text.main",
                  padding: "20px 0 10px",
                }}
              >
                29/01/2023
              </Box>
            </div>{" "}
            <div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="../public/img/image-info.jpg"
                alt=""
              />
              <Box
                component="p"
                sx={{
                  textAlign: "center",
                  color: "text.main",
                  padding: "20px 0 10px",
                }}
              >
                29/01/2023
              </Box>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2">tab2</TabPanel>
        <TabPanel value="3">tab3</TabPanel>
        <TabPanel value="4">tab4</TabPanel>
        <TabPanel value="5">tab5</TabPanel>
      </TabContext>
    </Box>
  );
}
