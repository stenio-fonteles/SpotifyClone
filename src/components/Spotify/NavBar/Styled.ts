import styled from "styled-components";

export const Grid = styled.div`
    width:100%;
    height: 15vh;
    display:flex;
    justify-content: space-between;
    background-color: black;
    color: white;
    font-size: 0.8rem;
    align-items: center;
    h3:hover {
        color: #32cd32 ;
    }
`
export const Svg = styled.img`
    width:20%;
    height: 10vh;
`   
export const GridMenu = styled.div `
    width: 50%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    cursor: pointer;

`

export const GridMenuUser = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    cursor: pointer;

`
