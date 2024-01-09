import { Container } from '@mui/material';
import {Nav} from '../Utils/Nav';
import {SideBar} from '../Utils/SideBar';

export function Main(params) {
    return (
        <div>
            
            <Nav></Nav>
            <Container>
                <SideBar></SideBar>
                Main
            </Container>

        </div>
    )
}