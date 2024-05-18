import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import SvgIcon from "@mui/material/SvgIcon";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Checkbox from "@mui/material/Checkbox";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export function SliderNoteTab() {
  var settings = {
    infinite: true,
    dots: false,
    arrows: false,
    speed: 200,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="slider-container">
        <Box
          component="div"
          sx={{
            display: "flex",
            color: "text.main",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Box component="h3" sx={{ color: "text.main" }}>
            No name note
          </Box>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {" "}
            <MoreHorizIcon sx={{ cursor: "pointer", color: "text.main" }} />
            <SvgIcon
              sx={{
                marginLeft: "10px",
                cursor: "pointer",
                width: "30px",
                height: "30px",
                color: "text.main",
              }}
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M35 20L23.3333 8.33334V15C11.6667 16.6667 6.66667 25 5 33.3333C9.16667 27.5 15 24.8333 23.3333 24.8333V31.6667L35 20Z" />
            </SvgIcon>
          </div>
        </Box>
        <Box sx={{ color: "text.main", padding: "0 10px 20px 10px" }}>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </Box>
        <Box
          component="div"
          sx={{ color: "text.main", padding: "0 10px 50px 10px" }}
        >
          <p>27/2/2023</p>
        </Box>
        <Checkbox
          sx={{ position: "absolute", bottom: "10px", right: "10px" }}
        />
      </div>
      <div className="slider-container">
        <Box
          component="div"
          sx={{
            display: "flex",
            color: "text.main",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Box component="h3" sx={{ color: "text.main" }}>
            No name note
          </Box>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {" "}
            <MoreHorizIcon sx={{ cursor: "pointer", color: "text.main" }} />
            <SvgIcon
              sx={{
                marginLeft: "10px",
                cursor: "pointer",
                width: "30px",
                height: "30px",
                color: "text.main",
              }}
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M35 20L23.3333 8.33334V15C11.6667 16.6667 6.66667 25 5 33.3333C9.16667 27.5 15 24.8333 23.3333 24.8333V31.6667L35 20Z" />
            </SvgIcon>
          </div>
        </Box>
        <Box sx={{ color: "text.main", padding: "0 10px 20px 10px" }}>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </Box>
        <Box
          component="div"
          sx={{ color: "text.main", padding: "0 10px 50px 10px" }}
        >
          <p>27/2/2023</p>
        </Box>
        <Checkbox
          sx={{ position: "absolute", bottom: "10px", right: "10px" }}
        />
      </div>{" "}
      <div className="slider-container">
        <Box
          component="div"
          sx={{
            display: "flex",
            color: "text.main",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Box component="h3" sx={{ color: "text.main" }}>
            No name note
          </Box>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {" "}
            <MoreHorizIcon sx={{ cursor: "pointer", color: "text.main" }} />
            <SvgIcon
              sx={{
                marginLeft: "10px",
                cursor: "pointer",
                width: "30px",
                height: "30px",
                color: "text.main",
              }}
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M35 20L23.3333 8.33334V15C11.6667 16.6667 6.66667 25 5 33.3333C9.16667 27.5 15 24.8333 23.3333 24.8333V31.6667L35 20Z" />
            </SvgIcon>
          </div>
        </Box>
        <Box sx={{ color: "text.main", padding: "0 10px 20px 10px" }}>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </Box>
        <Box
          component="div"
          sx={{ color: "text.main", padding: "0 10px 50px 10px" }}
        >
          <p>27/2/2023</p>
        </Box>
        <Checkbox
          sx={{ position: "absolute", bottom: "10px", right: "10px" }}
        />
      </div>{" "}
      <div className="slider-container">
        <Box
          component="div"
          sx={{
            display: "flex",
            color: "text.main",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Box component="h3" sx={{ color: "text.main" }}>
            No name note
          </Box>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {" "}
            <MoreHorizIcon sx={{ cursor: "pointer", color: "text.main" }} />
            <SvgIcon
              sx={{
                marginLeft: "10px",
                cursor: "pointer",
                width: "30px",
                height: "30px",
                color: "text.main",
              }}
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M35 20L23.3333 8.33334V15C11.6667 16.6667 6.66667 25 5 33.3333C9.16667 27.5 15 24.8333 23.3333 24.8333V31.6667L35 20Z" />
            </SvgIcon>
          </div>
        </Box>
        <Box sx={{ color: "text.main", padding: "0 10px 20px 10px" }}>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </Box>
        <Box
          component="div"
          sx={{ color: "text.main", padding: "0 10px 50px 10px" }}
        >
          <p>27/2/2023</p>
        </Box>
        <Checkbox
          sx={{ position: "absolute", bottom: "10px", right: "10px" }}
        />
      </div>
    </Slider>
  );
}
export function SliderPinnedNote() {
  var settings = {
    infinite: true,
    dots: false,
    arrows: false,
    speed: 200,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 551,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="slider-container">
        <Box
          sx={{
            display: "flex",
            color: "text.main",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <h3>No name note</h3>
          <div>
            {" "}
            <MoreHorizIcon sx={{ cursor: "pointer", color: "text.main" }} />
            <SvgIcon
              sx={{ color: "text.main", marginLeft: "10px", cursor: "pointer" }}
              width="30"
              height="30"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M35 20L23.3333 8.33334V15C11.6667 16.6667 6.66667 25 5 33.3333C9.16667 27.5 15 24.8333 23.3333 24.8333V31.6667L35 20Z" />
            </SvgIcon>
          </div>
        </Box>
        <Box
          component="div"
          sx={{ color: "text.main", margin: "0 15px", paddingBottom: "50px" }}
        >
          <div style={{ margin: "0 15px" }}>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <p>27/2/2023</p>
        </Box>
        <Checkbox
          sx={{ position: "absolute", bottom: "10px", right: "10px" }}
        />
      </div>
      <div className="slider-container">
        <Box
          sx={{
            display: "flex",
            color: "text.main",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <h3>No name note</h3>
          <div>
            {" "}
            <MoreHorizIcon sx={{ cursor: "pointer", color: "text.main" }} />
            <SvgIcon
              sx={{ color: "text.main", marginLeft: "10px", cursor: "pointer" }}
              width="30"
              height="30"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M35 20L23.3333 8.33334V15C11.6667 16.6667 6.66667 25 5 33.3333C9.16667 27.5 15 24.8333 23.3333 24.8333V31.6667L35 20Z" />
            </SvgIcon>
          </div>
        </Box>
        <Box
          component="div"
          sx={{ color: "text.main", margin: "0 15px", paddingBottom: "50px" }}
        >
          <div style={{ margin: "0 15px" }}>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <p>27/2/2023</p>
        </Box>
        <Checkbox
          sx={{ position: "absolute", bottom: "10px", right: "10px" }}
        />
      </div>{" "}
      <div className="slider-container">
        <Box
          sx={{
            display: "flex",
            color: "text.main",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <h3>No name note</h3>
          <div>
            {" "}
            <MoreHorizIcon sx={{ cursor: "pointer", color: "text.main" }} />
            <SvgIcon
              sx={{ color: "text.main", marginLeft: "10px", cursor: "pointer" }}
              width="30"
              height="30"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M35 20L23.3333 8.33334V15C11.6667 16.6667 6.66667 25 5 33.3333C9.16667 27.5 15 24.8333 23.3333 24.8333V31.6667L35 20Z" />
            </SvgIcon>
          </div>
        </Box>
        <Box
          component="div"
          sx={{ color: "text.main", margin: "0 15px", paddingBottom: "50px" }}
        >
          <div style={{ margin: "0 15px" }}>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <p>27/2/2023</p>
        </Box>
        <Checkbox
          sx={{ position: "absolute", bottom: "10px", right: "10px" }}
        />
      </div>
    </Slider>
  );
}
export function SliderPublicNote() {
  var settings = {
    infinite: true,
    dots: false,
    arrows: false,
    speed: 200,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 551,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="SliderPublicNote">
        <div
          style={{
            display: "flex",
            margin: "10px 20px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: " 10px 0",
            }}
          >
            <Avatar
              style={{
                height: "45px",
                width: "45px",
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
        <Box
          component="div"
          sx={{ color: "text.main", margin: "10px 10px 50px" }}
        >
          <strong style={{ fontSize: "20px" }}>No name note</strong>
          <p style={{ marginTop: "10px" }}>
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </Box>
        <Box
          component="div"
          sx={{
            color: "text.secondary",
            textAlign: "end",
            padding: "0 10px 0 0",
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
              <SvgIcon
                sx={{ color: "text.main" }}
                width="16"
                height="17"
                viewBox="0 0 16 17"
                // fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.66667 7.78711L7.33334 1.78711C7.86377 1.78711 8.37248 1.99782 8.74755 2.3729C9.12262 2.74797 9.33334 3.25668 9.33334 3.78711V6.45378H13.1067C13.2999 6.45159 13.4914 6.49144 13.6677 6.57059C13.8441 6.64973 14.0011 6.76627 14.1279 6.91212C14.2547 7.05797 14.3483 7.22966 14.4022 7.41528C14.4561 7.6009 14.469 7.79601 14.44 7.98711L13.52 13.9871C13.4718 14.305 13.3103 14.5948 13.0653 14.8031C12.8203 15.0114 12.5082 15.1241 12.1867 15.1204H4.66667M4.66667 7.78711V15.1204M4.66667 7.78711H2.66667C2.31305 7.78711 1.97391 7.92759 1.72386 8.17763C1.47381 8.42768 1.33334 8.76682 1.33334 9.12044V13.7871C1.33334 14.1407 1.47381 14.4799 1.72386 14.7299C1.97391 14.98 2.31305 15.1204 2.66667 15.1204H4.66667"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </SvgIcon>
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
              <SvgIcon
                sx={{ color: "text.main" }}
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.3333 9.12044L8.66667 15.1204C8.13624 15.1204 7.62753 14.9097 7.25246 14.5347C6.87739 14.1596 6.66667 13.6509 6.66667 13.1204V10.4538H2.89334C2.70007 10.456 2.50863 10.4161 2.33229 10.337C2.15595 10.2578 1.99893 10.1413 1.8721 9.99543C1.74527 9.84958 1.65167 9.67789 1.59778 9.49227C1.54389 9.30665 1.531 9.11154 1.56 8.92044L2.48001 2.92044C2.52822 2.6025 2.68972 2.3127 2.93473 2.10444C3.17975 1.89617 3.49179 1.78347 3.81334 1.78711H11.3333M11.3333 9.12044V1.78711M11.3333 9.12044H13.1133C13.4906 9.12711 13.8573 8.99502 14.1436 8.74923C14.43 8.50344 14.6161 8.16107 14.6667 7.78711V3.12044C14.6161 2.74648 14.43 2.40411 14.1436 2.15832C13.8573 1.91253 13.4906 1.78043 13.1133 1.78711H11.3333"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </SvgIcon>{" "}
              1
            </p>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              {" "}
              <SvgIcon
                sx={{ color: "text.main" }}
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 8.12042C14.0023 9.00033 13.7967 9.86834 13.4 10.6538C12.9296 11.5949 12.2065 12.3865 11.3116 12.9399C10.4168 13.4933 9.3855 13.7867 8.33333 13.7871C7.45342 13.7894 6.58541 13.5838 5.8 13.1871L2 14.4538L3.26667 10.6538C2.86995 9.86834 2.66437 9.00033 2.66667 8.12042C2.66707 7.06826 2.96041 6.03699 3.51381 5.14212C4.06722 4.24725 4.85884 3.52413 5.8 3.05375C6.58541 2.65704 7.45342 2.45146 8.33333 2.45375H8.66667C10.0562 2.53042 11.3687 3.11693 12.3528 4.10099C13.3368 5.08506 13.9233 6.39752 14 7.78709V8.12042Z"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </SvgIcon>{" "}
              1
            </p>
          </div>
        </Box>
      </div>
      <div className="SliderPublicNote">
        <div
          style={{
            display: "flex",
            margin: "10px 20px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: " 10px 0",
            }}
          >
            <Avatar
              style={{
                height: "45px",
                width: "45px",
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
        <Box
          component="div"
          sx={{ color: "text.main", margin: "10px 10px 50px" }}
        >
          <strong style={{ fontSize: "20px" }}>No name note</strong>
          <p style={{ marginTop: "10px" }}>
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </Box>
        <Box
          component="div"
          sx={{
            color: "text.secondary",
            textAlign: "end",
            padding: "0 10px 0 0",
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
              <SvgIcon
                sx={{ color: "text.main" }}
                width="16"
                height="17"
                viewBox="0 0 16 17"
                // fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.66667 7.78711L7.33334 1.78711C7.86377 1.78711 8.37248 1.99782 8.74755 2.3729C9.12262 2.74797 9.33334 3.25668 9.33334 3.78711V6.45378H13.1067C13.2999 6.45159 13.4914 6.49144 13.6677 6.57059C13.8441 6.64973 14.0011 6.76627 14.1279 6.91212C14.2547 7.05797 14.3483 7.22966 14.4022 7.41528C14.4561 7.6009 14.469 7.79601 14.44 7.98711L13.52 13.9871C13.4718 14.305 13.3103 14.5948 13.0653 14.8031C12.8203 15.0114 12.5082 15.1241 12.1867 15.1204H4.66667M4.66667 7.78711V15.1204M4.66667 7.78711H2.66667C2.31305 7.78711 1.97391 7.92759 1.72386 8.17763C1.47381 8.42768 1.33334 8.76682 1.33334 9.12044V13.7871C1.33334 14.1407 1.47381 14.4799 1.72386 14.7299C1.97391 14.98 2.31305 15.1204 2.66667 15.1204H4.66667"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </SvgIcon>
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
              <SvgIcon
                sx={{ color: "text.main" }}
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.3333 9.12044L8.66667 15.1204C8.13624 15.1204 7.62753 14.9097 7.25246 14.5347C6.87739 14.1596 6.66667 13.6509 6.66667 13.1204V10.4538H2.89334C2.70007 10.456 2.50863 10.4161 2.33229 10.337C2.15595 10.2578 1.99893 10.1413 1.8721 9.99543C1.74527 9.84958 1.65167 9.67789 1.59778 9.49227C1.54389 9.30665 1.531 9.11154 1.56 8.92044L2.48001 2.92044C2.52822 2.6025 2.68972 2.3127 2.93473 2.10444C3.17975 1.89617 3.49179 1.78347 3.81334 1.78711H11.3333M11.3333 9.12044V1.78711M11.3333 9.12044H13.1133C13.4906 9.12711 13.8573 8.99502 14.1436 8.74923C14.43 8.50344 14.6161 8.16107 14.6667 7.78711V3.12044C14.6161 2.74648 14.43 2.40411 14.1436 2.15832C13.8573 1.91253 13.4906 1.78043 13.1133 1.78711H11.3333"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </SvgIcon>{" "}
              1
            </p>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              {" "}
              <SvgIcon
                sx={{ color: "text.main" }}
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 8.12042C14.0023 9.00033 13.7967 9.86834 13.4 10.6538C12.9296 11.5949 12.2065 12.3865 11.3116 12.9399C10.4168 13.4933 9.3855 13.7867 8.33333 13.7871C7.45342 13.7894 6.58541 13.5838 5.8 13.1871L2 14.4538L3.26667 10.6538C2.86995 9.86834 2.66437 9.00033 2.66667 8.12042C2.66707 7.06826 2.96041 6.03699 3.51381 5.14212C4.06722 4.24725 4.85884 3.52413 5.8 3.05375C6.58541 2.65704 7.45342 2.45146 8.33333 2.45375H8.66667C10.0562 2.53042 11.3687 3.11693 12.3528 4.10099C13.3368 5.08506 13.9233 6.39752 14 7.78709V8.12042Z"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </SvgIcon>{" "}
              1
            </p>
          </div>
        </Box>
      </div>{" "}
      <div className="SliderPublicNote">
        <div
          style={{
            display: "flex",
            margin: "10px 20px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: " 10px 0",
            }}
          >
            <Avatar
              style={{
                height: "45px",
                width: "45px",
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
        <Box
          component="div"
          sx={{ color: "text.main", margin: "10px 10px 50px" }}
        >
          <strong style={{ fontSize: "20px" }}>No name note</strong>
          <p style={{ marginTop: "10px" }}>
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </Box>
        <Box
          component="div"
          sx={{
            color: "text.secondary",
            textAlign: "end",
            padding: "0 10px 0 0",
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
              <SvgIcon
                sx={{ color: "text.main" }}
                width="16"
                height="17"
                viewBox="0 0 16 17"
                // fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.66667 7.78711L7.33334 1.78711C7.86377 1.78711 8.37248 1.99782 8.74755 2.3729C9.12262 2.74797 9.33334 3.25668 9.33334 3.78711V6.45378H13.1067C13.2999 6.45159 13.4914 6.49144 13.6677 6.57059C13.8441 6.64973 14.0011 6.76627 14.1279 6.91212C14.2547 7.05797 14.3483 7.22966 14.4022 7.41528C14.4561 7.6009 14.469 7.79601 14.44 7.98711L13.52 13.9871C13.4718 14.305 13.3103 14.5948 13.0653 14.8031C12.8203 15.0114 12.5082 15.1241 12.1867 15.1204H4.66667M4.66667 7.78711V15.1204M4.66667 7.78711H2.66667C2.31305 7.78711 1.97391 7.92759 1.72386 8.17763C1.47381 8.42768 1.33334 8.76682 1.33334 9.12044V13.7871C1.33334 14.1407 1.47381 14.4799 1.72386 14.7299C1.97391 14.98 2.31305 15.1204 2.66667 15.1204H4.66667"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </SvgIcon>
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
              <SvgIcon
                sx={{ color: "text.main" }}
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.3333 9.12044L8.66667 15.1204C8.13624 15.1204 7.62753 14.9097 7.25246 14.5347C6.87739 14.1596 6.66667 13.6509 6.66667 13.1204V10.4538H2.89334C2.70007 10.456 2.50863 10.4161 2.33229 10.337C2.15595 10.2578 1.99893 10.1413 1.8721 9.99543C1.74527 9.84958 1.65167 9.67789 1.59778 9.49227C1.54389 9.30665 1.531 9.11154 1.56 8.92044L2.48001 2.92044C2.52822 2.6025 2.68972 2.3127 2.93473 2.10444C3.17975 1.89617 3.49179 1.78347 3.81334 1.78711H11.3333M11.3333 9.12044V1.78711M11.3333 9.12044H13.1133C13.4906 9.12711 13.8573 8.99502 14.1436 8.74923C14.43 8.50344 14.6161 8.16107 14.6667 7.78711V3.12044C14.6161 2.74648 14.43 2.40411 14.1436 2.15832C13.8573 1.91253 13.4906 1.78043 13.1133 1.78711H11.3333"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </SvgIcon>{" "}
              1
            </p>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              {" "}
              <SvgIcon
                sx={{ color: "text.main" }}
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 8.12042C14.0023 9.00033 13.7967 9.86834 13.4 10.6538C12.9296 11.5949 12.2065 12.3865 11.3116 12.9399C10.4168 13.4933 9.3855 13.7867 8.33333 13.7871C7.45342 13.7894 6.58541 13.5838 5.8 13.1871L2 14.4538L3.26667 10.6538C2.86995 9.86834 2.66437 9.00033 2.66667 8.12042C2.66707 7.06826 2.96041 6.03699 3.51381 5.14212C4.06722 4.24725 4.85884 3.52413 5.8 3.05375C6.58541 2.65704 7.45342 2.45146 8.33333 2.45375H8.66667C10.0562 2.53042 11.3687 3.11693 12.3528 4.10099C13.3368 5.08506 13.9233 6.39752 14 7.78709V8.12042Z"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </SvgIcon>{" "}
              1
            </p>
          </div>
        </Box>
      </div>
    </Slider>
  );
}
export function SliderPrivateNote() {
  var settings = {
    infinite: true,
    dots: false,
    arrows: false,
    speed: 200,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="SliderPublicNote test">
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
            <img
              style={{
                height: "30px",
                borderRadius: "10px",
                marginRight: "10px",
              }}
              src="../public/img/avata.jpg"
              alt=""
            />
            <div>
              <p style={{ margin: 0 }}>
                <strong>Minh Vu</strong>
              </p>
              <p style={{ margin: 0 }}>Join at 26st, Jul 2023</p>
            </div>
          </div>
          <div>
            <svg
              style={{ marginLeft: "10px" }}
              width="30"
              height="30"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35 20L23.3333 8.33334V15C11.6667 16.6667 6.66667 25 5 33.3333C9.16667 27.5 15 24.8333 23.3333 24.8333V31.6667L35 20Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div style={{ marginBottom: "50px" }}>
          <strong>No name note</strong>
          <p style={{ margin: 0 }}>Lorem ipsum dolor sit amet consectetur.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <Box
          component="div"
          sx={{
            color: "text.secondary",
            textAlign: "end",
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
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.66667 7.78711L7.33334 1.78711C7.86377 1.78711 8.37248 1.99782 8.74755 2.3729C9.12262 2.74797 9.33334 3.25668 9.33334 3.78711V6.45378H13.1067C13.2999 6.45159 13.4914 6.49144 13.6677 6.57059C13.8441 6.64973 14.0011 6.76627 14.1279 6.91212C14.2547 7.05797 14.3483 7.22966 14.4022 7.41528C14.4561 7.6009 14.469 7.79601 14.44 7.98711L13.52 13.9871C13.4718 14.305 13.3103 14.5948 13.0653 14.8031C12.8203 15.0114 12.5082 15.1241 12.1867 15.1204H4.66667M4.66667 7.78711V15.1204M4.66667 7.78711H2.66667C2.31305 7.78711 1.97391 7.92759 1.72386 8.17763C1.47381 8.42768 1.33334 8.76682 1.33334 9.12044V13.7871C1.33334 14.1407 1.47381 14.4799 1.72386 14.7299C1.97391 14.98 2.31305 15.1204 2.66667 15.1204H4.66667"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>{" "}
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
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.3333 9.12044L8.66667 15.1204C8.13624 15.1204 7.62753 14.9097 7.25246 14.5347C6.87739 14.1596 6.66667 13.6509 6.66667 13.1204V10.4538H2.89334C2.70007 10.456 2.50863 10.4161 2.33229 10.337C2.15595 10.2578 1.99893 10.1413 1.8721 9.99543C1.74527 9.84958 1.65167 9.67789 1.59778 9.49227C1.54389 9.30665 1.531 9.11154 1.56 8.92044L2.48001 2.92044C2.52822 2.6025 2.68972 2.3127 2.93473 2.10444C3.17975 1.89617 3.49179 1.78347 3.81334 1.78711H11.3333M11.3333 9.12044V1.78711M11.3333 9.12044H13.1133C13.4906 9.12711 13.8573 8.99502 14.1436 8.74923C14.43 8.50344 14.6161 8.16107 14.6667 7.78711V3.12044C14.6161 2.74648 14.43 2.40411 14.1436 2.15832C13.8573 1.91253 13.4906 1.78043 13.1133 1.78711H11.3333"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>{" "}
              1
            </p>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              {" "}
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 8.12042C14.0023 9.00033 13.7967 9.86834 13.4 10.6538C12.9296 11.5949 12.2065 12.3865 11.3116 12.9399C10.4168 13.4933 9.3855 13.7867 8.33333 13.7871C7.45342 13.7894 6.58541 13.5838 5.8 13.1871L2 14.4538L3.26667 10.6538C2.86995 9.86834 2.66437 9.00033 2.66667 8.12042C2.66707 7.06826 2.96041 6.03699 3.51381 5.14212C4.06722 4.24725 4.85884 3.52413 5.8 3.05375C6.58541 2.65704 7.45342 2.45146 8.33333 2.45375H8.66667C10.0562 2.53042 11.3687 3.11693 12.3528 4.10099C13.3368 5.08506 13.9233 6.39752 14 7.78709V8.12042Z"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>{" "}
              1
            </p>
          </div>
        </Box>
      </div>
    </Slider>
  );
}
