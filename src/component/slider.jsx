import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import SvgIcon from "@mui/material/SvgIcon";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Checkbox from "@mui/material/Checkbox";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

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
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "text.main",
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
          </Box>
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
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "text.main",
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
          </Box>
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
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "text.main",
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
          </Box>
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
      <div className="iwuiriu">
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
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "text.main",
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
          </Box>
        </Box>
      </div>
      {/* <div className="iwuiriu">
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
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "text.main",
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
          </Box>
        </Box>
      </div>{" "}
      <div className="iwuiriu">
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
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "text.main",
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
          </Box>
        </Box>
      </div> */}
    </Slider>
  );
}
