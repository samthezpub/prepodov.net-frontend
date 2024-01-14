import { Box, Container, Fade, Paper, Popper } from "@mui/material";
import { Nav } from "../Utils/Nav";
import { SideBar } from "../Utils/SideBar";
import standartavatar from "../Images/standartavatar.jpg";
import { GroupListMenu } from "../Utils/GroupListMenu";
import '../CSS/Groups.css';
import { useEffect, useState } from "react";


export function Groups(params) {
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

            <Container style={{ display: "flex", marginTop: "20px" }}>
                <SideBar></SideBar>

                <Paper style={{ width: "100%", height:"100%", minHeight:"80vh", padding: "8px" }}>
                    <div className="cards" style={{ width: "100%", height: "100%" }}>
                        {user && user.groups.map((group, index) => {
                            return (
                                <div className="card" key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <div className="left" style={{ display: "flex" }}>
                                        <div className="image">
                                            <img width={"64px"} height={"64px"} src={standartavatar} style={{ borderRadius: "200px", marginRight: "10px" }}></img>
                                        </div>
                                        <div>
                                            <h3>{group.name}</h3>
                                            <p>{group.groupType}</p>
                                            <p>{group.users.length + " подписок"}</p>
                                        </div>
                                    </div>
                                    <div className="right" style={{}}>
                                        <GroupListMenu></GroupListMenu>
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