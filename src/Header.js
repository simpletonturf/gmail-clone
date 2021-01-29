import React from 'react'
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, IconButton } from '@material-ui/core';
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";



function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <img src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2775&q=80"></img>
                <p className="mail">R-Mail</p>
                
            </div>

            <div className="header__middle">
                <SearchIcon/>
                <input className="headmid__input" placeholder="Search Mail..." type="text"/>
                <ArrowDropDownIcon className="header__inputCaret"/>
               
            </div>

            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <Avatar />
                </IconButton>
                

            </div>
            
        </div>
    )
}

export default Header
