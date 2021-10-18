import React,{useState} from 'react'
import styled from "styled-components"
import {BvnInput} from "../Global/Input"
import {SocialButton} from "../Global/Button"
import { Link } from "react-router-dom";
const SocialWrapper=styled.div`
    margin-top: 40px;
    font-family: ${({ theme }) => theme.fontFamily.DMsans};
    font-style: normal;
    font-weight: normal;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    .number{
        width: 45%;
        margin-top: 44px;
        @media(max-width: ${({ theme }) => theme.responsive.ipad}){
            width: 100%;
        }
    }
    .step{
        font-size: ${({ theme }) => theme.fontSize.xs3};
        line-height: 17px;
        color: ${({ theme }) => theme.colors.gray};
    }
    .enter{
        font-size: ${({ theme }) => theme.fontSize.x3};
    }
    p{
        font-weight: 500;
        font-size: ${({theme}) => theme.fontSize.x4};
        line-height: 22px;
        color: ${({theme}) => theme.colors.dark};
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
    .continue{
        float: right;
    }
    .line{
        background-color:${({ theme }) => theme.colors.grey};
        height: 1px;
        margin:48px 0px 13px 0px;
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
const SocialMedia = () => {
    const [instagram,setInstagram]=useState('');
    const [instaError,setInstaError]=useState('')

    const [abegTag,setAbegTag]=useState('');
    const [abegTagError,setAbegTagError]=useState('');

    const [twitter,settwitterTag]=useState('');
    const [twitterError,settwitterError]=useState('');

    const handleAbegChange=(e)=>{
        setAbegTagError("")
        setAbegTag(e.target.value)
    }
    const handleInstaChange=(e)=>{
        setInstaError('')
        setInstagram(e.target.value)
    }
    const handleTwitterChange=(e)=>{
        settwitterError('')
        settwitterTag(e.target.value)
    }


    const alertUser=()=>{
        if(instagram!==''){

        }else{
            setInstaError('Instagram handle required')
        }
        if(abegTag!==''){

        }else{
            setAbegTagError('Abeg Tag required')
        }
        if(twitter!==''){

        }else{
            settwitterError('Twitter handle required')
        }
    }
    return (
        <SocialWrapper>
                <div>
                    <p className="step">Step 2/3</p>
                    <h2 className="verify">Social Handles</h2>
                    <p className="step enter">Enter your business social media handles</p>
                </div>
                <div className="number">
                    <p>Choose your Abeg Tag (required)</p>
                    <BvnInput type="text" name="Abeg Tag" placeholder="@" onChange={handleAbegChange} value={abegTag} />
                    {abegTagError&&<div className="error-msg">{abegTagError}</div>}
                </div>
                <div className="handle">
                    <div className="numberh">
                        <p>Instagram</p>
                        <BvnInput type="text" name="Instagram" placeholder="@" onChange={handleInstaChange} value={instagram}/>
                        {instaError&&<div className="error-msg">{instaError}</div>}
                    </div>
                    <div className="bank">
                        <p>Twitter</p>
                        <BvnInput type="text" name="Twitter" placeholder="@" onChange={handleTwitterChange} value={twitter}/>
                        {twitterError&&<div className="error-msg">{twitterError}</div>}
                    </div>
                </div>
                <div className="line"></div>

                <div className="continue">
                    <Link to={instagram!==''&& abegTag!=='' && twitter!=='' ? "/business":"#"} onClick={alertUser} >
                        <SocialButton className={instagram==''&& abegTag=='' && twitter=='' ? "disable":""} >Confirm Social Handles</SocialButton>
                    </Link>
                </div>
        </SocialWrapper>
        // </form>
    )
}

export {SocialMedia}
