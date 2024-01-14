import { Box, Container, Fade, Popper } from "@mui/material";
import { Nav } from "../Utils/Nav";
import { SideBar } from "../Utils/SideBar";
import standartavatar from "../Images/standartavatar.jpg";
import { GroupListMenu } from "../Utils/GroupListMenu";


export function Groups(params) {
    return (
        <div>
            <Nav></Nav>

            <Container style={{ display: "flex", marginTop: "20px" }}>
                <SideBar></SideBar>
                <div className="cards" style={{ width: "100%", height: "100%" }}>
                    <div className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div className="left" style={{ display: "flex" }}>
                            <div className="image">
                                <img width={"64px"} height={"64px"} src={standartavatar} style={{ borderRadius: "200px", marginRight: "10px" }}></img>
                            </div>
                            <div>
                                <p>Группа</p>
                                <p>Категория</p>
                                <p>Подписчики</p>
                            </div>
                        </div>
                        <div className="right" style={{}}>
                            <GroupListMenu></GroupListMenu>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}