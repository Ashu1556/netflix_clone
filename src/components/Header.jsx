import React from 'react'
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Header(props) {
    const navigate = useNavigate()
  return (
    <Container className=" flex a-center j-between">
    <div className="logo">
        <img src={logo} alt="logo" />
    </div>
    <button onClick={()=> navigate(props.login ? "/login" : "/sigup")}>
        {props.login ? "Log In" : "Sign In"}
    </button>
      
    </Container>
  )
}

const Container = styled.div`
margin-top: 1rem;
display: flex;
justify-content: space-between;
.logo{
    img{
        height: 5rem;
        margin-left: 2rem;
    }   
}
button{
    
    width: 7rem;
    height: 2rem;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    border-radius: 0.2rem;
    font-size: 20px;
    font-weight: 400px;
    color: white;
    margin-right: 4rem;
}

`;
