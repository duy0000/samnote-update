import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import SettingsIcon from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import Switch from "@mui/material/Switch";

import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";

import { useColorScheme } from "@mui/material/styles";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "light" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "light" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "light" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));
function Navbar() {
  return (
    <>
      <div
        className="container"
        style={{
          background: "#1d1d1d",
          height: "fit-content",
          paddingBottom: "50px",
        }}
      >
        <div className="row">
          <div
            className="col-12"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              padding: "20px 0",
            }}
          >
            <Link href="/user-profile">
              <Avatar
                sx={{ width: "50px", height: "50px" }}
                src="../public/img/avata.jpg"
                alt="anh dai dien"
              />
            </Link>
            <div style={{ width: "fit-content" }}>
              <Link
                href="/user-profile"
                sx={{ margin: 0, color: "#fff", textDecoration: "none" }}
              >
                <strong>Minh Vu</strong>
              </Link>
              <p style={{ margin: 0, color: "#fff", whiteSpace: "nowrap" }}>
                Join at <span>26st, jul 2023</span>
              </p>
            </div>
            <SettingsIcon sx={{ color: "#fff" }} />
          </div>
          <div className="col-12">
            <Box
              component="form"
              sx={{
                backgroundColor: "#DADADA",
                display: "flex",
                alignItems: "center",
                height: "40px",
                borderRadius: "30px",
                margin: "0 10px 10px 10px",
              }}
            >
              {" "}
              <SearchIcon sx={{ marginLeft: "15px" }} />
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Messenger"
                inputProps={{ "aria-label": "search google maps" }}
              />
            </Box>
          </div>
          <div className="col-12">
            <Link
              href="/take-note"
              sx={{
                display: "flex",
                marginTop: "10px",
                background: "#5BE260",
                textDecoration: "none",
                alignItems: "center",
                height: "40px",
                color: "#fff",
                margin: "0 10px",
                fontSize: "20px",
                borderRadius: "30px",
              }}
            >
              <svg
                style={{ margin: "0 10px 0 15px" }}
                width="30"
                height="44"
                viewBox="0 0 45 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.7083 6.41667V3.66667C14.7083 2.91501 14.085 2.29167 13.3333 2.29167C12.5816 2.29167 11.9583 2.91501 11.9583 3.66667V6.52667C12.4166 6.47167 12.8383 6.41667 13.3333 6.41667H14.7083ZM29.375 6.52667V3.66667C29.375 2.91501 28.7516 2.29167 28 2.29167C27.2483 2.29167 26.625 2.91501 26.625 3.66667V6.41667H28C28.495 6.41667 28.9166 6.47167 29.375 6.52667ZM39.5316 27.445C38.0692 26.2873 36.2571 25.6605 34.3919 25.6672C32.5267 25.6738 30.7191 26.3136 29.265 27.4817C27.3583 28.985 26.1666 31.3317 26.1666 33.9167C26.1666 35.4567 26.6066 36.9417 27.3583 38.1517C27.945 39.105 28.6966 39.9483 29.595 40.59C30.9516 41.58 32.6016 42.1667 34.4166 42.1667C36.5066 42.1667 38.395 41.3967 39.8433 40.1133C40.485 39.5817 41.035 38.9217 41.475 38.17C42.5144 36.4528 42.8906 34.4149 42.5327 32.4398C42.1748 30.4647 41.1075 28.6883 39.5316 27.445ZM34.4166 37.84C34.4166 35.6767 32.6566 33.9167 30.4933 33.9167C32.6566 33.9167 34.4166 32.1567 34.4166 29.9933C34.4166 32.1567 36.1766 33.9167 38.34 33.9167C36.1766 33.9167 34.4166 35.6767 34.4166 37.84Z"
                  fill="#274AC7"
                />
                <path
                  d="M29.375 6.52667V9.16667C29.375 9.91834 28.7517 10.5417 28 10.5417C27.2484 10.5417 26.625 9.91834 26.625 9.16667V6.41667H14.7084V9.16667C14.7084 9.91834 14.085 10.5417 13.3334 10.5417C12.5817 10.5417 11.9584 9.91834 11.9584 9.16667V6.52667C6.55002 7.02167 4.16669 10.505 4.16669 15.5833V31.1667C4.16669 36.6667 6.91669 40.3333 13.3334 40.3333H20.905C22.2984 40.3333 23.2334 38.775 22.885 37.4183C22.6284 36.4283 22.5 35.4017 22.5 34.375C22.5 30.5617 24.205 27.0417 27.1567 24.7133C29.3443 22.9543 32.0679 21.9968 34.875 22h54.9484C36.1034 22 37.1667 21.1567 37.1667 20.0017V15.5833C37.1667 10.505 34.7834 7.02167 29.375 6.52667ZM17 30.7083H13.3334C12.5817 30.7083 11.9584 30.085 11.9584 29.3333C11.9584 28.5817 12.5817 27.9583 13.3334 27.9583H17C17.7517 27.9583 18.375 28.5817 18.375 29.3333C18.375 30.085 17.7517 30.7083 17 30.7083ZM22.5 21.5417H13.3334C12.5817 21.5417 11.9584 20.9183 11.9584 20.1667C11.9584 19.415 12.5817 18.7917 13.3334 18.7917H22.5C23.2517 18.7917 23.875 19.415 23.875 20.1667C23.875 20.9183 23.2517 21.5417 22.5 21.5417Z"
                  fill="#274AC7"
                />
              </svg>

              <strong>New</strong>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ul style={{ padding: "0", color: "white", margin: "30px 0 " }}>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 10px",
                }}
              >
                <Link
                  href="/"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "#fff",
                  }}
                >
                  {" "}
                  <svg
                    style={{ marginRight: "10px" }}
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.83 8.51L14.28 3.27C13 2.25 11 2.24 9.73002 3.26L3.18002 8.51C2.24002 9.26 1.67002 10.76 1.87002 11.94L3.13002 19.48C3.42002 21.17 4.99002 22.5 6.70002 22.5H17.3C18.99 22.5 20.59 21.14 20.88 19.47L22.14 11.93C22.32 10.76 21.75 9.26 20.83 8.51ZM12.75 18.5C12.75 18.91 12.41 19.25 12 19.25C11.59 19.25 11.25 18.91 11.25 18.5V15.5C11.25 15.09 11.59 14.75 12 14.75C12.41 14.75 12.75 15.09 12.75 15.5V18.5Z"
                      fill="white"
                    />
                  </svg>
                  Homepage
                </Link>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 10px",
                }}
              >
                <Link
                  href="Photos"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "#fff",
                  }}
                >
                  {" "}
                  <svg
                    style={{ marginRight: "10px" }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.51 11.22L8.31 2.39C8.28374 2.27766 8.21981 2.17769 8.12884 2.10674C8.03787 2.03578 7.92535 1.99811 7.81 2C4.6 2 2 4.6 2 7.81V13.51C2 13.85 2.33 14.1 2.66 14L10.16 11.83C10.2869 11.7949 10.3948 11.7111 10.4604 11.5969C10.5259 11.4827 10.5437 11.3473 10.51 11.22ZM11.12 13.679C11.1032 13.6121 11.0732 13.5493 11.0316 13.4943C10.9901 13.4393 10.938 13.3931 10.8783 13.3586C10.8186 13.3241 10.7526 13.3019 10.6842 13.2934C10.6158 13.2849 10.5463 13.2902 10.48 13.309L2.37 15.669C2.15 15.739 2 15.939 2 16.169V16.189C2 19.399 4.6 21.999 7.81 21.999H12.53C12.86 21.999 13.11 21.689 13.03 21.359L11.12 13.679ZM16.19 2H10.44C10.11 2 9.86 2.31 9.94 2.64L14.68 21.61C14.74 21.84 14.94 22 15.18 22H16.18C19.4 22 22 19.4 22 16.19V7.81C22 4.6 19.4 2 16.19 2Z"
                      fill="white"
                    />
                  </svg>
                  Photos
                </Link>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 10px",
                }}
              >
                <Link
                  href="Note"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "#fff",
                  }}
                >
                  {" "}
                  <svg
                    style={{ marginRight: "10px" }}
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.28998 6.79C7.86998 6.79 7.53998 6.45 7.53998 6.04V3.25C7.53998 3.05109 7.619 2.86032 7.75965 2.71967C7.9003 2.57902 8.09107 2.5 8.28998 2.5C8.48889 2.5 8.67966 2.57902 8.82031 2.71967C8.96096 2.86032 9.03998 3.05109 9.03998 3.25V6.03C9.03998 6.45 8.70998 6.79 8.28998 6.79ZM15.71 6.79C15.29 6.79 14.96 6.45 14.96 6.04V3.25C14.96 3.05109 15.039 2.86032 15.1796 2.71967C15.3203 2.57902 15.5111 2.5 15.71 2.5C15.9089 2.5 16.0997 2.57902 16.2403 2.71967C16.381 2.86032 16.46 3.05109 16.46 3.25V6.03C16.46 6.45 16.13 6.79 15.71 6.79Z"
                      fill="white"
                    />
                    <path
                      d="M19.57 5C18.91 4.51 17.96 4.98 17.96 5.81V5.91C17.96 7.08 17.12 8.16 15.95 8.28C14.6 8.42 13.46 7.36 13.46 6.04V5C13.46 4.45 13.01 4 12.46 4H11.54C10.99 4 10.54 4.45 10.54 5V6.04C10.54 6.83 10.13 7.53 9.51 7.92C9.42 7.98 9.32 8.03 9.22 8.08C9.13 8.13 9.03 8.17 8.92 8.2C8.8 8.24 8.67 8.27 8.53 8.28C8.37 8.3 8.21 8.3 8.05 8.28C7.91 8.27 7.78 8.24 7.66 8.2C7.45271 8.13094 7.25458 8.03691 7.07 7.92C6.44 7.48 6.04 6.72 6.04 5.91V5.81C6.04 5.04 5.22 4.58 4.57 4.91C4.56 4.92 4.55 4.92 4.54 4.93C4.5 4.95 4.47 4.97 4.43 5C4.4 5.03 4.36 5.05 4.33 5.08C4.05 5.3 3.8 5.55 3.59 5.82C3.48 5.94 3.39 6.07 3.31 6.2C3.20842 6.34624 3.11816 6.50002 3.04 6.66C3.02 6.68 3.01 6.69 3.01 6.71C2.95 6.83 2.89 6.95 2.85 7.08C2.82 7.13 2.81 7.17 2.79 7.22C2.73 7.37 2.69 7.52 2.65 7.67C2.61 7.81 2.58 7.96 2.56 8.11C2.52364 8.36178 2.5036 8.61564 2.5 8.87V17.63C2.5 18.9216 3.01309 20.1603 3.92639 21.0736C4.83969 21.9869 6.0784 22.5 7.37 22.5H16.63C17.2695 22.5 17.9028 22.374 18.4937 22.1293C19.0845 21.8846 19.6214 21.5258 20.0736 21.0736C20.5258 20.6214 20.8846 20.0845 21.1293 19.4937C21.374 18.9028 21.5 18.2695 21.5 17.63V8.87C21.5 7.28 20.74 5.89 19.57 5ZM12 17.92H7.36C7.15976 17.92 6.96772 17.8405 6.82613 17.6989C6.68454 17.5573 6.605 17.3652 6.605 17.165C6.605 16.9648 6.68454 16.7727 6.82613 16.6311C6.96772 16.4895 7.15976 16.41 7.36 16.41H12C12.42 16.41 12.75 16.75 12.75 17.17C12.75 17.58 12.42 17.92 12 17.92ZM14.78 14.21H7.36C7.15976 14.21 6.96772 14.1305 6.82613 13.9889C6.68454 13.8473 6.605 13.6552 6.605 13.455C6.605 13.2548 6.68454 13.0627 6.82613 12.9211C6.96772 12.7795 7.15976 12.7 7.36 12.7H14.78C15.2 12.7 15.54 13.04 15.54 13.46C15.54 13.87 15.2 14.21 14.78 14.21Z"
                      fill="white"
                    />
                  </svg>
                  Note
                </Link>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 10px",
                }}
              >
                <Link
                  href="Group"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "#fff",
                  }}
                >
                  {" "}
                  <svg
                    style={{ marginRight: "10px" }}
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.00002 2.5C6.38002 2.5 4.25002 4.63 4.25002 7.25C4.25002 9.82 6.26002 11.9 8.88002 11.99C8.96002 11.98 9.04002 11.98 9.10002 11.99H9.17002C10.3994 11.949 11.5646 11.4315 12.4193 10.5469C13.274 9.66234 13.7512 8.48004 13.75 7.25C13.75 4.63 11.62 2.5 9.00002 2.5ZM14.08 14.649C11.29 12.789 6.74002 12.789 3.93002 14.649C2.66002 15.499 1.96002 16.649 1.96002 17.879C1.96002 19.109 2.66002 20.249 3.92002 21.089C5.32002 22.029 7.16002 22.499 9.00002 22.499C10.84 22.499 12.68 22.029 14.08 21.089C15.34 20.239 16.04 19.099 16.04 17.859C16.03 16.629 15.34 15.489 14.08 14.649ZM19.99 7.838C20.15 9.778 18.77 11.478 16.86 11.708H16.81C16.75 11.708 16.69 11.708 16.64 11.728C15.67 11.778 14.78 11.468 14.11 10.898C15.14 9.978 15.73 8.598 15.61 7.098C15.5414 6.318 15.2765 5.56806 14.84 4.918C15.364 4.66308 15.9421 4.53947 16.5246 4.55782C17.107 4.57617 17.6762 4.73595 18.1831 5.02335C18.69 5.31076 19.1194 5.71717 19.4342 6.20753C19.749 6.69789 19.9397 7.25747 19.99 7.838Z"
                      fill="white"
                    />
                    <path
                      d="M21.988 17.09C21.908 18.06 21.288 18.9 20.248 19.47C19.248 20.02 17.988 20.28 16.738 20.25C17.458 19.6 17.878 18.79 17.958 17.93C18.058 16.69 17.468 15.5 16.288 14.55C15.618 14.02 14.838 13.6 13.988 13.29C16.198 12.65 18.978 13.08 20.688 14.46C21.608 15.2 22.078 16.13 21.988 17.09Z"
                      fill="white"
                    />
                  </svg>
                  Group
                </Link>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 10px",
                }}
              >
                <Link
                  href="Dustbin"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "#fff",
                  }}
                >
                  {" "}
                  <svg
                    style={{ marginRight: "10px" }}
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.19 2.5H7.81C4.17 2.5 2 4.67 2 8.31V16.68C2 20.33 4.17 22.5 7.81 22.5H16.18C19.82 22.5 21.99 20.33 21.99 16.69V8.31C22 4.67 19.83 2.5 16.19 2.5ZM15.76 16.26C15.7 17.11 15.63 18.17 13.71 18.17H10.29C8.38 18.17 8.3 17.11 8.24 16.26L7.93 12.3C7.92056 12.1732 7.93697 12.0457 7.97822 11.9254C8.01947 11.8051 8.08472 11.6944 8.17 11.6C8.25522 11.5075 8.35887 11.434 8.47427 11.384C8.58967 11.3341 8.71426 11.3089 8.84 11.31H15.16C15.41 11.31 15.66 11.42 15.83 11.6C16 11.79 16.09 12.04 16.07 12.29L15.76 16.26ZM16.8 10.32H16.74C15.7 10.22 14.75 10.15 13.84 10.11C12.6177 10.045 11.3932 10.035 10.17 10.08C9.57 10.11 8.96 10.15 8.36 10.21L7.27 10.32H7.2C6.85 10.32 6.55 10.06 6.52 9.7C6.48 9.33 6.76 8.99 7.13 8.96L8.22 8.85C8.65 8.81 9.07 8.78 9.5 8.76L9.58 8.29C9.66 7.79 9.81 6.83 11.31 6.83H12.7C14.21 6.83 14.36 7.82 14.43 8.3L14.51 8.78C15.26 8.82 16.03 8.88 16.87 8.96C17.25 9 17.52 9.33 17.49 9.71C17.45 10.06 17.15 10.32 16.8 10.32Z"
                      fill="white"
                    />
                  </svg>
                  Dustbin
                </Link>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 10px",
                }}
              >
                <Link
                  href="/art-note"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "#fff",
                  }}
                >
                  {" "}
                  <svg
                    style={{ marginRight: "10px", marginLeft: "2px" }}
                    width="18"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.9516 4.73772L14.7619 0.548975C14.4103 0.197466 13.9334 0 13.4363 0C12.9391 0 12.4622 0.197466 12.1106 0.548975L0.549382 12.1093C0.374676 12.2829 0.236159 12.4895 0.141857 12.717C0.0475541 12.9446 -0.000660167 13.1886 6.82682e-06 13.4349V17.6246C6.82682e-06 18.1219 0.197551 18.5988 0.549182 18.9504C0.900812 19.3021 1.37773 19.4996 1.87501 19.4996H17.625C17.9234 19.4996 18.2095 19.3811 18.4205 19.1701C18.6315 18.9591 18.75 18.673 18.75 18.3746C18.75 18.0762 18.6315 17.7901 18.4205 17.5791C18.2095 17.3681 17.9234 17.2496 17.625 17.2496H9.09376L18.9516 7.38991C19.1258 7.21579 19.2639 7.00906 19.3582 6.78152C19.4525 6.55399 19.501 6.31011 19.501 6.06382C19.501 5.81753 19.4525 5.57365 19.3582 5.34611C19.2639 5.11858 19.1258 4.91184 18.9516 4.73772ZM5.90626 17.2496H2.25001V13.5933L10.125 5.71835L13.7813 9.3746L5.90626 17.2496ZM15.375 7.78085L11.7188 4.1246L13.4381 2.40522L17.0944 6.06147L15.375 7.78085Z"
                      fill="white"
                    />
                  </svg>
                  Sketch
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Link
          href="/incognito"
          sx={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "#3644C7",
              borderRadius: "30px",
              margin: "0 10px",
              width: "315px",
              height: "40px",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "700",
              fontSize: "18px",
            }}
          >
            <img
              style={{ height: "30px", width: "30px", marginRight: "5px" }}
              src="../public/img/545af073cb81365ffa194ba6a7206ff1 (1).png"
              alt=""
            />
            Incognito
          </div>
        </Link>
        <ModeToggle />
      </div>
    </>
  );
}
function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <FormControlLabel
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
      control={<MaterialUISwitch sx={{ m: 1 }} checked={mode === "dark"} />}
    />
  );
}
export default Navbar;
