import HelloUser from "../component/user/helloUser";
import Scratch from "../component/scratch";
import NewUser from "../component/user/newUser";
import NewNote from "../component/user/newNote";
import NoteAndComent from "../component/noteAndComent";
import PublicNoteTab from "../component/noteTab/publickNote";
import InformationTab from "../component/noteTab/informationNote";
import Box from "@mui/material/Box";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

function CmtPublicNote() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div style={{ position: "relative", paddingTop: "375px" }}>
        <img
          style={{
            top: "0",
            right: "0",
            width: "100%",
            objectFit: "cover",
            left: 0,
            zIndex: 9,
            height: "100vh",
            position: "absolute",
          }}
          src="../public/img/c842abde6e62f03ed14e2ca0c5591696.jpg"
          alt=""
        />
        <HelloUser />
        <section
          style={{
            display: "grid",
            position: "relative",
            zIndex: 20,
            gridTemplateColumns: "1fr 250px",

            borderRadius: "20px",
            marginLeft: "10px",
            gap: "10px",
          }}
        >
          <div
            style={{
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
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
                  NOTES
                </Box>
                <MoreHorizIcon sx={{ cursor: "pointer", color: "text.main" }} />
              </div>
              <TabContext value={value}>
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    marginBottom: "24px",
                  }}
                >
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Resent" value="1" />
                    <Tab label="Most viewed" value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1" sx={{ width: "100%", padding: 0 }}>
                  <NoteAndComent />
                </TabPanel>
                <TabPanel value="2" sx={{ width: "100%", padding: 0 }}>
                  <NoteAndComent />
                </TabPanel>
              </TabContext>
            </Box>
          </div>
          <div>
            <Scratch />
            <div style={{ marginTop: "10px" }}>
              <NewUser />
            </div>
          </div>
        </section>
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 250px",

            borderRadius: "20px",
            marginLeft: "10px",
            gap: "10px",
          }}
        >
          <div
            style={{
              gridColumn: "1/2",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <PublicNoteTab />
          </div>

          <div style={{ marginTop: "10px" }}>
            <NewNote />
          </div>
        </section>
        <section
          style={{
            borderRadius: "20px",
            marginLeft: "10px",
          }}
        >
          <InformationTab />
        </section>
      </div>
    </>
  );
}

export default CmtPublicNote;
