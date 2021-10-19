import React from 'react'
import styled from 'styled-components';

const selectContainer = styled.div`

    width: 300px;
    @media(max-width: ${({ theme }) => theme.responsive.ipad}){
    width: 90%;

    }

`



const selectWrapper = styled.select`
    height: 40px;
    width: 100%;
    border-radius: 10px;
    outline:none;
    padding-left:17px;
    font-family: ${({ theme }) => theme.fontFamily.DMsans};

    
`




const Formselect = () => {
  
  return (

    <selectContainer>
         <selectWrapper/>
    </selectContainer>

  )
}
const Customselect=styled(selectWrapper)`
        width:100%;
        height:54px;
        border: 1px solid ${({theme}) => theme.colors.whiteSmoke};
        border-radius: 12px;  
        font-style: normal;
        font-weight: 500;
        color: ${({theme}) => theme.colors.gray};
        background-color: ${({theme}) => theme.colors.white};
        padding-right: 100px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background: url('https://i.postimg.cc/BnsttTZb/arrow-drop-down.png') 96% / 8% no-repeat ${({theme}) => theme.colors.white}; 
        &::-ms-expand {
            display: none; /* Remove default arrow in Internet Explorer 10 and 11 */
          } 


`
        /* width:100%;
        height:54px;
        border: 1px solid ${({theme}) => theme.colors.whiteSmoke};
        border-radius: 12px;  
        font-style: normal;
        font-weight: 500;
        color: ${({theme}) => theme.colors.gray};
        background-color: ${({theme}) => theme.colors.white};
        padding-right: 100px; */
   

export {Formselect,Customselect}

