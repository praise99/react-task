import React,{useState} from 'react'
import styled from 'styled-components'
import { IoIosArrowDown } from 'react-icons/io';
import {Lock,    Stroke,
    PadLock} from "../../Assets"

const Wrapper = styled.div`
    width: auto;
    font-style: normal;
    font-weight: 500;
  .question{
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    /* width:95%; */
    margin-top:20px;
    height: 62px;
    background-color: ${({ theme }) => theme.colors.Accordion};
    display: flex;
    align-items: center;
    padding:0px 30px;
    cursor: pointer;
    justify-content:space-between;
    @media(max-width: ${({ theme }) => theme.responsive.ipad}){
        padding:0px 13px;

    }
    .queDiv{
        display: flex;
        align-items: center;
    }

    .que{
      font-size: ${({ theme }) => theme.fontSize.x4};
      color: ${({ theme }) => theme.colors.dark}; 
      padding-left: 15px;
      font-weight: 500;
        line-height: 16px;
    }

    .arrow{
      transform:${props => props.isShow ? 'rotate(180deg)' : null };
      transition: all 0.3s;
      width:33.33px;

    };
    .hide{
        display: ${props => props.isShow ? 'block' : 'none'};
        font-size: 11px;
        color: #5257F5;
    }
    .show{
        display: ${props => props.isShow ? 'none' : 'block'};
        font-size: 11px;
        color: #5257F5;
    }
    .rotate{
        display: flex;
        align-items: center;

    }

    
  };
  .answer{
    border-radius: 0px 0px 10px 10px;
    /* width:95%; */
    padding:0px 30px 24px 30px;
    margin-top: -20px;
    background-color: ${({ theme }) => theme.colors.Accordion};
    display: ${props => props.isShow ? 'block' : 'none'};
    ul{
        margin-left: -10px;
    }
    li{
        display: flex;
        list-style: none;
        align-items: center;
        margin-top: -7px;
    }
    li img,.size{
        width: 12px;
        cursor: pointer;
    }
    .ansDiv{
        color: ${({ theme }) => theme.colors.dark}; 
    }
   .ans{ 
     font-size: ${({ theme }) => theme.fontSize.x4};
     color: ${({ theme }) => theme.colors.dark}; 
     font-weight: normal;
    line-height: 14px;
    opacity: 0.7;
    };
    .line{
        background-color:${({ theme }) => theme.colors.line};
        height: 1.5px;
        margin-top: -5px;
    }
    .bold{
        font-weight: 700;
        margin-left: 4px;
    }
    .info{
        display: flex;
        align-items: center;
        margin-top: 4px;
    }
  
    
  }
  
  `



const Accordion = () => {
  const [show, setShow] = useState(false)

  const toggleAccordionHandler = () => {
    setShow(!show)
  }
  return (
    <Wrapper isShow={show}>
            <div
                onClick={toggleAccordionHandler}
                className="question">
                <div className="queDiv">
                  <img src={Lock} alt="padlock"/>
                  <p className="que">Why we need your BVN</p>
                </div>
                <div className="rotate">
                    <p className="show" >show</p>
                    <p className="hide" >hide</p>
                    <IoIosArrowDown className="arrow"/>
                </div>
            </div>
            <div className="answer">
                <div className="ansDiv">
                  <h3 className="ans">We only need access to your:</h3>
                  <ul>
                      <li>
                        <img src={Stroke} alt="tick"/>
                        <h3 className="ans">Full Name</h3>
                      </li>
                      <li>
                        <img src={Stroke} alt="tick"/>
                        <h3 className="ans">Phone Number</h3>
                      </li>
                      <li>
                        <img src={Stroke} alt="tick"/>
                        <h3 className="ans">Date of Birth</h3>
                      </li>
                  </ul>
                  <div className="line"></div>
                  <div className="info">
                      <img src={PadLock} className="size" alt="padlock"/>
                      <h3 className="ans bold">Your BVN does not give us access to your bank accounts or transactions</h3>
                  </div>
                </div>
            </div>
     </Wrapper>
  )
}
export {Accordion};
