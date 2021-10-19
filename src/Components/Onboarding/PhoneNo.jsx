import React,{useState} from 'react'
import styled from 'styled-components'
import {BvnInput} from "../Global/Input"
import { Customselect } from '../Global/Select'
import {ContinueButton} from "../Global/Button"
import { Link } from "react-router-dom";
const AccountWrapper=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 34px;
    @media(max-width: ${({ theme }) => theme.responsive.ipad}){
            flex-direction: column;
            align-items: flex-start;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
    .number,.bank{
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
    .error-msg{
        font-size:13px;
        width:100%;
        color:red;
        margin-top: 4px;
    }
    .disable{
        opacity:0.5;
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
const PhoneNo = () => {
    const [acctNo,setacctNo]=useState('');
    const [acctNoError,setacctNoError]=useState('')

    const handleacctNoChange=(e)=>{
        setacctNoError("")
        setacctNo(e.target.value)
    }
    const alertUser=()=>{
        if(acctNo.length==10){

        }else{
            setacctNoError('Account Number must be up to 10 digits')
        }
        
    }
    return (
        <div>
        <AccountWrapper>
            <div className="number">
                <p>Account Number</p>
                <BvnInput type="number" name="Account Number" onChange={handleacctNoChange} value={acctNo}/>
                        {acctNoError&&<div className="error-msg">{acctNoError}</div>}
            </div>
            <div className="bank">
                <p>Select Bank</p>
                <Customselect/>
            </div>
        </AccountWrapper>
        <div className="line"></div>
                <div className="continue">
                    <Link to={acctNo.length==10 ? "/socials":"#"} onClick={alertUser}>
                        <ContinueButton className={acctNo.length!==10 ? "disable hvr-bounce-to-right":"hvr-bounce-to-right"}>Continue</ContinueButton>
                    </Link>
        </div>
        </div>
    )
}

export {PhoneNo}
