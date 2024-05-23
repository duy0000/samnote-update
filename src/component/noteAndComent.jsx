import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import SvgIcon from "@mui/material/SvgIcon";
import Link from "@mui/material/Link";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

function contentComent() {
  return (
    <>
      <Box
        sx={{
          border: "3px solid #888",
          padding: "15px",
          color: "text.main",
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
                style={{
                  height: "40px",
                  width: "40px",
                  marginRight: "10px",
                }}
                src="../public/img/avata.jpg"
                alt=""
              />
              <div>
                <p style={{ margin: 0 }}>
                  <strong>Minh Vu</strong>
                </p>
              </div>
            </div>
          </div>
          <div style={{ marginBottom: "50px" }}>
            <p style={{ margin: 0 }}>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>{" "}
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
                style={{
                  height: "40px",
                  width: "40px",
                  marginRight: "10px",
                }}
                src="../public/img/avata.jpg"
                alt=""
              />
              <div>
                <p style={{ margin: 0 }}>
                  <strong>Minh Vu</strong>
                </p>
              </div>
            </div>
          </div>
          <div style={{ marginBottom: "50px" }}>
            <p style={{ margin: 0 }}>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>{" "}
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
                style={{
                  height: "40px",
                  width: "40px",
                  marginRight: "10px",
                }}
                src="../public/img/avata.jpg"
                alt=""
              />
              <div>
                <p style={{ margin: 0 }}>
                  <strong>Minh Vu</strong>
                </p>
              </div>
            </div>
          </div>
          <div style={{ marginBottom: "50px" }}>
            <p style={{ margin: 0 }}>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            cursor: "pointer",
            padding: "10px 0",
            border: "1px solid #888",
          }}
        >
          <span>See more</span>
        </div>
      </Box>
    </>
  );
}
function NoteAndComent() {
  return (
    <>
      <Box
        style={{
          position: "relative",
          borderRadius: "10px",

          backgroundColor: "bgitem.main",
          color: "text.main",
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
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBottom: "10px",
                  color: "text.main",
                }}
              >
                <Avatar
                  style={{
                    height: "40px",
                    width: "40px",
                    marginRight: "10px",
                  }}
                  src="../public/img/avata.jpg"
                  alt=""
                />
                <div>
                  <p style={{ margin: 0 }}>
                    <strong>Minh Vu 12346</strong>
                  </p>

                  <p style={{ margin: 0 }}>Join at 26st, Jul 2023</p>
                </div>
              </Box>
              <div>
                <SvgIcon
                  sx={{ color: "text.main", marginLeft: "10px" }}
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
            <Box sx={{ color: "text.main", marginBottom: "50px" }}>
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
              color: "text.main",
              fontWeight: "600",
              textAlign: "start",
              fontSize: "12px",
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
                <Link href="/cmt-publicnote" sx={{ textDecoration: "none" }}>
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
        </div>
        <div style={{ marginTop: "20px" }}>{contentComent()}</div>
      </Box>
    </>
  );
}
export default NoteAndComent;
