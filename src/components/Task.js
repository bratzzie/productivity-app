import React from 'react'
import styled from 'styled-components'
import {MdLocalDining} from 'react-icons/md'

const Task = ({task}) => {
    return (
        <Wrapper>
            <Left>
            <MdLocalDining size={24} style={{ fill: '#fff', margin: 15 }}/>
            </Left>
            <Right>
                <h1>{task}</h1>
            </Right>
        </Wrapper>
    )
}

export default Task

const Wrapper = styled.div`
display: flex;
flex-direction: row;

background-color: #C79DCD;
margin: 20px 10px;
border-radius: 10px;`
const Left = styled.div`
 background:rgba(0,0,0,0.2);

 border-top-left-radius: 10px;
 border-bottom-left-radius: 10px;
`
const Right = styled.div`
h1{
    font-weight: 400;
    color: #fff;
    font-size: clamp(0.5rem, 4vw, 1rem);
    padding-left: 15px;
}`