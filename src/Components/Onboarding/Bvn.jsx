import React,{useState} from 'react'
import {BvnInput} from "../Global/Input"
import {Accordion} from "../Global/Accordion"
import styled from "styled-components"
import {ContinueButton} from "../Global/Button"
import { Link } from "react-router-dom";
const BVNWrapper=styled.div`
    margin-top: 44px;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
    .verification{
        font-size: ${({ theme }) => theme.fontSize.x4};
        line-height: 22px;
        color:  ${({ theme }) => theme.colors.dark};
    }
    .error-msg{
        font-size:13px;
        width:100%;
        color:red;
        margin-top: 4px;
    }
    .disable{
        opacity:0.7;
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
const Bvn = () => {
    const [bvn,setbvn]=useState('');
    const [bvnError,setbvnError]=useState('')

    const handleBvnChange=(e)=>{
        setbvnError("")
        setbvn(e.target.value)
    }
    const alertUser=()=>{
        if(bvn.length==11){

        }else{
            setbvnError('BVN must be up to 11 digits')
        }
        
    }
    return (
        <BVNWrapper className="verification">
            <p>Bank Verification Number (11-digits)</p>
            <BvnInput type="number" name="Bank Verification Number" onChange={handleBvnChange} value={bvn}/>
                        {bvnError&&<div className="error-msg">{bvnError}</div>}
            <Accordion/>
            <div className="line"></div>
            <div className="continue">
                <Link to={bvn.length==11 ? "/socials":"#"} onClick={alertUser}>
                    <ContinueButton className={bvn.length!==11 ? "disable hvr-bounce-to-right":"hvr-bounce-to-right"}>Continue</ContinueButton>
                </Link>
            </div>
        </BVNWrapper>
    )
}

export {Bvn}
