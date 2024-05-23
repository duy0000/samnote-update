import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./component/layout/toolBar";
import { Box } from "@mui/material";
import TakeNote from "./pages/takeNote";
import CmtPublicNote from "./pages/cmtPublicNote";
import UserProfile from "./pages/userProfile";
import CheckUser from "./pages/checkUser";
import HandleArt from "./pages/artNote";
import GroupPage from "./pages/groupPage";

function App() {
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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/take-note" element={<TakeNote />} />
            <Route path="/cmt-publicnote" element={<CmtPublicNote />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/check-user" element={<CheckUser />} />
            <Route path="/art-note" element={<HandleArt />} />
            <Route path="/Group" element={<GroupPage />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </>
  );
}

export default App;
