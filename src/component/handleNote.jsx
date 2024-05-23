// import { useState } from "react";
// import { Stage, Layer, Rect, Line } from "react-konva";
// import Slider from "@mui/material/Slider";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";

// const Board = () => {
//   const [lines, setLines] = useState([]);
//   const [isDrawing, setIsDrawing] = useState(false);
//   const [color, setColor] = useState("black"); // Màu sắc mặc định
//   const [lineWidth, setLineWidth] = useState(2); // Độ rộng mặc định của đường vẽ
//   const [selectedColor, setSelectedColor] = useState(null); // Màu đang được chọn

//   const handleMouseDown = (event) => {
//     setIsDrawing(true);
//     const { offsetX, offsetY } = event.target.getStage().getPointerPosition();
//     setLines([
//       ...lines,
//       { points: [offsetX, offsetY], color, width: lineWidth },
//     ]);
//   };
/* Group */

//   const handleUndo = () => {
//     setLines(lines.slice(0, -1)); // Loại bỏ điểm vẽ cuối cùng
//   };

//   const handleMouseMove = (event) => {
//     if (!isDrawing) return;

//     const stage = event.target.getStage();
//     const point = stage.getPointerPosition();
//     let lastLine = lines[lines.length - 1];

//     // Kiểm tra xem lastLine có tồn tại không
//     if (lastLine) {
//       // Kiểm tra xem points đã được khởi tạo chưa
//       if (!lastLine.points) {
//         lastLine.points = []; // Khởi tạo mảng points nếu chưa tồn tại
//       }
//       lastLine.points = lastLine.points.concat([point.x, point.y]);

//       setLines([...lines.slice(0, lines.length - 1), lastLine]);
//     }
//   };

//   const handleSaveAndExport = () => {
//     console.log(lines); // Xuất dữ liệu ra console
//     // Đây là nơi bạn có thể thực hiện việc lưu dữ liệu vào cơ sở dữ liệu hoặc file
//   };

//   const handleMouseUp = () => {
//     setIsDrawing(false);
//   };

//   const handleColorChange = (newColor) => {
//     setColor(newColor);
//     setSelectedColor(newColor); // Cập nhật màu đang được chọn
//   };

//   const handleWidthChange = (event, newValue) => {
//     setLineWidth(newValue);
//   };

//   const colors = ["#0000FF", "#FF0000", "#800080", "#FFFF00", "#000000"];

//   // Kích thước cố định cho Board
//   const boardWidth = window.innerWidth - 267; // Trừ đi 250px
//   const boardHeight = 600;

