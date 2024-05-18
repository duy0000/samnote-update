import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box } from "@mui/material";

function Scratch() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "bgquicknote.main",
          minHeight: "300px",
          padding: "10px 10px 0",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box component="h3" sx={{ color: "text.main" }}>
            Quick notes
          </Box>
          <MoreHorizIcon sx={{ color: "text.main", cursor: "pointer" }} />
        </div>
        <Box
          component="div"
          sx={{
            color: "text.main",
            // height: "80%",
            // backgroundImage:
            //   "repeating-linear-gradient(to bottom,lightgray 0px,lightgray 1px,transparent 1px,transparent 30px)",
            // backgroundSize: "100% 30px",
            lineHeight: "35px",
          }}
        >
          <p>
            lorem ipsum dolor sit amet consectetur gsgdhewhidhue jgxuygwuxgw
            jwgxygwyeg jheguyxgueg
          </p>
        </Box>
      </Box>
    </>
  );
}
export default Scratch;
