import React from 'react'
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
    .hvr-shutter-out-horizontal {
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  background-color: ${({ theme }) => theme.colors.blue};
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.hvr-shutter-out-horizontal:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.whitesmoke};
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: 50%;
  transform-origin: 50%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-shutter-out-horizontal:hover, .hvr-shutter-out-horizontal:focus, .hvr-shutter-out-horizontal:active {
  color: ${({ theme }) => theme.colors.dark};
}
.hvr-shutter-out-horizontal:hover:before, .hvr-shutter-out-horizontal:focus:before, .hvr-shutter-out-horizontal:active:before {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
.hvr-bounce-to-right {
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
}
.hvr-bounce-to-right:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.whitesmoke};
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: 0 50%;
  transform-origin: 0 50%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-bounce-to-right:hover, .hvr-bounce-to-right:focus, .hvr-bounce-to-right:active {
    color:${({ theme }) => theme.colors.dark};
}
.hvr-bounce-to-right:hover:before, .hvr-bounce-to-right:focus:before, .hvr-bounce-to-right:active:before {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
  -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
}

`

const BusinessCategory= () => {

    return (
        <Wrapper>
            <div className="logout">
                <LogOutButton className="hvr-bounce-to-right">Logout</LogOutButton>
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
                    <div className="box active hvr-shutter-out-horizontal">3</div>
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
