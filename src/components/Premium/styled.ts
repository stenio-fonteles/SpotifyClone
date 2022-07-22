import styled from "styled-components";

export const Section = styled.div`
    height: 60vh;
    background-color: #FFD4DB;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-evenly;
    h1{
        font-weight:900;
        
    }
    h2{
        margin-top: 5%;
        font-weight:100;
        
    }
`

export const Div = styled.div`
    margin-left: 10%;


`

export const Buttons = styled.div`
    display: flex;
    
    margin-top: 5%;
    button:first-child {
        background-color: black;
        color: white;
    }
    button{
        cursor: pointer;
        margin-left: 5%;
        border: none;
        padding:25px 50px;
        border-radius: 40%;
        font-weight: bold;
    }

`