import styled from "styled-components";

 export const Div = styled.div`
    width: 70vw;
    position: relative;
    left: 15vw;
    color: rgb(241, 206, 155);
    margin-top: 10vh;
    display: flex;
    transition-duration: 0.3s;
    flex-direction: row;
    border-radius: 10px;
    min-height: 80vh;
    margin-bottom: 10vh;
    overflow-x: hidden;
    
    background-color: rgb(17, 18, 18);
`

export const H1 = styled.h1`
    position: absolute;
    top: 1vh;
    font-size: 3vw;
    left: 19vw;
    margin-top:0px;
`
export const Span1 = styled.span`
    width: 100vw;
    transition: 0.3s;
    position: relative;
    margin-left: 10vw;
`

export const H3 = styled.h3`
    margin-top: 12vh;
    margin-bottom: 0vh;
    font-size: 2.5vw;
    margin-left: -25.5vw;
`
export const H4 = styled.h4`
    margin-top: 1vh;
    font-size: 1.5vw;
    position: relative;
    left: -8.9vw;
    margin-left: -28vw;
    margin-bottom: 5vh;
`
export const Form = styled.form`
    /* margin-left: -11vw; */
    position: relative;
    left: -2.6vw;
`
export const Input = styled.input`
    width: 43vw;
    font-size: 2vw;
    padding: 1vh 1vh;
    margin: 1vh;
    color: rgb(241, 206, 155);
    position: relative;
    left: -4.6vw;
    border: 0;
    border-radius: 1vw;
    border-bottom: 1px solid rgb(241, 206, 155);
    outline: none;
    background: transparent;
`
export const Button = styled.button`
    border: none;
    position: absolute;
    top: 0.5vh;
    left: 45vw;
    background-color: rgba(101, 0, 0);
    box-shadow: 0 0 20px rgba(0, 0, 0, 1);
    color: rgb(241, 206, 155);
    width: 8vw;
    font-size: 1.4vw;
    border-radius: 1vw;
    padding: 1.6vh 1vh;
    margin-left: 1vw;
    margin-bottom: 1vh;
`
export const Div2 = styled.div`
    font-size: 1.2vw;
    text-align: left;
    color: black;
`

export const Span3 = styled.span`
    font-size: 10vw;
    position: relative;
    transition: 0.3s;
    margin-top: 17vh;
    margin-left: 9vw;
    text-align: center;
    justify-self: center;
    color: white;
`
export const Button2 = styled.button`
    &:active{
        transition: 0.7ms;
        opacity: 0.3;
    }
    width: 30vw;
    border: none;
    border-radius: 5px;
    color: rgb(17, 18, 18);
    height: 7vh;
    font-size: 1.8vw;
    background-color: rgba(101, 0, 0);
`