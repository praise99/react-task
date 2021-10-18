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
                            <VerifyButton className={toggleState===1 ? "tabs active-tabs":"tabs"}  onClick={()=>toggleTab(1)}>Yes</VerifyButton>
                            <VerifyButton  className={toggleState===2 ? "tabs active-tabs personal":"tabs personal"}  onClick={()=>toggleTab(2)}>No</VerifyButton>
                    </div>
                </div>
                <div className="line"></div>
                <div className="continue">
                    <Link to="/">
                        <ContinueButton>Complete</ContinueButton>
                    </Link>
                </div>      
        </BuisnessWrapper>
    )
}

export {Buisness}
