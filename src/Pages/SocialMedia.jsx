import React from 'react'
import styled from "styled-components"
import {SideBar} from "../Components/Global/SideBar"
import {SocialHandle} from "../Components/SocialHandles"
const SocialWrapper=styled.div`
    display: flex;
    width: 100%;
`
const Social = () => {
    return (
        <SocialWrapper>
            <SideBar/>
            <SocialHandle/>
        </SocialWrapper>
    )
}

export {Social}