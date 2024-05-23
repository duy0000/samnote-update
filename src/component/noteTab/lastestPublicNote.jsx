import Box from "@mui/material/Box";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Avatar from "@mui/material/Avatar";
import SvgIcon from "@mui/material/SvgIcon";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import Link from "@mui/material/Link";

export default function LastestPublicNoteTab() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        backgroundColor: "bgitem.main",
        padding: "20px 10px",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 10px 0 30px",
        }}
      >
        <Box
          component="h3"
          sx={{ color: "text.main", textTransform: "uppercase" }}
        >
          Lastest Public Note
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
        <TabPanel
          value="1"
          sx={{ width: "100%", padding: 0, marginTop: "10px" }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: "10px",
              padding: "15px",
              margin: "0 0px 0 0 ",
            }}
          >
            <div style={{ border: "3px solid #888", padding: "15px" }}>
              {" "}
              <div style={{ padding: "0 45px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      paddingBottom: "10px",
                    }}
                  >
                    <Avatar
                      sx={{
                        height: "40px",
                        width: "40px",
                        marginRight: "10px",
                      }}
                      src="../public/img/avata.jpg"
                      alt=""
                    />
                    <Box sx={{ color: "text.main" }}>
                      <p style={{ margin: 0 }}>
                        <strong>Minh Vu</strong>
                      </p>
                      <p style={{ margin: 0 }}>Join at 26st, Jul 2023</p>
                    </Box>
                  </div>
                  <div>
                    <SvgIcon
                      sx={{ marginLeft: "10px", color: "text.main" }}
                      width="30"
                      height="30"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M35 20L23.3333 8.33334V15C11.6667 16.6667 6.66667 25 5 33.3333C9.16667 27.5 15 24.8333 23.3333 24.8333V31.6667L35 20Z" />
                    </SvgIcon>
                  </div>
                </div>
                <Box sx={{ marginBottom: "50px", color: "text.main" }}>
                  <strong>No name note</strong>
                  <p style={{ margin: 0 }}>
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </Box>
              </div>
              <Box
                component="div"
                sx={{
                  fontWeight: "600",
                  textAlign: "start",
                  fontSize: "12px",
                  color: "text.main",
                }}
              >
                <p style={{ margin: 0 }}>Create at 27/2/2023</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "10px",
                      justifyContent: "flex-end",
                    }}
                  >
                    {" "}
                    <ThumbUpOffAltIcon
                      sx={{
                        fontSize: "20px",
                        cursor: "pointer",
                        marginRight: "5px",
                      }}
                    />
                    1
                  </p>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "10px",
                      justifyContent: "flex-end",
                    }}
                  >
                    {" "}
                    <ThumbDownOffAltIcon
                      sx={{
                        fontSize: "20px",
                        cursor: "pointer",
                        marginRight: "5px",
                      }}
                    />{" "}
                    1
                  </p>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Link
                      href="/cmt-publicnote"
                      sx={{ textDecoration: "none" }}
                    >
                      {" "}
                      <ChatBubbleOutlineIcon
                        sx={{
                          fontSize: "20px",
                          cursor: "pointer",
                          marginRight: "5px",
                          color: "text.main",
                        }}
                      />
                    </Link>
                    1
                  </p>
                </div>
              </Box>
            </div>{" "}
            <div
              style={{
                border: "3px solid #888",
                padding: "15px",
                marginTop: "10px",
              }}
            >
              {" "}
              <div style={{ padding: "0 45px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      paddingBottom: "10px",
                    }}
                  >
                    <Avatar
                      sx={{
                        height: "40px",
                        width: "40px",
                        marginRight: "10px",
                      }}
                      src="../public/img/avata.jpg"
                      alt=""
                    />
                    <Box sx={{ color: "text.main" }}>
                      <p style={{ margin: 0 }}>
                        <strong>Minh Vu</strong>
                      </p>
                      <p style={{ margin: 0 }}>Join at 26st, Jul 2023</p>
                    </Box>
                  </div>
                  <div>
                    <SvgIcon
                      sx={{ marginLeft: "10px", color: "text.main" }}
                      width="30"
                      height="30"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M35 20L23.3333 8.33334V15C11.6667 16.6667 6.66667 25 5 33.3333C9.16667 27.5 15 24.8333 23.3333 24.8333V31.6667L35 20Z" />
                    </SvgIcon>
                  </div>
                </div>
                <Box sx={{ marginBottom: "50px", color: "text.main" }}>
                  <strong>No name note</strong>
                  <p style={{ margin: 0 }}>
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </Box>
              </div>
              <Box
                component="div"
                sx={{
                  fontWeight: "600",
                  textAlign: "start",
                  fontSize: "12px",
                  color: "text.main",
                }}
              >
                <p style={{ margin: 0 }}>Create at 27/2/2023</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "10px",
                      justifyContent: "flex-end",
                    }}
                  >
                    {" "}
                    <ThumbUpOffAltIcon
                      sx={{
                        fontSize: "20px",
                        cursor: "pointer",
                        marginRight: "5px",
                      }}
                    />
                    1
                  </p>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "10px",
                      justifyContent: "flex-end",
                    }}
                  >
                    {" "}
                    <ThumbDownOffAltIcon
                      sx={{
                        fontSize: "20px",
                        cursor: "pointer",
                        marginRight: "5px",
                      }}
                    />{" "}
                    1
                  </p>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Link
                      href="/cmt-publicnote"
                      sx={{ textDecoration: "none" }}
                    >
                      {" "}
                      <ChatBubbleOutlineIcon
                        sx={{
                          fontSize: "20px",
                          cursor: "pointer",
                          marginRight: "5px",
                          color: "text.main",
                        }}
                      />
                    </Link>
                    1
                  </p>
                </div>
              </Box>
            </div>{" "}
            <div
              style={{
                border: "3px solid #888",
                padding: "15px",
                marginTop: "10px",
              }}
            >
              {" "}
              <div style={{ padding: "0 45px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      paddingBottom: "10px",
                    }}
                  >
                    <Avatar
                      sx={{
                        height: "40px",
                        width: "40px",
                        marginRight: "10px",
                      }}
                      src="../public/img/avata.jpg"
                      alt=""
                    />
                    <Box sx={{ color: "text.main" }}>
                      <p style={{ margin: 0 }}>
                        <strong>Minh Vu</strong>
                      </p>
                      <p style={{ margin: 0 }}>Join at 26st, Jul 2023</p>
                    </Box>
                  </div>
                  <div>
                    <SvgIcon
                      sx={{ marginLeft: "10px", color: "text.main" }}
                      width="30"
                      height="30"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M35 20L23.3333 8.33334V15C11.6667 16.6667 6.66667 25 5 33.3333C9.16667 27.5 15 24.8333 23.3333 24.8333V31.6667L35 20Z" />
                    </SvgIcon>
                  </div>
                </div>
                <Box sx={{ marginBottom: "50px", color: "text.main" }}>
                  <strong>No name note</strong>
                  <p style={{ margin: 0 }}>
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </Box>
              </div>
              <Box
                component="div"
                sx={{
                  fontWeight: "600",
                  textAlign: "start",
                  fontSize: "12px",
                  color: "text.main",
                }}
              >
                <p style={{ margin: 0 }}>Create at 27/2/2023</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "10px",
                      justifyContent: "flex-end",
                    }}
                  >
                    {" "}
                    <ThumbUpOffAltIcon
                      sx={{
                        fontSize: "20px",
                        cursor: "pointer",
                        marginRight: "5px",
                      }}
                    />
                    1
                  </p>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "10px",
                      justifyContent: "flex-end",
                    }}
                  >
                    {" "}
                    <ThumbDownOffAltIcon
                      sx={{
                        fontSize: "20px",
                        cursor: "pointer",
                        marginRight: "5px",
                      }}
                    />{" "}
                    1
                  </p>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Link
                      href="/cmt-publicnote"
                      sx={{ textDecoration: "none" }}
                    >
                      {" "}
                      <ChatBubbleOutlineIcon
                        sx={{
                          fontSize: "20px",
                          cursor: "pointer",
                          marginRight: "5px",
                          color: "text.main",
                        }}
                      />
                    </Link>
                    1
                  </p>
                </div>
              </Box>
            </div>{" "}
          </div>
        </TabPanel>
        <TabPanel value="2" style={{ padding: 0 }}></TabPanel>
      </TabContext>
    </Box>
  );
}
