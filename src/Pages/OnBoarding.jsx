import React from 'react'
import styled from "styled-components"
import {SideBar} from "../Components/Global/SideBar"
import {Verify} from "../Components/Onboarding"
const OnboardWrapper=styled.div`
    display: flex;
    width: 100%;

`
const OnBoarding = () => {
    return (
        <OnboardWrapper>
            <SideBar/>
            <Verify/>
        </OnboardWrapper>
    )
}

export {OnBoarding}
