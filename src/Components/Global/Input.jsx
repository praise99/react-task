import React from 'react'
import styled from 'styled-components';


const InputContainer = styled.div`

    width: 300px;
    @media(max-width: ${({ theme }) => theme.responsive.ipad}){
    width: 90%;

    }

`



const InputWrapper = styled.input`
    height: 40px;
    width: 100%;
    border-radius: 10px;
    outline:none;
    padding-left:17px;
    font-family: ${({ theme }) => theme.fontFamily.DMsans};

    
`




const FormInput = ({ type, name, placeholder }) => {
  
  return (

    <InputContainer>
         <InputWrapper type={type} name={name} placeholder={placeholder}/>
    </InputContainer>

  )
}
const BvnInput=styled(InputWrapper)`
  height:54px;
  width:-webkit-fill-available;
  border: 1px solid ${({theme}) => theme.colors.whiteSmoke};
  border-radius: 12px;  
  font-style: normal;
  font-weight: 500;
  font-size: ${({theme}) => theme.fontSize.xs3};
  color: ${({theme}) => theme.colors.dark};
  background-color: ${({theme}) => theme.colors.white};


`
   

export {FormInput,BvnInput}

