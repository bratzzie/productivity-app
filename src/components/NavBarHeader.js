import { Avatar } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

Date.prototype.getWeekDay = function() {
    return weekday[this.getDay()];
}
const NavBarHeader = () => {
    return (
        <Container>
            <Avatar />
            <h2>Happy {weekday[new Date().getDay()]}, <br/><b>John!</b></h2>
        </Container>
    )
}

export default NavBarHeader
const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
padding: 0;
margin: 0;
h2{
    font-size: clamp(0.5rem, 4vw, 1rem);
    padding-left: 20px;
    font-weight: 500;

}`