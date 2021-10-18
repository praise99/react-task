import React from 'react'
import styled from "styled-components"
import {SideBar} from "../Components/Global/SideBar"
import {BusinessCategory} from "../Components/Business"
const BusinessWrapper=styled.div`
    display: flex;
    width: 100%;
`
const Business = () => {
    return (
        <BusinessWrapper>
            <SideBar/>
            <BusinessCategory/>
        </BusinessWrapper>
    )
}

export {Business}