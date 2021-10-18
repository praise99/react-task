import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
`
const BaseButton = styled.button`
  border: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fontFamily.DMsans};
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: 22px;
  text-align: center;
  height: 60px;
  width:90%;
  letter-spacing: 0.75px;
  transition: background 250ms ease-in;
  overflow: hidden;
  
`;
const CustomButton = ({onClick,children, ...rest }) => {
  return(
    <Wrapper>
      <BaseButton type="submit" onClick={onClick} {...rest}>{children}</BaseButton>
    </Wrapper>
  )
};



const LogOutButton = styled(CustomButton)`
    width:107px;
    height:50px;
    background-color:${({ theme }) => theme.colors.red} ;
    color: ${({ theme }) => theme.colors.white};
`;
const ContinueButton = styled(CustomButton)`
    width:125px;
    height:50px;
    background-color:${({ theme }) => theme.colors.darkBlue} ;
    color: ${({ theme }) => theme.colors.white};
`;
const VerifyButton = styled(CustomButton)`
    padding: 4px 19px 5px;
    color:  ${({ theme }) => theme.colors.dark};
    width:auto;
    height:41px;
    border: 1px solid rgba(20, 23, 55, 0.1);
    background: ${({ theme }) => theme.colors.dirtyWhite};
    @media(max-width: 375px){
      padding: 4px 10px 5px;
      font-size: 10px;

    }
`;
const SocialButton = styled(CustomButton)`
    width:217px;
    height:50px;
    background-color:${({ theme }) => theme.colors.darkBlue} ;
    color: ${({ theme }) => theme.colors.white};
`;

export { CustomButton,LogOutButton,VerifyButton,ContinueButton,SocialButton};
