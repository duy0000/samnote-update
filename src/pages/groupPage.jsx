import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SubdirectoryArrowRightSharpIcon from "@mui/icons-material/SubdirectoryArrowRightSharp";

function GroupPage() {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "40% 60%",
        }}
      >
        <Box
          sx={{
            backgroundColor: "bgitem.main",
            paddingTop: "10px",
            height: "635px",
          }}
        >
          <Box
            sx={{
              color: "text.main",
              boxShadow: "0px 2px 0px rgba(0, 0, 0, 0.5)               ",
              paddingLeft: "10px",
            }}
          >
            {" "}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontWeight: "700",
                fontSize: "20px",
                padding: "10px 10px 20px",
              }}
            >
              Chat
              <AddIcon sx={{ cursor: "pointer" }} />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                component="form"
                sx={{
                  backgroundColor: "#DADADA",
                  display: "flex",
                  alignItems: "center",
                  height: "40px",
                  width: "100%",
                  borderRadius: "30px",
                  margin: "0 10px 10px 0px",
                }}
              >
                {" "}
                <SearchIcon sx={{ marginLeft: "15px", color: "#333" }} />
                <InputBase
                  sx={{ ml: 1, flex: 1, color: "#333" }}
                  placeholder="Search Messenger"
                  inputProps={{ "aria-label": "search google maps" }}
                />
              </Box>
            </div>
          </Box>

          <div style={{ overflow: "hidden", paddingBotom: "100px" }}>
            <div
              style={{
                overflow: "auto",
                height: "541px",
                scrollbarWidth: "none",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  margin: " 20px",
                  color: "text.main",
                }}
              >
                {" "}
                <Avatar
                  sx={{
                    height: "40px",
                    width: "40px",
                    marginRight: "15px",
                  }}
                  src="../public/img/avata.jpg"
                  alt=""
                />
                <div style={{ width: "80%" }}>
                  <strong>User Name</strong>
                  <p
                    style={{
                      padding: 0,
                      margin: 0,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    last mesage last mesage last mesage gdsiugfui gduygdg
                  </p>
                </div>
                {/* <div>
                  <SvgIcon
                    sx={{ marginRight: "15px", color: "text.main" }}
                    width="30"
                    height="30"
                    viewBox="0 0 48 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M42 24.5L28 10.5V18.5C14 20.5 8 30.5 6 40.5C11 33.5 18 30.3 28 30.3V38.5L42 24.5Z" />
                  </SvgIcon>
                  <SvgIcon
                    sx={{ color: "text.main" }}
                    width="30"
                    height="30"
                    viewBox="0 0 48 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M32.38 4.5H15.62C8.34 4.5 4 8.84 4 16.12V32.86C4 40.16 8.34 44.5 15.62 44.5H32.36C39.64 44.5 43.98 40.16 43.98 32.88V16.12C44 8.84 39.66 4.5 32.38 4.5ZM31.52 32.02C31.4 33.72 31.26 35.84 27.42 35.84H20.58C16.76 35.84 16.6 33.72 16.48 32.02L15.86 24.1C15.8411 23.8463 15.8739 23.5914 15.9564 23.3508C16.0389 23.1101 16.1694 22.8887 16.34 22.7C16.5104 22.5151 16.7177 22.3679 16.9485 22.268C17.1793 22.1681 17.4285 22.1177 17.68 22.12H30.32C30.82 22.12 31.32 22.34 31.66 22.7C32 23.08 32.18 23.58 32.14 24.08L31.52 32.02ZM33.6 20.14H33.48C31.4 19.94 29.5 19.8 27.68 19.72C25.2355 19.5899 22.7863 19.5699 20.34 19.66C19.14 19.72 17.92 19.8 16.72 19.92L14.54 20.14H14.4C13.7 20.14 13.1 19.62 13.04 18.9C12.96 18.16 13.52 17.48 14.26 17.42L16.44 17.2C17.3 17.12 18.14 17.06 19 17.02L19.16 16.08C19.32 15.08 19.62 13.16 22.62 13.16H25.4C28.42 13.16 28.72 15.14 28.86 16.1L29.02 17.06C30.52 17.14 32.06 17.26 33.74 17.42C34.5 17.5 35.04 18.16 34.98 18.92C34.9 19.62 34.3 20.14 33.6 20.14Z" />
                  </SvgIcon>
                </div> */}
              </Box>{" "}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: " 20px",
                  color: "text.main",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <Avatar
                    sx={{
                      height: "40px",
                      width: "40px",
                      marginRight: "15px",
                    }}
                    src="../public/img/avata.jpg"
                    alt=""
                  />
                  <div style={{ width: "80%" }}>
                    <strong>Group Name</strong>
                    <p
                      style={{
                        padding: 0,
                        margin: 0,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <strong style={{ marginRight: "5px" }}>username</strong>
                      last message last message last message
                    </p>
                  </div>
                </div>
              </Box>{" "}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  margin: " 20px",
                  color: "text.main",
                }}
              >
                {" "}
                <Avatar
                  sx={{
                    height: "40px",
                    width: "40px",
                    marginRight: "15px",
                  }}
                  src="../public/img/avata.jpg"
                  alt=""
                />
                <div style={{ width: "80%" }}>
                  <strong>User Name</strong>
                  <p
                    style={{
                      padding: 0,
                      margin: 0,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    last mesage last mesage last mesage gdsiugfui gduygdg
                  </p>
                </div>
                {/* <div>
                  <SvgIcon
                    sx={{ marginRight: "15px", color: "text.main" }}
                    width="30"
                    height="30"
                    viewBox="0 0 48 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M42 24.5L28 10.5V18.5C14 20.5 8 30.5 6 40.5C11 33.5 18 30.3 28 30.3V38.5L42 24.5Z" />
                  </SvgIcon>
                  <SvgIcon
                    sx={{ color: "text.main" }}
                    width="30"
                    height="30"
                    viewBox="0 0 48 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M32.38 4.5H15.62C8.34 4.5 4 8.84 4 16.12V32.86C4 40.16 8.34 44.5 15.62 44.5H32.36C39.64 44.5 43.98 40.16 43.98 32.88V16.12C44 8.84 39.66 4.5 32.38 4.5ZM31.52 32.02C31.4 33.72 31.26 35.84 27.42 35.84H20.58C16.76 35.84 16.6 33.72 16.48 32.02L15.86 24.1C15.8411 23.8463 15.8739 23.5914 15.9564 23.3508C16.0389 23.1101 16.1694 22.8887 16.34 22.7C16.5104 22.5151 16.7177 22.3679 16.9485 22.268C17.1793 22.1681 17.4285 22.1177 17.68 22.12H30.32C30.82 22.12 31.32 22.34 31.66 22.7C32 23.08 32.18 23.58 32.14 24.08L31.52 32.02ZM33.6 20.14H33.48C31.4 19.94 29.5 19.8 27.68 19.72C25.2355 19.5899 22.7863 19.5699 20.34 19.66C19.14 19.72 17.92 19.8 16.72 19.92L14.54 20.14H14.4C13.7 20.14 13.1 19.62 13.04 18.9C12.96 18.16 13.52 17.48 14.26 17.42L16.44 17.2C17.3 17.12 18.14 17.06 19 17.02L19.16 16.08C19.32 15.08 19.62 13.16 22.62 13.16H25.4C28.42 13.16 28.72 15.14 28.86 16.1L29.02 17.06C30.52 17.14 32.06 17.26 33.74 17.42C34.5 17.5 35.04 18.16 34.98 18.92C34.9 19.62 34.3 20.14 33.6 20.14Z" />
                  </SvgIcon>
                </div> */}
              </Box>{" "}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: " 20px",
                  color: "text.main",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <Avatar
                    sx={{
                      height: "40px",
                      width: "40px",
                      marginRight: "15px",
                    }}
                    src="../public/img/avata.jpg"
                    alt=""
                  />
                  <div style={{ width: "80%" }}>
                    <strong>Group Name</strong>
                    <p
                      style={{
                        padding: 0,
                        margin: 0,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <strong style={{ marginRight: "5px" }}>username</strong>
                      last message last message last message
                    </p>
                  </div>
                </div>
              </Box>{" "}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: " 20px",
                  color: "text.main",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <Avatar
                    sx={{
                      height: "40px",
                      width: "40px",
                      marginRight: "15px",
                    }}
                    src="../public/img/avata.jpg"
                    alt=""
                  />
                  <div style={{ width: "80%" }}>
                    <strong>Group Name</strong>
                    <p
                      style={{
                        padding: 0,
                        margin: 0,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <strong style={{ marginRight: "5px" }}>username</strong>
                      last message last message last message
                    </p>
                  </div>
                </div>
              </Box>{" "}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  margin: " 20px",
                  color: "text.main",
                }}
              >
                {" "}
                <Avatar
                  sx={{
                    height: "40px",
                    width: "40px",
                    marginRight: "15px",
                  }}
                  src="../public/img/avata.jpg"
                  alt=""
                />
                <div style={{ width: "80%" }}>
                  <strong>User Name</strong>
                  <p
                    style={{
                      padding: 0,
                      margin: 0,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    last mesage last mesage last mesage gdsiugfui gduygdg
                  </p>
                </div>
                {/* <div>
                  <SvgIcon
                    sx={{ marginRight: "15px", color: "text.main" }}
                    width="30"
                    height="30"
                    viewBox="0 0 48 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M42 24.5L28 10.5V18.5C14 20.5 8 30.5 6 40.5C11 33.5 18 30.3 28 30.3V38.5L42 24.5Z" />
                  </SvgIcon>
                  <SvgIcon
                    sx={{ color: "text.main" }}
                    width="30"
                    height="30"
                    viewBox="0 0 48 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M32.38 4.5H15.62C8.34 4.5 4 8.84 4 16.12V32.86C4 40.16 8.34 44.5 15.62 44.5H32.36C39.64 44.5 43.98 40.16 43.98 32.88V16.12C44 8.84 39.66 4.5 32.38 4.5ZM31.52 32.02C31.4 33.72 31.26 35.84 27.42 35.84H20.58C16.76 35.84 16.6 33.72 16.48 32.02L15.86 24.1C15.8411 23.8463 15.8739 23.5914 15.9564 23.3508C16.0389 23.1101 16.1694 22.8887 16.34 22.7C16.5104 22.5151 16.7177 22.3679 16.9485 22.268C17.1793 22.1681 17.4285 22.1177 17.68 22.12H30.32C30.82 22.12 31.32 22.34 31.66 22.7C32 23.08 32.18 23.58 32.14 24.08L31.52 32.02ZM33.6 20.14H33.48C31.4 19.94 29.5 19.8 27.68 19.72C25.2355 19.5899 22.7863 19.5699 20.34 19.66C19.14 19.72 17.92 19.8 16.72 19.92L14.54 20.14H14.4C13.7 20.14 13.1 19.62 13.04 18.9C12.96 18.16 13.52 17.48 14.26 17.42L16.44 17.2C17.3 17.12 18.14 17.06 19 17.02L19.16 16.08C19.32 15.08 19.62 13.16 22.62 13.16H25.4C28.42 13.16 28.72 15.14 28.86 16.1L29.02 17.06C30.52 17.14 32.06 17.26 33.74 17.42C34.5 17.5 35.04 18.16 34.98 18.92C34.9 19.62 34.3 20.14 33.6 20.14Z" />
                  </SvgIcon>
                </div> */}
              </Box>{" "}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: " 20px",
                  color: "text.main",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <Avatar
                    sx={{
                      height: "40px",
                      width: "40px",
                      marginRight: "15px",
                    }}
                    src="../public/img/avata.jpg"
                    alt=""
                  />
                  <div style={{ width: "80%" }}>
                    <strong>Group Name</strong>
                    <p
                      style={{
                        padding: 0,
                        margin: 0,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <strong style={{ marginRight: "5px" }}>username</strong>
                      last message last message last message
                    </p>
                  </div>
                </div>
              </Box>{" "}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  margin: " 20px",
                  color: "text.main",
                }}
              >
                {" "}
                <Avatar
                  sx={{
                    height: "40px",
                    width: "40px",
                    marginRight: "15px",
                  }}
                  src="../public/img/avata.jpg"
                  alt=""
                />
                <div style={{ width: "80%" }}>
                  <strong>User Name</strong>
                  <p
                    style={{
                      padding: 0,
                      margin: 0,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    last mesage last mesage last mesage gdsiugfui gduygdg
                  </p>
                </div>
                {/* <div>
                  <SvgIcon
                    sx={{ marginRight: "15px", color: "text.main" }}
                    width="30"
                    height="30"
                    viewBox="0 0 48 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M42 24.5L28 10.5V18.5C14 20.5 8 30.5 6 40.5C11 33.5 18 30.3 28 30.3V38.5L42 24.5Z" />
                  </SvgIcon>
                  <SvgIcon
                    sx={{ color: "text.main" }}
                    width="30"
                    height="30"
                    viewBox="0 0 48 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M32.38 4.5H15.62C8.34 4.5 4 8.84 4 16.12V32.86C4 40.16 8.34 44.5 15.62 44.5H32.36C39.64 44.5 43.98 40.16 43.98 32.88V16.12C44 8.84 39.66 4.5 32.38 4.5ZM31.52 32.02C31.4 33.72 31.26 35.84 27.42 35.84H20.58C16.76 35.84 16.6 33.72 16.48 32.02L15.86 24.1C15.8411 23.8463 15.8739 23.5914 15.9564 23.3508C16.0389 23.1101 16.1694 22.8887 16.34 22.7C16.5104 22.5151 16.7177 22.3679 16.9485 22.268C17.1793 22.1681 17.4285 22.1177 17.68 22.12H30.32C30.82 22.12 31.32 22.34 31.66 22.7C32 23.08 32.18 23.58 32.14 24.08L31.52 32.02ZM33.6 20.14H33.48C31.4 19.94 29.5 19.8 27.68 19.72C25.2355 19.5899 22.7863 19.5699 20.34 19.66C19.14 19.72 17.92 19.8 16.72 19.92L14.54 20.14H14.4C13.7 20.14 13.1 19.62 13.04 18.9C12.96 18.16 13.52 17.48 14.26 17.42L16.44 17.2C17.3 17.12 18.14 17.06 19 17.02L19.16 16.08C19.32 15.08 19.62 13.16 22.62 13.16H25.4C28.42 13.16 28.72 15.14 28.86 16.1L29.02 17.06C30.52 17.14 32.06 17.26 33.74 17.42C34.5 17.5 35.04 18.16 34.98 18.92C34.9 19.62 34.3 20.14 33.6 20.14Z" />
                  </SvgIcon>
                </div> */}
              </Box>{" "}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: " 20px",
                  color: "text.main",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <Avatar
                    sx={{
                      height: "40px",
                      width: "40px",
                      marginRight: "15px",
                    }}
                    src="../public/img/avata.jpg"
                    alt=""
                  />
                  <div style={{ width: "80%" }}>
                    <strong>Group Name</strong>
                    <p
                      style={{
                        padding: 0,
                        margin: 0,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <strong style={{ marginRight: "5px" }}>username</strong>
                      last message last message last message
                    </p>
                  </div>
                </div>
              </Box>{" "}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: " 20px",
                  color: "text.main",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <Avatar
                    sx={{
                      height: "40px",
                      width: "40px",
                      marginRight: "15px",
                    }}
                    src="../public/img/avata.jpg"
                    alt=""
                  />
                  <div style={{ width: "80%" }}>
                    <strong>Group Name</strong>
                    <p
                      style={{
                        padding: 0,
                        margin: 0,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <strong style={{ marginRight: "5px" }}>username</strong>
                      last message last message last message
                    </p>
                  </div>
                </div>
              </Box>{" "}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  margin: " 20px",
                  color: "text.main",
                }}
              >
                {" "}
                <Avatar
                  sx={{
                    height: "40px",
                    width: "40px",
                    marginRight: "15px",
                  }}
                  src="../public/img/avata.jpg"
                  alt=""
                />
                <div style={{ width: "80%" }}>
                  <strong>User Name</strong>
                  <p
                    style={{
                      padding: 0,
                      margin: 0,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    last mesage last mesage last mesage gdsiugfui gduygdg
                  </p>
                </div>
                {/* <div>
                  <SvgIcon
                    sx={{ marginRight: "15px", color: "text.main" }}
                    width="30"
                    height="30"
                    viewBox="0 0 48 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M42 24.5L28 10.5V18.5C14 20.5 8 30.5 6 40.5C11 33.5 18 30.3 28 30.3V38.5L42 24.5Z" />
                  </SvgIcon>
                  <SvgIcon
                    sx={{ color: "text.main" }}
                    width="30"
                    height="30"
                    viewBox="0 0 48 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M32.38 4.5H15.62C8.34 4.5 4 8.84 4 16.12V32.86C4 40.16 8.34 44.5 15.62 44.5H32.36C39.64 44.5 43.98 40.16 43.98 32.88V16.12C44 8.84 39.66 4.5 32.38 4.5ZM31.52 32.02C31.4 33.72 31.26 35.84 27.42 35.84H20.58C16.76 35.84 16.6 33.72 16.48 32.02L15.86 24.1C15.8411 23.8463 15.8739 23.5914 15.9564 23.3508C16.0389 23.1101 16.1694 22.8887 16.34 22.7C16.5104 22.5151 16.7177 22.3679 16.9485 22.268C17.1793 22.1681 17.4285 22.1177 17.68 22.12H30.32C30.82 22.12 31.32 22.34 31.66 22.7C32 23.08 32.18 23.58 32.14 24.08L31.52 32.02ZM33.6 20.14H33.48C31.4 19.94 29.5 19.8 27.68 19.72C25.2355 19.5899 22.7863 19.5699 20.34 19.66C19.14 19.72 17.92 19.8 16.72 19.92L14.54 20.14H14.4C13.7 20.14 13.1 19.62 13.04 18.9C12.96 18.16 13.52 17.48 14.26 17.42L16.44 17.2C17.3 17.12 18.14 17.06 19 17.02L19.16 16.08C19.32 15.08 19.62 13.16 22.62 13.16H25.4C28.42 13.16 28.72 15.14 28.86 16.1L29.02 17.06C30.52 17.14 32.06 17.26 33.74 17.42C34.5 17.5 35.04 18.16 34.98 18.92C34.9 19.62 34.3 20.14 33.6 20.14Z" />
                  </SvgIcon>
                </div> */}
              </Box>{" "}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: " 20px",
                  color: "text.main",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <Avatar
                    sx={{
                      height: "40px",
                      width: "40px",
                      marginRight: "15px",
                    }}
                    src="../public/img/avata.jpg"
                    alt=""
                  />
                  <div style={{ width: "80%" }}>
                    <strong>Group Name</strong>
                    <p
                      style={{
                        padding: 0,
                        margin: 0,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <strong style={{ marginRight: "5px" }}>username</strong>
                      last message last message last message
                    </p>
                  </div>
                </div>
              </Box>{" "}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  margin: " 20px",
                  color: "text.main",
                }}
              >
                {" "}
                <Avatar
                  sx={{
                    height: "40px",
                    width: "40px",
                    marginRight: "15px",
                  }}
                  src="../public/img/avata.jpg"
                  alt=""
                />
                <div style={{ width: "80%" }}>
                  <strong>User Name</strong>
                  <p
                    style={{
                      padding: 0,
                      margin: 0,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    last mesage last mesage last mesage gdsiugfui gduygdg
                  </p>
                </div>
                {/* <div>
                  <SvgIcon
                    sx={{ marginRight: "15px", color: "text.main" }}
                    width="30"
                    height="30"
                    viewBox="0 0 48 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M42 24.5L28 10.5V18.5C14 20.5 8 30.5 6 40.5C11 33.5 18 30.3 28 30.3V38.5L42 24.5Z" />
                  </SvgIcon>
                  <SvgIcon
                    sx={{ color: "text.main" }}
                    width="30"
                    height="30"
                    viewBox="0 0 48 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M32.38 4.5H15.62C8.34 4.5 4 8.84 4 16.12V32.86C4 40.16 8.34 44.5 15.62 44.5H32.36C39.64 44.5 43.98 40.16 43.98 32.88V16.12C44 8.84 39.66 4.5 32.38 4.5ZM31.52 32.02C31.4 33.72 31.26 35.84 27.42 35.84H20.58C16.76 35.84 16.6 33.72 16.48 32.02L15.86 24.1C15.8411 23.8463 15.8739 23.5914 15.9564 23.3508C16.0389 23.1101 16.1694 22.8887 16.34 22.7C16.5104 22.5151 16.7177 22.3679 16.9485 22.268C17.1793 22.1681 17.4285 22.1177 17.68 22.12H30.32C30.82 22.12 31.32 22.34 31.66 22.7C32 23.08 32.18 23.58 32.14 24.08L31.52 32.02ZM33.6 20.14H33.48C31.4 19.94 29.5 19.8 27.68 19.72C25.2355 19.5899 22.7863 19.5699 20.34 19.66C19.14 19.72 17.92 19.8 16.72 19.92L14.54 20.14H14.4C13.7 20.14 13.1 19.62 13.04 18.9C12.96 18.16 13.52 17.48 14.26 17.42L16.44 17.2C17.3 17.12 18.14 17.06 19 17.02L19.16 16.08C19.32 15.08 19.62 13.16 22.62 13.16H25.4C28.42 13.16 28.72 15.14 28.86 16.1L29.02 17.06C30.52 17.14 32.06 17.26 33.74 17.42C34.5 17.5 35.04 18.16 34.98 18.92C34.9 19.62 34.3 20.14 33.6 20.14Z" />
                  </SvgIcon>
                </div> */}
              </Box>{" "}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: " 20px",
                  color: "text.main",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <Avatar
                    sx={{
                      height: "40px",
                      width: "40px",
                      marginRight: "15px",
                    }}
                    src="../public/img/avata.jpg"
                    alt=""
                  />
                  <div style={{ width: "80%" }}>
                    <strong>Group Name</strong>
                    <p
                      style={{
                        padding: 0,
                        margin: 0,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <strong style={{ marginRight: "5px" }}>username</strong>
                      last message last message last message
                    </p>
                  </div>
                </div>
              </Box>{" "}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: " 20px",
                  color: "text.main",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <Avatar
                    sx={{
                      height: "40px",
                      width: "40px",
                      marginRight: "15px",
                    }}
                    src="../public/img/avata.jpg"
                    alt=""
                  />
                  <div style={{ width: "80%" }}>
                    <strong>Group Name</strong>
                    <p
                      style={{
                        padding: 0,
                        margin: 0,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <strong style={{ marginRight: "5px" }}>username</strong>
                      last message last message last message
                    </p>
                  </div>
                </div>
              </Box>{" "}
            </div>
          </div>
        </Box>
        <div style={{ borderLeft: "1px solid black" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: " 20px",
              color: "text.main",
              backgroundColor: "bg.main",
            }}
          >
            <div style={{ display: "flex" }}>
              <Avatar
                src="../public/img/avata.jpg"
                sx={{ width: "15px", height: "15px" }}
              />
              <Avatar
                src="../public/img/avata.jpg"
                sx={{
                  width: "15px",
                  height: "15px",
                  position: "relative",
                  left: "-5%",
                }}
              />
              <Avatar
                src="../public/img/avata.jpg"
                sx={{
                  width: "15px",
                  height: "15px",
                  position: "relative",
                  left: "-10%",
                }}
              />
              <Avatar
                src="../public/img/avata.jpg"
                sx={{
                  width: "15px",
                  height: "15px",
                  position: "relative",
                  left: "-15%",
                }}
              />
              <Avatar
                src="../public/img/avata.jpg"
                sx={{
                  width: "15px",
                  height: "15px",
                  position: "relative",
                  left: "-20%",
                }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar
                style={{
                  height: "40px",
                  width: "40px",
                  marginRight: "15px",
                }}
                src="../public/img/avata.jpg"
                alt=""
              />
              <div>
                <h3 style={{ margin: 0 }}>Groups name</h3>
                <p style={{ margin: 0 }}>last seen 45 minutes ago</p>
              </div>
            </div>
            <MoreHorizIcon />
          </Box>
          <Box
            sx={{
              backgroundColor: "bgitem.main",
              height: "515px",
              overflow: "scroll",
              scrollbarWidth: "none",
            }}
          >
            <div
              style={{
                padding: "10px ",
                display: "flex",
                alignItems: "center",
              }}
            >
              {" "}
              <Avatar
                sx={{
                  height: "30px",
                  width: "30px",
                  marginRight: "5px",
                }}
                src="../public/img/avata.jpg"
                alt=""
              />
              <Box
                className="content-messenger-left"
                sx={{
                  height: "fit-content",
                  width: "fit-content",
                  backgroundColor: "bgmessenger.main",
                  textAlign: "left",
                  padding: "0px 15px 0",
                  borderRadius: "10px",
                  margin: 0,
                }}
              >
                <p>nội dung tin nhắn</p>
              </Box>
            </div>{" "}
            <div
              style={{
                padding: "10px ",
                display: "flex",
                alignItems: "center",
                flexDirection: "row-reverse",
              }}
            >
              {" "}
              <Avatar
                sx={{
                  height: "30px",
                  width: "30px",
                  margin: "5px",
                }}
                src="../public/img/avata.jpg"
                alt=""
              />
              <Box
                className="content-messenger-left"
                sx={{
                  height: "fit-content",
                  width: "fit-content",
                  backgroundColor: "mymes.main",
                  color: "#fff",
                  textAlign: "right",
                  padding: "0px 15px 0",
                  borderRadius: "10px",
                  margin: 0,
                }}
              >
                <p>nội dung tin nhắn</p>
              </Box>
            </div>
            <div
              style={{
                padding: "10px ",
                display: "flex",
                alignItems: "center",
              }}
            >
              {" "}
              <Avatar
                sx={{
                  height: "30px",
                  width: "30px",
                  marginRight: "5px",
                }}
                src="../public/img/avata.jpg"
                alt=""
              />
              <Box
                className="content-messenger-left"
                sx={{
                  height: "fit-content",
                  width: "fit-content",
                  backgroundColor: "bgmessenger.main",
                  textAlign: "left",
                  padding: "0px 15px 0",
                  borderRadius: "10px",
                  margin: 0,
                }}
              >
                <p>nội dung tin nhắn</p>
              </Box>
            </div>{" "}
            <div
              style={{
                padding: "10px ",
                display: "flex",
                alignItems: "center",
              }}
            >
              {" "}
              <Avatar
                sx={{
                  height: "30px",
                  width: "30px",
                  marginRight: "5px",
                }}
                src="../public/img/avata.jpg"
                alt=""
              />
              <Box
                className="content-messenger-left"
                sx={{
                  height: "fit-content",
                  width: "fit-content",
                  backgroundColor: "bgmessenger.main",
                  textAlign: "left",
                  padding: "0px 15px 0",
                  borderRadius: "10px",
                  margin: 0,
                }}
              >
                <p>nội dung tin nhắn</p>
              </Box>
            </div>{" "}
            <div
              style={{
                padding: "10px ",
                display: "flex",
                alignItems: "center",
                flexDirection: "row-reverse",
              }}
            >
              {" "}
              <Avatar
                sx={{
                  height: "30px",
                  width: "30px",
                  margin: "5px",
                }}
                src="../public/img/avata.jpg"
                alt=""
              />
              <Box
                className="content-messenger-left"
                sx={{
                  height: "fit-content",
                  width: "fit-content",
                  backgroundColor: "mymes.main",
                  color: "#fff",
                  textAlign: "right",
                  padding: "0px 15px 0",
                  borderRadius: "10px",
                  margin: 0,
                }}
              >
                <p>nội dung tin nhắn</p>
              </Box>
            </div>
            <div
              style={{
                padding: "10px ",
                display: "flex",
                alignItems: "center",
              }}
            >
              {" "}
              <Avatar
                sx={{
                  height: "30px",
                  width: "30px",
                  marginRight: "5px",
                }}
                src="../public/img/avata.jpg"
                alt=""
              />
              <Box
                className="content-messenger-left"
                sx={{
                  height: "fit-content",
                  width: "fit-content",
                  backgroundColor: "bgmessenger.main",
                  textAlign: "left",
                  padding: "0px 15px 0",
                  borderRadius: "10px",
                  margin: 0,
                }}
              >
                <p>nội dung tin nhắn</p>
              </Box>
            </div>
            <div
              style={{
                padding: "10px ",
                display: "flex",
                alignItems: "center",
                flexDirection: "row-reverse",
              }}
            >
              {" "}
              <Avatar
                sx={{
                  height: "30px",
                  width: "30px",
                  margin: "5px",
                }}
                src="../public/img/avata.jpg"
                alt=""
              />
              <Box
                className="content-messenger-left"
                sx={{
                  height: "fit-content",
                  width: "fit-content",
                  backgroundColor: "mymes.main",
                  color: "#fff",
                  textAlign: "right",
                  padding: "0px 15px 0",
                  borderRadius: "10px",
                  margin: 0,
                }}
              >
                <p>nội dung tin nhắn</p>
              </Box>
            </div>
            <div
              style={{
                padding: "10px ",
                display: "flex",
                alignItems: "center",
              }}
            >
              {" "}
              <Avatar
                sx={{
                  height: "30px",
                  width: "30px",
                  marginRight: "5px",
                }}
                src="../public/img/avata.jpg"
                alt=""
              />
              <Box
                className="content-messenger-left"
                sx={{
                  height: "fit-content",
                  width: "fit-content",
                  backgroundColor: "bgmessenger.main",
                  textAlign: "left",
                  padding: "0px 15px 0",
                  borderRadius: "10px",
                  margin: 0,
                }}
              >
                <p>nội dung tin nhắn</p>
              </Box>
            </div>
            <div
              style={{
                padding: "10px ",
                display: "flex",
                alignItems: "center",
                flexDirection: "row-reverse",
              }}
            >
              {" "}
              <Avatar
                sx={{
                  height: "30px",
                  width: "30px",
                  margin: "5px",
                }}
                src="../public/img/avata.jpg"
                alt=""
              />
              <Box
                className="content-messenger-left"
                sx={{
                  height: "fit-content",
                  width: "fit-content",
                  backgroundColor: "mymes.main",
                  color: "#fff",
                  textAlign: "right",
                  padding: "0px 15px 0",
                  borderRadius: "10px",
                  margin: 0,
                }}
              >
                <p>nội dung tin nhắn</p>
              </Box>
            </div>{" "}
            <div
              style={{
                padding: "10px ",
                display: "flex",
                alignItems: "center",
              }}
            >
              {" "}
              <Avatar
                sx={{
                  height: "30px",
                  width: "30px",
                  marginRight: "5px",
                }}
                src="../public/img/avata.jpg"
                alt=""
              />
              <Box
                className="content-messenger-left"
                sx={{
                  height: "fit-content",
                  width: "fit-content",
                  backgroundColor: "bgmessenger.main",
                  textAlign: "left",
                  padding: "0px 15px 0",
                  borderRadius: "10px",
                  margin: 0,
                }}
              >
                <p>nội dung tin nhắn</p>
              </Box>
            </div>
            <div
              style={{
                padding: "10px ",
                display: "flex",
                alignItems: "center",
                flexDirection: "row-reverse",
              }}
            >
              {" "}
              <Avatar
                sx={{
                  height: "30px",
                  width: "30px",
                  margin: "5px",
                }}
                src="../public/img/avata.jpg"
                alt=""
              />
              <Box
                className="content-messenger-left"
                sx={{
                  height: "fit-content",
                  width: "fit-content",
                  backgroundColor: "mymes.main",
                  color: "#fff",
                  textAlign: "right",
                  padding: "0px 15px 0",
                  borderRadius: "10px",
                  margin: 0,
                }}
              >
                <p>nội dung tin nhắn</p>
              </Box>
            </div>
          </Box>
          <Box sx={{ backgroundColor: "bgitem.main" }}>
            {" "}
            <Box
              component="form"
              sx={{
                backgroundColor: "item.main",
                display: "flex",
                alignItems: "center",
                border: "1px solid #888",
                borderRadius: "20px",
              }}
            >
              <IconButton sx={{ p: "10px" }}>
                <AttachFileIcon sx={{ cursor: "pointer" }} />
              </IconButton>
              <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Type here..." />
              <IconButton type="button" sx={{ p: "10px" }}>
                <EmojiEmotionsIcon sx={{ cursor: "pointer" }} />
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton sx={{ p: "10px" }}>
                <Box
                  sx={{
                    width: "30px",
                    height: "30px",
                    fontSize: "5px",
                    color: "text.main",
                    backgroundColor: "text.main",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {" "}
                  <SubdirectoryArrowRightSharpIcon
                    sx={{
                      fontSize: "25px",
                      width: "30px",
                      marginLeft: "3px",
                      color: "bgitem.main",
                    }}
                  />
                </Box>
              </IconButton>
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
}
export default GroupPage;
