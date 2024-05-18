import Navbar from "../component/layout/toolBar";
import { Box } from "@mui/material";
import HelloUser from "../component/user/helloUser";
import Note from "../component/noteTab/note";

import PinnedNoteTab from "../component/noteTab/pinnedNote";
import PublicNoteTab from "../component/noteTab/publickNote";
import CheckListTab from "../component/noteTab/checkListNote";
import InformationTab from "../component/noteTab/informationNote";
import Scratch from "../component/scratch";
import NewUser from "../component/user/newUser";
import NewNote from "../component/user/newNote";
import Footer from "../component/layout/footer";
const BackgroundImage = "../public/img/c842abde6e62f03ed14e2ca0c5591696.jpg";

function Home() {
  return (
    <>
      <Box
        component="main"
        sx={{
          display: "grid",
          position: "relative",
          gridTemplateColumns: "250px 1fr",
          backgroundColor: "bg.main",
          paddingBottom: "100px",
        }}
      >
        <Navbar />
        <Box component="div" sx={{ position: "relative", paddingTop: "375px" }}>
          <img
            style={{
              top: "0",
              right: "0",
              width: "100%",
              objectFit: "cover",
              left: 0,
              zIndex: 9,
              height: "550px",
              position: "absolute",
            }}
            src={BackgroundImage}
            alt=""
          />
          <HelloUser />
          <Box
            component="section"
            sx={{
              display: "grid",
              position: "relative",
              zIndex: 20,
              gridTemplateColumns: "1fr 250px",
              gap: "10px",
              borderRadius: "20px",
            }}
          >
            <div
              style={{
                gridColumn: "1/2",
                backgroundColor: "bgitem.main",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <Note />
            </div>
            <Scratch />
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 250px",
              gap: "10px",
              marginTop: "10px",
              borderRadius: "10px",
              width: "100%",
            }}
          >
            <div
              style={{
                gridColumn: "1/2",
                borderRadius: "10px",
                width: "100%",
                overflow: "hidden",
              }}
            >
              <PinnedNoteTab />

              <PublicNoteTab />

              <CheckListTab />
            </div>
            <div>
              <NewUser />
              <div style={{ marginTop: "10px" }}>
                <NewNote />
              </div>
            </div>
          </Box>
          <section
            style={{
              borderRadius: "20px",
            }}
          >
            <InformationTab />
          </section>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default Home;
