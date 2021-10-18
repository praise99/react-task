import React from 'react'
import styled from 'styled-components'
import {BvnInput} from "../Global/Input"
import { Customselect } from '../Global/Select'
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
`
const PhoneNo = () => {
    return (
        <AccountWrapper>
            <div className="number">
                <p>Account Number</p>
                <BvnInput type="number" name="Account Number"/>
            </div>
            <div className="bank">
                <p>Select Bank</p>
                <Customselect/>
            </div>
        </AccountWrapper>
    )
}

export {PhoneNo}
