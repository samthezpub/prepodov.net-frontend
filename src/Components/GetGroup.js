import { Button, Container, IconButton, Paper, TextField } from '@mui/material';
import { Nav } from '../Utils/Nav';
import { SideBar } from '../Utils/SideBar';
import { useParams } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import like from '../Images/like.svg';
import repost from '../Images/repost.svg';

import '../CSS/GetGroup.css';
import standartavatar from '../Images/standartavatar.jpg';

export function GetGroup(params) {

    const { id } = useParams();

    let group;

    function getGroupById(id) {

    }

    return (
        <div>
            <Nav></Nav>
            <Container style={{ display: "flex", marginTop: "20px", minHeight: "90vh" }}>
                <SideBar></SideBar>

                <main style={{ width: "100%" }}>
                    <div className='center_block' style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", height: "100px" }}>
                        <div className='left' style={{ display: "flex", alignItems: "center" }}>
                            <div className='img' style={{ width: "64px", height: "64px" }}>
                                <img src={standartavatar} width={"64px"} height={"64px"}></img>
                            </div>
                            <div className='info'>
                                <h3 className='public_name'>Типичный паблик</h3>
                                <p>100.000 подписчиков</p>
                            </div>
                        </div>

                        <div className='right'>
                            <div className='buttons'>
                                <Button>Подписаться</Button>
                                <Button>Ещё</Button>
                            </div>
                        </div>
                    </div>

                    <div className='left-right_blocks' style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>

                        <div className='blocks_left' style={{width:"70%"}}>
                            <div className='posts'>
                                <div className='posts' style={{ boxSizing: "border-box" }}>
                                    <div style={{ height: "100%", backgroundColor: "white", padding: "8px", marginBottom: "8px" }}>
                                        <h2>Ваши посты</h2>
                                    </div>
                                    {group && group.posts.map((post, index) => {
                                        return (
                                            <div className='post' key={index} style={{ height: "100%", backgroundColor: "white", padding: "8px", marginBottom: "10px" }}>
                                                <div className='creator' style={{ display: 'flex', alignItems: "center", marginBottom: "8px" }}>
                                                    <div className='left' style={{ height: "48px", width: "48px", marginRight: "5px" }}>
                                                        <img src={standartavatar} style={{ height: "48px", width: "48px", borderRadius: "100px" }}></img>
                                                    </div>

                                                    <div className='right'>
                                                        <p className='name'>{group.username}</p>
                                                        <p className='date'>{post.postedAtFormatted}</p>
                                                    </div>
                                                </div>

                                                <div className='content' style={{ marginBottom: "8px" }}>
                                                    <div className='avatar_cover' style={{ display: "flex", justifyContent: "center", width: "100%", height: "100%" }}>
                                                        <p>{post.content}</p>
                                                    </div>
                                                </div>

                                                <div className='actions' style={{ display: "flex", marginBottom: "8px" }}>
                                                    <div className='like_container item' style={{ display: "flex", alignItems: "center" }}>
                                                        <img className='like' src={like} style={{ marginRight: "4px" }}></img>
                                                        <span className='like_counter'>{post.likes}</span>
                                                    </div>
                                                    <div className='repost_container item' style={{ display: "flex", alignItems: "center" }}>
                                                        <img className='repost' src={repost}></img>
                                                        <span className='repost_counter'>{post.reposts}</span>
                                                    </div>

                                                </div>

                                                <div className='comments' style={{ display: "flex", marginBottom: "8px" }}>
                                                    <form method='post'>
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


                        <div className='blocks_right' style={{width:"20%"}}>
                            <div className='about'>
                                Этот Типичный паблик с типичными постами создан для развлечения :)
                            </div>
                        </div>
                    </div>
                </main>
            </Container >
        </div >
    )
}