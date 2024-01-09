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
            
            <div className='custom-container' style={{backgroundColor:"#E9EBF1", paddingTop:"20px"}}>
                <SideBar></SideBar>
                <div style={{display:"flex", height:"90vh",width:"50%", backgroundColor:"grey", padding:"15px"}}>
                    <div className='content' style={{width:"100%", height:"100%"}}>
                        <div className='avatar_cover' style={{display:'flex', alignItems:"center", justifyContent:"center" , backgroundColor:"whitesmoke", maxWidth:"260px", height:"30%"}}>
                            <img style={{width:"90%", height:"90%"}} src={defaultAvatar}></img>
                        </div>

                        <div className='main-block'>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}