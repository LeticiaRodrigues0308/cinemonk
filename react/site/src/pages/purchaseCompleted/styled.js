import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    background-image: url('/assets/images/fundo-cinema.svg');
    background-position: 20% 100%;
    background-size: cover;

    height: 100%;

    padding: 4.4em 3em 13em 4em;

    user-select: none;

    .ticket-hover {
        transition: all ease-in-out .25s;
    }
     
    .ticket-hover:hover {
        transform: translateY(-1em);
    }

    .subtitulo {
        color: #E1E1E1;
        font-size: 2em;
        line-height: 1.2em;
    }

    .box-ticket {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;

        margin-top: 3em;
        margin-right: 6em;
    }

    .btn-menu {
        align-self: flex-end;

        font-family: Roboto;
        color: #767676;
        font-size: 2.5em;

        width: 160px;
        height: 160px;

        margin-top: -2em;
        
        border-radius: 100%;

        background-color: radial-gradient(50% 50% at 50% 50%, #F4F4F4 0%, #C1C1C1 100%);

        cursor: pointer;
    }

    .btn-menu:hover {
        background-color: #bababa;
        transition-duration: 0.5s;
    }

    @media(min-width: 1900px) {
        height: 100vh;
`

export { Container }