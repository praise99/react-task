import React,{useState} from 'react'
import styled from "styled-components"
import {VerifyButton} from "../Global/Button"


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
    /* Wobble Vertical */
@-webkit-keyframes hvr-wobble-vertical {
  16.65% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
  33.3% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }
  49.95% {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
  }
  66.6% {
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
  }
  83.25% {
    -webkit-transform: translateY(1px);
    transform: translateY(1px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes hvr-wobble-vertical {
  16.65% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
  33.3% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }
  49.95% {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
  }
  66.6% {
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
  }
  83.25% {
    -webkit-transform: translateY(1px);
    transform: translateY(1px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
.hvr-wobble-vertical {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.hvr-wobble-vertical:hover, .hvr-wobble-vertical:focus, .hvr-wobble-vertical:active {
  -webkit-animation-name: hvr-wobble-vertical;
  animation-name: hvr-wobble-vertical;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
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
                        <VerifyButton className={toggleState===1 ? "tabs active-tabs hvr-wobble-vertical":"tabs hvr-wobble-vertical"}  onClick={()=>toggleTab(1)}>BVN</VerifyButton>
                        <VerifyButton  className={toggleState===2 ? "personal active-tabs tabs hvr-wobble-vertical":"personal tabs hvr-wobble-vertical"} onClick={()=>toggleTab(2)}>Personal Account Number</VerifyButton>
                    </div>
                </div>
                <div className={toggleState=== 1 ? "contents active-content":"content"}>
                    <PhoneNo/>
                </div>
                <div className={toggleState=== 2 ? "contents active-content":"content"}>
                    <Bvn/>
                </div>
        </VerifyAcctWrapper>
    )
}

export  {VerifyAccount}
