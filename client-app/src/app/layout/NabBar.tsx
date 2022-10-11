
import { Button, Container, Menu,Image, Dropdown, DropdownMenu } from "semantic-ui-react";
import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import { useStore } from "../stores/stores";
import { observer } from "mobx-react-lite";


export default observer (function NavBar(){
    const {userStore: {user,logout}} = useStore();
    return(
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink}to='/' header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight:'10px'}}/>
                </Menu.Item>
                <Menu.Item as={NavLink} to='/activities' name='Activities'/>
                <Menu.Item as={NavLink} to='/errors' name='Errors'/>
                <Menu.Item>
                    <Button as={NavLink} to='/createActivity' positive content='Create Activity'/>
                </Menu.Item>
                <Menu.Item position="right">
                    <Image src={ '/assets/user.png'} avatar spaced='right'/>
                    <Dropdown pointing='top left' >
                        <DropdownMenu>
                            <Dropdown.Item as={Link}  text='My Prfoile' icon='user' />
                            <Dropdown.Item onClick={logout} text='logout' icon='power'/>
                        </DropdownMenu>                   
                    </Dropdown>
                </Menu.Item>
            </Container>
        </Menu>
    )
})