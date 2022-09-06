import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import { useStore } from "../stores/stores";



export default function NavBar(){
    const {activityStore} = useStore();
    return(
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item head='true'>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight:10}}/>
                </Menu.Item>
                <Menu.Item name='Activities'/>
                <Menu.Item>
                    <Button onClick={()=>activityStore.openForm()} positive content='Create Activity'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}