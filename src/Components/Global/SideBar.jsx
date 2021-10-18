import React from 'react'
import styled from "styled-components"
import {Logo} from "../../Assets"
const Wrapper=styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    height: 900px;
    width: 34%;
    padding-top: 50px;
    background-color:${({ theme }) => theme.colors.secondary};
    img{
        width: 100%;
    }
    @media(max-width: ${({ theme }) => theme.responsive.ipad}){
        display: none;
    }

`
const SideBar = () => {
    return (
        <Wrapper>
            <img src={Logo} alt="logo"/>
        </Wrapper>
    )
}

export {SideBar}
