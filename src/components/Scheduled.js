import React from 'react'
import styled from 'styled-components'
import {MdNotificationsNone, MdClear} from 'react-icons/md'
import {IconButton} from '@material-ui/core'
const Scheduled = () => {
    const [isOpen, setIsOpen] = React.useState(true)
  
    return (
        <Wrapper className={isOpen ? '' : 'closed'}>
            <MdNotificationsNone size={44} style={{ fill: '#FFBD4E' }}/>
            <h4>You have <b>2 tasks</b> scheduled for today</h4>

            <IconButton color="primary" aria-label="upload picture" component="span">
                 <MdClear onClick={() => setIsOpen(false)} 
            size={20} style={{ fill: '#000', cursor: 'pointer' }}/>
            </IconButton>
           
        </Wrapper>
    )
}

export default Scheduled

const Wrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
border: 3px solid #e6dae6;
border-radius: 10px;
h4{
    font-weight: 400;
    padding-left: 15px;
}
b{
    color: #FFBD4E;
}`
