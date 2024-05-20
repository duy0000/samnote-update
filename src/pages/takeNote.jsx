import Navbar from "../component/layout/toolBar";
import WriteNote from "../component/writeNote";

export default function TakeNote() {
  return (
    <>
      <main style={{ display: "grid", gridTemplateColumns: "250px 1fr" }}>
        <Navbar />

        <WriteNote />
      </main>
    </>
  );
}
