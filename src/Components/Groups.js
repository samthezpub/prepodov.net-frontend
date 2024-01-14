import { Box, Container, Fade, Paper, Popper } from "@mui/material";
import { Nav } from "../Utils/Nav";
import { SideBar } from "../Utils/SideBar";
import standartavatar from "../Images/standartavatar.jpg";
import { GroupListMenu } from "../Utils/GroupListMenu";
import '../CSS/Groups.css';


export function Groups(params) {
    return (
        <div>
            <Nav></Nav>

            <Container style={{ display: "flex", marginTop: "20px" }}>
                <SideBar></SideBar>

                <Paper style={{width:"100%", padding:"8px"}}>
                    <div className="cards" style={{ width: "100%", height: "100%" }}>
                        <div className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                            <div className="left" style={{ display: "flex" }}>
                                <div className="image">
                                    <img width={"64px"} height={"64px"} src={standartavatar} style={{ borderRadius: "200px", marginRight: "10px" }}></img>
                                </div>
                                <div>
                                    <h3>Группа</h3>
                                    <p>Категория</p>
                                    <p>Подписчики</p>
                                </div>
                            </div>
                            <div className="right" style={{}}>
                                <GroupListMenu></GroupListMenu>
                            </div>
                        </div>
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
                </Paper>
            </Container>
        </div>
    )
}