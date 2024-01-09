import styled from "@emotion/styled";
import { Box, Button, Container } from "@mui/material";
import '../CSS/SideBar.css';


export function SideBar(params) {
    return(
        <nav style={{display:"inline-block", marginRight:"15px"}}>
            <div style={{minWidth:"150px"}}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <Button className="button" href="/profile" variant="contained" disableElevation>
                        Профиль
                    </Button>
                    <Button className="button" href="/messages" variant="contained" disableElevation>
                        Сообщения
                    </Button>
                    <Button className="button" href="/friends" variant="contained" disableElevation>
                        Друзья
                    </Button>
                    <Button className="button" href="/groups" variant="contained" disableElevation>
                        Группы
                    </Button>
                </div>
            </div>
        </nav>
    )
    
}
