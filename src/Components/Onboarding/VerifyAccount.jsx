import React,{useState} from 'react'
import styled from "styled-components"
import {VerifyButton} from "../Global/Button"
import {ContinueButton} from "../Global/Button"
import { Link } from "react-router-dom";

import {Bvn} from "./Bvn"
import { PhoneNo } from './PhoneNo'
const VerifyAcctWrapper=styled.div`
    margin-top: 40px;
    font-family: ${({ theme }) => theme.fontFamily.DMsans};
    font-style: normal;
    font-weight: normal;
    .step{
        font-size: ${({ theme }) => theme.fontSize.x3};
        line-height: 17px;
        color: ${({ theme }) => theme.colors.gray};
    }
    .verify{
        font-weight: 700;
        font-size: 26px;
        line-height: 34px;
        color: ${({ theme }) => theme.colors.dark};
        
    }
    .buttons{
        display: flex;
    }
    .personal{
        margin-left: 21px;
    }
    .active-contents {
        display: block;
    }
    .continue{
        float: right;
    }
    .active-tabs{
        background:  ${({ theme }) => theme.colors.greyWhite};
        border: 1px solid ${({ theme }) => theme.colors.darkBlue};
    }

    .contents {
        display: none;
    }
    .verification{
        font-size: ${({ theme }) => theme.fontSize.x4};
        line-height: 22px;
        color:  ${({ theme }) => theme.colors.dark};
    }
    .line{
        background-color:${({ theme }) => theme.colors.grey};
        height: 1px;
        margin:48px 0px 13px 0px;
    }
`
const VerifyAccount = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
    return (
        <VerifyAcctWrapper>
                <div>
                    <p className="step">Step 1/3</p>
                    <h2 className="verify">Verify Account</h2>
                </div>
                <div>
                    <p className="verification">Select a verification method</p>
                    <div className="buttons">
                        <VerifyButton className={toggleState===1 ? "tabs active-tabs":"tabs"}  onClick={()=>toggleTab(1)}>BVN</VerifyButton>
                        <VerifyButton  className={toggleState===2 ? "personal active-tabs tabs":"personal tabs"} onClick={()=>toggleTab(2)}>Personal Account Number</VerifyButton>
                    </div>
                </div>
                <div className={toggleState=== 1 ? "contents active-content":"content"}>
                    <PhoneNo/>
                </div>
                <div className={toggleState=== 2 ? "contents active-content":"content"}>
                    <Bvn/>
                </div>
                <div className="line"></div>
                <div className="continue">
                    <Link to="/socials">
                        <ContinueButton>Continue</ContinueButton>
                    </Link>
                </div>
        </VerifyAcctWrapper>
    )
}

export  {VerifyAccount}
