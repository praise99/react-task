import React,{useState} from 'react'
import styled from "styled-components"
import {LogOutButton} from "../Global/Button"
import {Buisness} from "./Buisness"
import { Stroke } from '../../Assets'
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
    .marked{
        background-color: ${({ theme }) => theme.colors.greyWhite};
        border: 1px solid ${({ theme }) => theme.colors.greyWhite};
    }
    .img{
        width: 16px;
    }
    @media(max-width: ${({ theme }) => theme.responsive.ipad}){
        .none{
            display: none;
        }
    }

`

const BusinessCategory= () => {

    return (
        <Wrapper>
            <div className="logout">
                <LogOutButton>Logout</LogOutButton>
            </div>
            <div className="groupedSection">
                <div className="section tabs none">
                    <div className="box">
                        <div className="box marked">
                            <img src={Stroke} alt="stroke" class="img"/>
                        </div>
                    </div>
                    <h3>Verify Account</h3>
                </div>
                <div className="section tabs none">
                    <div className="box">
                        <div className="box marked">
                            <img src={Stroke} alt="stroke" class="img"/>
                        </div>
                    </div>
                    <h3>Social Handles</h3>
                </div>
                <div className="section tabs">
                    <div className="box active">3</div>
                    <h3 className="activeText  none">Business Category</h3>
                </div>
            </div>
            <div className="line none"></div>
            <div>
                <div><Buisness/></div>
            </div>
        </Wrapper>
    )
}

export {BusinessCategory}