//   return (
//     <div>
//       <Box
//         className="list-button"
//         sx={{
//           width: "100%",
//           height: "fit-content",
//           display: "flex",
//           color: "text.main",
//           flexDirection: "row",
//           justifyContent: "space-evenly",
//         }}
//       >
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <p style={{ margin: "0 10px" }}>Color : </p>{" "}
//           {colors.map((c, index) => (
//             <button
//               key={index}
//               className="color-button"
//               style={{
//                 backgroundColor: c,
//                 width: "20px",
//                 height: "20px",
//                 margin: "5px",
//                 borderRadius: "50%",
//                 cursor: "pointer",
//                 border:
//                   selectedColor === c ? "3px solid #fff" : "0.5px solid #fff", // Thêm border nếu màu đang được chọn
//               }}
//               onClick={() => handleColorChange(c)}
//             />
//           ))}
//         </div>
//         <div
//           style={{
//             marginLeft: "20px",
//             display: "flex",
//             alignItems: "center",
//             width: "200px",
//             height: "80px",
//           }}
//         >
//           <p style={{ margin: "0 10px", whiteSpace: "nowrap" }}>Line : </p>{" "}
//           <Slider
//             value={lineWidth}
//             onChange={handleWidthChange}
//             aria-labelledby="discrete-slider-custom"
//             step={1}
//             min={1}
//             max={10}
//             valueLabelDisplay="auto"
//           />
//         </div>
//         <div
//           style={{
//             marginLeft: "20px",
//             whiteSpace: "nowrap",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "flex-end",
//           }}
//         >
//           <Button variant="outlined" onClick={handleUndo}>
//             undo
//           </Button>
//         </div>
//         <div
//           style={{
//             marginLeft: "20px",
//             whiteSpace: "nowrap",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "flex-end",
//           }}
//         >
//           <Button variant="contained" onClick={handleSaveAndExport}>
//             save
//           </Button>
//         </div>
//       </Box>
//       <div
//         style={{ width: boardWidth, height: boardHeight, overflow: "hidden" }}
//       >
//         <Stage
//           width={boardWidth}
//           height={boardHeight}
//           onMouseDown={handleMouseDown}
//           onMouseMove={handleMouseMove}
//           onMouseUp={handleMouseUp}
//         >
//           <Layer>
//             <Rect width={boardWidth} height={boardHeight} fill="white" />
//             {lines.map((line, i) => (
//               <Line
//                 key={i}
//                 points={line.points}
//                 stroke={line.color}
//                 strokeWidth={line.width}
//                 tension={0.5}
//                 lineCap="round"
//               />
//             ))}
//           </Layer>
//         </Stage>
//       </div>
//     </div>
//   );
// };

// export default Board;

import { useState } from "react";
import { Stage, Layer, Rect, Line } from "react-konva";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import svg2pxImage from "../assets/pen-2px-removebg-preview.png";
import svg4pxImage from "../assets/pen-4px-removebg-preview.png";
import svg8pxImage from "../assets/pen-8px-removebg-preview.png";
import easerImage from "../assets/easer-removebg-preview.png";

