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
            setacctNoError('Account Number must be equal to 10 digits')
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
                        <ContinueButton className={acctNo.length!==10 ? "disable":""}>Continue</ContinueButton>
                    </Link>
        </div>
        </div>
    )
}

export {PhoneNo}
