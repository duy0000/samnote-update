import HelloUser from "../component/user/helloUser";
import Box from "@mui/material/Box";
import PublicNoteTab from "../component/noteTab/publickNote";
import Scratch from "../component/scratch";
import NewUser from "../component/user/newUser";
import LastestPublicNoteTab from "../component/noteTab/lastestPublicNote";
import PrivateNoteTab from "../component/noteTab/privateNote";
function CheckUser() {
  return (
    <>
      <div style={{ position: "relative", paddingTop: "300px" }}>
        <img
          style={{
            top: "0",
            right: "0",
            width: "100%",
            objectFit: "cover",
            left: 0,
            zIndex: 9,
            height: "300px",
            position: "absolute",
          }}
          src="../public/img/imgkiemtrauser.jpg"
          alt=""
        />
        <HelloUser />
        <section
          style={{
            display: "grid",
            position: "relative",
            zIndex: 20,
            gridTemplateColumns: "1fr 250px",

            borderRadius: "20px",
            marginLeft: "10px",
            gap: "10px",
          }}
        >
          <div
            style={{
              gridColumn: "1/3",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "20px 0px 50px 70px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{
                  position: "relative",
                  borderRadius: "50%",
                  marginRight: "20px",
                }}
              >
                {" "}
                <img
                  style={{
                    height: "80px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                  src="../public/img/avata.jpg"
                  alt=""
                />
                <div
                  style={{
                    position: "absolute",
                    right: "10px",
                    bottom: 0,
                    height: "25px",
                    width: "25px",
                    background: "#888",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
              <Box sx={{ color: "text.main", fontSize: "20px" }}>
                <p style={{ margin: 0 }}>
                  <strong>Minh Vu</strong>
                </p>
                <p style={{ margin: 0 }}>Join at 26st, Jul 2023</p>
              </Box>
            </div>
          </div>
          <div
            style={{
              gridColumn: "1/2",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <LastestPublicNoteTab />
          </div>
          <div>
            <Scratch />
            <div style={{ marginTop: "10px" }}>
              <NewUser />
            </div>
          </div>
        </section>
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 250px",
            marginTop: "0px",
            borderRadius: "20px",
            marginLeft: "10px",
            gap: "10px",
          }}
        >
          <div
            style={{
              gridColumn: "1/3",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            {" "}
            <PublicNoteTab />
          </div>
        </section>
        <section
          style={{
            borderRadius: "20px",
            marginLeft: "10px",
            marginTop: "10px",
            overflow: "hidden",
          }}
        >
          <PrivateNoteTab />
        </section>
      </div>
    </>
  );
}
export default CheckUser;
