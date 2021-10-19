import React,{useState} from 'react'
import styled from 'styled-components'
import { Customselect } from '../Global/Select'
import { VerifyButton } from '../Global/Button'
import { ContinueButton} from '../Global/Button'
import { Link } from "react-router-dom";
const BuisnessWrapper=styled.div`
    margin-top: 40px;
    font-family: ${({ theme }) => theme.fontFamily.DMsans};
    font-style: normal;
    font-weight: normal;
    .step{
        font-size: ${({ theme }) => theme.fontSize.xs3};
        line-height: 17px;
        color: ${({ theme }) => theme.colors.gray};
    }
    .verify{
        font-weight: 700;
        font-size: 26px;
        line-height: 4px;
        color: ${({ theme }) => theme.colors.dark};
    }
    .handle{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 24px;
        @media(max-width: ${({ theme }) => theme.responsive.ipad}){
            flex-direction: column;
            align-items: flex-start;
        }
    }
    .numberh,.bank{
        width: 45%;
        @media(max-width: ${({ theme }) => theme.responsive.ipad}){
            width: 100%;
        }
    }
    p{
        font-weight: 500;
        font-size: ${({theme}) => theme.fontSize.x4};
        line-height: 22px;
        color: ${({theme}) => theme.colors.dark};
    }
    .buttons{
        display: flex;
    }
    .personal{
        margin-left: 21px;
    }
    .pos{
        margin-top: 26px;
    }
    .active-tabs{
        background:  ${({ theme }) => theme.colors.greyWhite};
        border: 1px solid ${({ theme }) => theme.colors.darkBlue};
    }
    .continue{
        float: right;
    }
    .line{
        background-color:${({ theme }) => theme.colors.grey};
        height: 1px;
        margin:48px 0px 13px 0px;
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
const Buisness = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
    return (
        <BuisnessWrapper>
                <div>
                    <p className="step">Step 3/3</p>
                    <h2 className="verify">Business Category</h2>
                </div> 
                <div className="handle">
                    <div className="numberh">
                        <p>Type of your business</p>
                        <Customselect/>
                    </div>
                    <div className="bank">
                        <p>Business Category</p>
                        <Customselect/>
                    </div>
                </div>
                <div className="pos">
                    <p>Do you use POS machines for your business?</p>
                    <div className="buttons">
                            <VerifyButton className={toggleState===1 ? "tabs active-tabs hvr-wobble-vertical":"tabs hvr-wobble-vertical"}  onClick={()=>toggleTab(1)}>Yes</VerifyButton>
                            <VerifyButton  className={toggleState===2 ? "tabs active-tabs personal hvr-wobble-vertical":"tabs personal hvr-wobble-vertical"}  onClick={()=>toggleTab(2)}>No</VerifyButton>
                    </div>
                </div>
                <div className="line"></div>
                <div className="continue">
                    <Link to="/">
                        <ContinueButton className="hvr-bounce-to-right">Complete</ContinueButton>
                    </Link>
                </div>      
        </BuisnessWrapper>
    )
}

export {Buisness}