const Board = () => {
  const [lines, setLines] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("black");
  const [lineWidth, setLineWidth] = useState(2);
  const [selectedColor, setSelectedColor] = useState("black");
  const [isEraserActive, setIsEraserActive] = useState(false);

  const toggleEraser = () => {
    setIsEraserActive(!isEraserActive);
  };

  const handleMouseDown = (event) => {
    setIsDrawing(true);
    const { offsetX, offsetY } = event.target.getStage().getPointerPosition();
    setLines([
      ...lines,
      {
        points: [offsetX, offsetY],
        color: isEraserActive ? "white" : color,
        width: isEraserActive ? 10 : lineWidth,
      },
    ]);
  };

  const handleUndo = () => {
    setLines(lines.slice(0, -1));
  };

  const handleMouseMove = (event) => {
    if (!isDrawing) return;

    const stage = event.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];

    if (lastLine) {
      if (!lastLine.points) {
        lastLine.points = [];
      }
      lastLine.points = lastLine.points.concat([point.x, point.y]);
      setLines([...lines.slice(0, lines.length - 1), lastLine]);
    }
  };

  const handleSaveAndExport = () => {
    console.log(lines);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);
    setSelectedColor(newColor);
  };

  const handleWidthChange = (newValue) => {
    setLineWidth(newValue);
  };

  const boardWidth = window.innerWidth - 267;
  const boardHeight = 550;

  return (
    <div style={{ position: "relative" }}>
      <Box
        className="list-button"
        sx={{
          width: "fit-content",
          height: "fit-content",
          padding: "0 40px",
          borderRadius: "40px",
          zIndex: "20",
          backgroundColor: "bg.main",
          bottom: "50px",
          left: "50%",
          transform: "translateX(-50%)",
          position: "absolute",
          display: "flex",
          color: "text.main",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            className="color-button"
            style={{
              backgroundColor: "#0000FF",
              width: "20px",
              height: "20px",
              margin: "5px",
              borderRadius: "50%",
              cursor: "pointer",
              border:
                selectedColor === "#0000FF"
                  ? "3px solid #fff"
                  : "0.5px solid #fff",
            }}
            onClick={() => handleColorChange("#0000FF")}
          />
          <button
            className="color-button"
            style={{
              backgroundColor: "#FF0000",
              width: "20px",
              height: "20px",
              margin: "5px",
              borderRadius: "50%",
              cursor: "pointer",
              border:
                selectedColor === "#FF0000"
                  ? "3px solid #fff"
                  : "0.5px solid #fff",
            }}
            onClick={() => handleColorChange("#FF0000")}
          />
          <button
            className="color-button"
            style={{
              backgroundColor: "#800080",
              width: "20px",
              height: "20px",
              margin: "5px",
              borderRadius: "50%",
              cursor: "pointer",
              border:
                selectedColor === "#800080"
                  ? "3px solid #fff"
                  : "0.5px solid #fff",
            }}
            onClick={() => handleColorChange("#800080")}
          />
          <button
            className="color-button"
            style={{
              backgroundColor: "#FFFF00",
              width: "20px",
              height: "20px",
              margin: "5px",
              borderRadius: "50%",
              cursor: "pointer",
              border:
                selectedColor === "#FFFF00"
                  ? "3px solid #fff"
                  : "0.5px solid #fff",
            }}
            onClick={() => handleColorChange("#FFFF00")}
          />
          <button
            className="color-button"
            style={{
              backgroundColor: "#000000",
              width: "20px",
              height: "20px",
              margin: "5px",
              borderRadius: "50%",
              cursor: "pointer",
              border:
                selectedColor === "#000000"
                  ? "3px solid #fff"
                  : "0.5px solid #fff",
            }}
            onClick={() => handleColorChange("#000000")}
          />
        </div>
        <div
          style={{
            marginLeft: "20px",
            display: "flex",
            alignItems: "center",
            height: "80px",
          }}
        >
          <button
            style={{
              margin: "0",
              padding: "0px",
              cursor: "pointer",
              border: "none",
              transform: lineWidth === 2 ? "scale(1.1)" : "scale(0.8)",
            }}
            onClick={() => handleWidthChange(2)}
          >
            <img
              style={{ width: "15px", backgroundColor: "#fff" }}
              src={svg2pxImage}
              alt=""
            />
          </button>
          <button
            style={{
              margin: "0 10px",
              padding: "0px",
              cursor: "pointer",
              border: "none",
              transform: lineWidth === 4 ? "scale(1.3)" : "scale(1)",
            }}
            onClick={() => handleWidthChange(4)}
          >
            <img
              style={{ width: "15px", backgroundColor: "black" }}
              src={svg4pxImage}
              alt=""
            />
          </button>{" "}
          <button
            style={{
              margin: "0",
              padding: "0px",
              cursor: "pointer",
              border: "none",
              transform: lineWidth === 8 ? "scale(1.3)" : "scale(1)",
            }}
            onClick={() => handleWidthChange(8)}
          >
            <img
              style={{ width: "15px", backgroundColor: "black" }}
              src={svg8pxImage}
              alt=""
            />
          </button>{" "}
        </div>
        <div
          style={{
            marginLeft: "20px",
            whiteSpace: "nowrap",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Button variant="outlined" onClick={handleUndo}>
            undo
          </Button>
        </div>
        <div
          style={{
            marginLeft: "20px",
            whiteSpace: "nowrap",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Button variant="contained" onClick={handleSaveAndExport}>
            save
          </Button>
        </div>
      </Box>
      <div
        style={{ width: boardWidth, height: boardHeight, overflow: "hidden" }}
      >
        <Stage
          width={boardWidth}
          height={boardHeight}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <Layer>
            <Rect width={boardWidth} height={boardHeight} fill="white" />
            {lines.map((line, i) => (
              <Line
                key={i}
                points={line.points}
                stroke={line.color}
                strokeWidth={line.width}
                tension={0.5}
                lineCap="round"
              />
            ))}
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default Board;
