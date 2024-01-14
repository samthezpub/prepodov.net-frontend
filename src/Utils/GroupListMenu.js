import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import menu from "../Images/menu.png";


export function GroupListMenu(props) {
    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <img className="menu_image" src={menu} style={{cursor:"pointer"}} width={"32px"} height={"32px"} {...bindTrigger(popupState)} />
                    <Menu {...bindMenu(popupState)} >
                        <div style={{ width: "200px", height: "100px" }}>
                            <MenuItem onClick={popupState.close}>Отписаться</MenuItem>
                            <MenuItem onClick={popupState.close}>My account</MenuItem>
                            <MenuItem onClick={popupState.close}>Logout</MenuItem>
                        </div>
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}