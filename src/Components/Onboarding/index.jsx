import React,{useState} from 'react'
import styled from "styled-components"
import {LogOutButton} from "../Global/Button"
import {VerifyAccount} from "./VerifyAccount"
const Wrapper=styled.div`
    width:66%;
    padding:35px 60px;
    @media(max-width: ${({ theme }) => theme.responsive.ipad}){
        width:100%;
        padding:35px 22px;
    }
    .logout{
        float: right;
    }
    .box{
        width: 31px;
        height: 31px;
        display: flex;
        font-family: ${({ theme }) => theme.fontFamily.DMsans};
        justify-content: center;
        align-items: center;
        background: ${({ theme }) => theme.colors.whitesmoke};
        border-radius: 3.1px;
        border:1px solid ${({ theme }) => theme.colors.whitesmoke} ;
        font-weight: 500;
        font-size: 13.64px;
        color: ${({ theme }) => theme.colors.gray};
    }
    .section{
        display: flex;
        align-items: center;
        margin-right: 40px;
        @media(min-width: ${({ theme }) => theme.responsive.ipad}) and (max-width: ${({ theme }) => theme.responsive.laptop}){
            margin-right: 10px;
        }
    }
    .tabs{
        cursor: pointer;
    }
    h3{
        color: ${({ theme }) => theme.colors.gray};
        font-style: normal;
        font-weight: 500;
        font-size: ${({ theme }) => theme.fontSize.x2};
        line-height: 23px;
        padding-left: 12px;
    }
    .groupedSection{
        padding-top: 69px;
        display: flex;
        align-items: center;
        @media(min-width: ${({ theme }) => theme.responsive.ipad}) and (max-width: ${({ theme }) => theme.responsive.laptop}){
            width:100%;
        }
    }
    .line{
        background-color:${({ theme }) => theme.colors.grey};
        height: 1px;
    }
    .active{
        background-color: ${({ theme }) => theme.colors.blue};
        color: ${({ theme }) => theme.colors.white};
    }
    .activeText{
        color: ${({ theme }) => theme.colors.dark};
    }
    @media(max-width: ${({ theme }) => theme.responsive.ipad}){
        .none{
            display: none;
        }
    }

`

const Verify = () => {

    return (
        <Wrapper>
            <div className="logout">
                <LogOutButton>Logout</LogOutButton>
            </div>
            <div className="groupedSection">
                <div className="section tabs">
                    <div className="box active">1</div>
                    <h3 className="activeText none">Verify Account</h3>
                </div>
                <div className="section tabs none">
                    <div className="box">2</div>
                    <h3>Social Handles</h3>
                </div>
                <div className="section tabs none">
                    <div className="box">3</div>
                    <h3>Business Category</h3>
                </div>
            </div>
            <div className="line none"></div>
            <div>
                <div><VerifyAccount/></div>
            </div>
        </Wrapper>
    )
}

export {Verify}
