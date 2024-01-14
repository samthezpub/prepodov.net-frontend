import { Container, Paper } from "@mui/material";
import { Nav } from "../Utils/Nav";
import { SideBar } from "../Utils/SideBar";
import standartavatar from '../Images/standartavatar.jpg'
import '../CSS/Friends.css';
import { useEffect, useState } from "react";
import { height } from "@mui/system";


export function Friends(params) {

    const [userId, setUserId] = useState()
    const [user, setUser] = useState();

    async function getCurrentUserId(params) {

        return 6;
        // Реализация будет добавлена, когда будет настроен spring security
    }

    async function getUser() {
        let userId = await getCurrentUserId();
        setUserId(userId)

        try {
            const resp = await fetch(`http://localhost:8080/api/v1/getuser/${userId}`, {
                mode: 'cors',
            });

            const data = await resp.json()
                .then((data) => {
                    setUser(data);
                    console.log(data)
                })
            return data; // Возвращаем данные, если нужно использовать их где-то еще
        } catch (error) {
            console.error('Произошла ошибка при запросе пользователя:', error);
            throw error; // Можно обработать ошибку здесь или просто выбросить её дальше
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <div>
            <Nav></Nav>

            <Container style={{ display: "flex", marginTop: "20px" , minHeight:"90vh"}}>
                <SideBar></SideBar>
                <Paper style={{width:"100%", padding:"8px"}}>
                    <div className="cards" style={{ width: "100%", height: "100%" }}>
                        {user && user.friends.map((friend, index) => {
                            return (
                                <div className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <div className="left" style={{ display: "flex", alignItems: "center" }}>
                                        <div className="image">
                                            <img width={"64px"} height={"64px"} src={standartavatar} style={{ borderRadius: "200px", marginRight: "10px" }}></img>
                                        </div>
                                        <div>
                                            <h3>{friend.username}</h3>
                                            <p>Написать сообщение</p>
                                        </div>
                                    </div>
                                    <div className="right" style={{}}>
                                        <p className="status">Online</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </Paper>
            </Container>
        </div>
    )
}