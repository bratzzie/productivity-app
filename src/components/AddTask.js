import React from 'react'
import styled from 'styled-components'
import {Button, IconButton} from '@material-ui/core'
import {MdAdd} from 'react-icons/md'

const AddTask = () => {
    return (
       
            <Wrapper>
               <MdAdd size={26} style={{ fill: '#fff'}}/><h1>Add Task</h1>
             </Wrapper>
       
      
    )
}

export default AddTask
const Wrapper = styled.div`
background-color: #FFBD4E;
border-radius: 10px;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
padding: 5px;
h1{
    color: #fff;
    text-align: center;
    font-size: clamp(0.5rem, 4vw, 1rem);
    font-weight: 600;
}
&:active{
    background-color: #e6a335;
}
`