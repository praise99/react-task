import React from 'react'
import {BvnInput} from "../Global/Input"
import {Accordion} from "../Global/Accordion"
import styled from "styled-components"
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
`
const Bvn = () => {
    return (
        <BVNWrapper className="verification">
            <p>Bank Verification Number (11-digits)</p>
            <BvnInput type="number" name="Bank Verification Number"/>
            <Accordion/>
        </BVNWrapper>
    )
}

export {Bvn}
