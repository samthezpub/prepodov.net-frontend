import { Container } from "@mui/material";
import { Nav } from "../Utils/Nav";
import { SideBar } from "../Utils/SideBar";
import standartavatar from '../Images/standartavatar.jpg'
import '../CSS/Friends.css';


export function Friends(params) {
    return (
        <div>
            <Nav></Nav>

            <Container style={{display:"flex",marginTop:"20px"}}>
                <SideBar></SideBar>
                <div className="cards" style={{width:"100%", height:"100%"}}>
                    <div className="card" style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <div className="left" style={{display:"flex", alignItems:"center"}}>
                            <div className="image">
                                <img width={"64px"} height={"64px"} src={standartavatar} style={{borderRadius:"200px", marginRight:"10px"}}></img>
                            </div>
                            <div>
                                <p>Владислав Владиславович</p>
                                <p>Написать сообщение</p>
                            </div>
                        </div>
                        <div className="right" style={{}}>
                            <p className="status">Online</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}