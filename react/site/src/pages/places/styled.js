import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("./assets/images/fundo-cinema.svg");
    padding: 0px 0px 200px;

    .cabecalho{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin: 63px 0px 87px;
    }

    .marca{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .marca img{
        width: 91px;
        height: 91px;
        margin: 0px 30px;
    }

    .titulo{
        font-size: 64px;
        color: #F0A124;
    }

    .tit{
        font-size: 48px;
        color: white;
        margin: 0px 130px;
    }

    .box{
        display: flex;
        align-items: center;
        justify-content: center;
        
        width: 1062px;
        height: 533px;

        background: rgba(198, 198, 198, 0.9);
        box-shadow: 2px -2px 3px 2px rgba(11, 0, 0, 0.25), inset 0px 0px 8px 2px rgba(0, 0, 0, 0.25);
        border-radius: 16px 16px 16px 0px;
    }

    .box1{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .box2{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .fil1{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .fil1:nth-child(8){
        margin: 44px 0px 0px 0px;
    }

    .botao{
        padding-left: 65em;
        font-weight: bold;    

    }

    .botao button{ 
        position: absolute;
        width: 146px;
        height: 146px;
        font-size: 32px;
        text-align: center;
        border-radius: 50%;
        border: none;
        background: radial-gradient(50% 50% at 50% 50%, #F4F4F4 0%, #C1C1C1 100%);

    }

`;



const Fileira = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .assento :nth-child(5){
        visibility: hidden;
    }

    .assento :nth-child(11){
        visibility: hidden;
    }

    .assento2 :nth-child(4){
        visibility: hidden;
    }

    .assento2 :nth-child(10){
        visibility: hidden;
    }

    .assento3 :nth-child(4){
        visibility: hidden;
    }

    .assento3 :nth-child(12){
        visibility: hidden;
    }

    .assento, .assento2, .assento3{
        display: flex;
        flex-direction: row;
    }
`;

export { Container, Fileira };