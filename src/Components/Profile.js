import { Container } from '@mui/material';
import {Nav} from '../Utils/Nav';
import { SideBar } from '../Utils/SideBar';
import { PageBlock } from '../Utils/PageBlock';
import '../CSS/CustomContainer.css';
import defaultAvatar from '../Images/standartavatar.jpg'

export function Profile(params) {
    return (
        <div>
            <Nav></Nav>
            
            <div className='custom-container' style={{backgroundColor:"white", paddingTop:"20px"}}>
                <SideBar></SideBar>
                <div style={{display:"flex", height:"90vh",width:"50%", backgroundColor:"grey", padding:"15px"}}>
                    <div className='content' style={{display:"flex", width:"100%", height:"100%"}}>
                        <div className='avatar_cover' style={{display:'flex', alignItems:"center", justifyContent:"center" , backgroundColor:"whitesmoke", maxWidth:"260px", height:"243px", marginRight:"10px"}}>
                            <img style={{width:"90%", height:"90%"}} src={defaultAvatar}></img>
                        </div>

                        <div className='main-block' style={{width:"70%"}}>
                            <div className='about' style={{backgroundColor:"white", padding:"1px"}}>
                                <div className='nameandstatus' style={{display:'flex', justifyContent:"space-between", padding:"0px 15px"}}>
                                    <div className='name'>
                                        <p>Vasya Vasev</p>
                                    </div>
                                    <div className='status'>
                                        <p>Online</p>
                                    </div>
                                </div>

                                <hr></hr>

                                <div className='personal-info' style={{display:'flex', justifyContent:"space-between" ,padding:"0px 15px"}}>
                                    <div className='titles'>
                                        <p>Дата рождения</p>
                                        <p>Город</p>
                                        <p>Образование</p>
                                    </div>

                                    <div className='values'>
                                        <p>30.05.2003</p>
                                        <p>Москва</p>
                                        <p>РУТ МИИТ</p>
                                    </div>
                                </div>

                                <hr></hr>

                                <div className='counters' style={{display:'flex', justifyContent:"center", textAlign:"center"}}>
                                    <div className='item'>
                                        <p>4</p>
                                        <p>Друзей</p>
                                    </div>
                                    <div className='item'>
                                        <p>2</p>
                                        <p>Фотографий</p>
                                    </div>
                                    <div className='item'>
                                        <p>2</p>
                                        <p>Поста</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}