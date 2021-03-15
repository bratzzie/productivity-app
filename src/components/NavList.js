import React from 'react'
import Task from './Task'
import styled from 'styled-components'

const NavList = () => {
    return (
        <Section>
            <Task task="Feed my cat"/>
            <Task task="Feed my dog"/>
            <Task task="Feed myself"/>
            <Task task="Make pizza"/>
        </Section>
    )
}

export default NavList
const Section= styled.section``