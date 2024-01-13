import { Button, Container, IconButton, TextField } from '@mui/material';
import { Nav } from '../Utils/Nav';
import { SideBar } from '../Utils/SideBar';
import { PageBlock } from '../Utils/PageBlock';
import '../CSS/CustomContainer.css';
import defaultAvatar from '../Images/standartavatar.jpg';
import like from '../Images/like.svg';
import repost from '../Images/repost.svg';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import { useAsync } from 'react-async';


function onSubmitComment(event) {
    alert("Hello frogs!");
}

export function Profile(params) {
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

            <div className='custom-container' style={{ backgroundColor: "white", paddingTop: "20px" }}>
                <SideBar></SideBar>
                <div style={{ display: "flex", height: "100%", width: "50%", backgroundColor: "grey", padding: "15px" }}>
                    <div className='content' style={{ display: "flex", width: "100%", height: "100%" }}>
                        <div className='avatar_cover' style={{ display: 'flex', alignItems: "center", justifyContent: "center", backgroundColor: "whitesmoke", minWidth: "200px", height: "243px", marginRight: "10px" }}>
                            <img style={{ width: "90%", height: "90%" }} src={defaultAvatar}></img>
                        </div>

                        <div className='main-block' style={{ width: "70%" }}>
                            <div className='about' style={{ backgroundColor: "white", padding: "1px", marginBottom: "8px" }}>
                                <div className='nameandstatus' style={{ display: 'flex', justifyContent: "space-between", padding: "8px 15px 0", margin: "0" }}>
                                    <div className='name'>
                                        <p>{user && user.username}</p>
                                    </div>
                                    <div className='status'>
                                        <p>Online</p>
                                    </div>
                                </div>

                                <hr></hr>

                                <div className='personal-info' style={{ display: 'flex', justifyContent: "space-between", padding: "0px 15px" }}>
                                    <div className='titles'>
                                        <p>Дата рождения</p>
                                        <p>Город</p>
                                        <p>Образование</p>
                                    </div>

                                    <div className='values'>
                                        <p>{user && user.birthdate}</p>
                                        <p>{user && user.city}</p>
                                        <p>{user && user.education}</p>
                                    </div>
                                </div>

                                <hr></hr>

                                <div className='counters' style={{ display: 'flex', justifyContent: "center", textAlign: "center" }}>
                                    <div className='item'>
                                        <p>{user && user.friends.length}</p>
                                        <p>Друзей</p>
                                    </div>
                                    <div className='item'>
                                        <p>{user && user.posts.length}</p>
                                        <p>Постов</p>
                                    </div>
                                    <div className='item'>
                                        <p>{user && user.posts.length}</p>
                                        <p>Групп</p>
                                    </div>
                                </div>
                            </div>

                            <div className='posts' style={{ boxSizing: "border-box" }}>
                                <div style={{height: "100%", backgroundColor: "white", padding: "8px", marginBottom:"8px"}}>
                                    <h2>Ваши посты</h2>
                                </div>
                                {user && user.posts.map((post, index) =>{
                                    return(
                                        <div className='post' style={{ height: "100%", backgroundColor: "white", padding: "8px", marginBottom: "10px" }}>
                                    <div className='creator' style={{ display: 'flex', alignItems: "center", marginBottom: "8px" }}>
                                        <div className='left' style={{ height: "48px", width: "48px", marginRight: "5px" }}>
                                            <img src={defaultAvatar} style={{ height: "48px", width: "48px", borderRadius: "100px" }}></img>
                                        </div>

                                        <div className='right'>
                                            <p className='name'>{user.username}</p>
                                            <p className='date'>{post.postedAtFormatted}</p>
                                        </div>
                                    </div>

                                    <div className='content' style={{ marginBottom: "8px" }}>
                                        <div className='avatar_cover' style={{ display: "flex", justifyContent: "center", width: "100%", height: "100%" }}>
                                            <p>{post.content}</p>
                                        </div>
                                    </div>

                                    <div className='actions' style={{ display:"flex" ,marginBottom: "8px" }}>
                                        <div className='like_container item' style={{display:"flex", alignItems:"center"}}>
                                            <img className='like' src={like} style={{marginRight:"4px"}}></img>
                                            <span className='like_counter'>{post.likes}</span>
                                        </div>
                                        <div className='repost_container item' style={{display:"flex", alignItems:"center"}}>
                                            <img className='repost' src={repost}></img>
                                            <span className='repost_counter'>{post.reposts}</span>
                                        </div>
                                        
                                    </div>

                                    <div className='comments' style={{ display: "flex", marginBottom: "8px" }}>
                                        <form method='post' onSubmit={onSubmitComment}>
                                            <TextField
                                                id="outlined-multiline-flexible"
                                                label="Написать комментарий"
                                                className='comment_input'
                                                multiline
                                                maxRows={1}
                                            />
                                            <IconButton type='submit' className='submit_button' variant="contained">
                                                <SendIcon></SendIcon>
                                            </IconButton>
                                        </form>
                                    </div>
                                </div>
                                    )
                                })}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}