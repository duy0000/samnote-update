import Board from "../component/handleNote";

export default function HandleArt() {
  return (
    <>
      <div
        style={{
          gridColumn: "2/3",
          //  overflow: "hidden"
        }}
      >
        <Board />
      </div>
    </>
  );
}
