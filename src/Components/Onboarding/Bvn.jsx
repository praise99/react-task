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
            setbvnError('BVN must be equal to 11 digits')
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
                    <ContinueButton className={bvn.length!==11 ? "disable":""}>Continue</ContinueButton>
                </Link>
            </div>
        </BVNWrapper>
    )
}

export {Bvn}
