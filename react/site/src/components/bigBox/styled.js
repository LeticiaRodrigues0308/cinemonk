import styled from "styled-components";

const Bigbox = styled.div`
    display: flex;
    flex-direction: column ;
    background-color: #AA0A0A;
    cursor: pointer;
    width: auto;
    height: auto;
    border-radius: 16px 16px 16px 16px;
    box-shadow: 2px -2px 3px 2px rgba(11, 0, 0, 0.25);
    margin: 1em 1em 1em 1em;
    padding: 0.5em 0.5em 1em 0.5em;
    transition: all 0.4s;

    &:hover {
        -webkit-filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
        filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
    }
    img{
        width: 250px;
        height: 400px;
        border-radius: 16px 0px 0px 0px;
        padding: 5px 0px 0px 3px;
        cursor: pointer;
    }
    .box-texto {
    margin: 2.5em 0em 0em 1.3em;
    cursor: pointer;
    }
    .nome {
    font-size: 26px;
    color: #FFCA76;
    width: 206px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    line-height: 130.1%;
    cursor: pointer;
    }
    .box-idioma {
        font-size: 20px;
        line-height: 130.1%;
        color: white;
        margin-top: 1em;
        cursor: pointer;
    }

    @media(max-width: 1024px) {
        width: 215px;
        height: 108px;
        border-radius: 10px 10px 0px 0px;

        img{
            width: 75px;
            height: 105px;
            border-radius: 10px 0px 0px 0px;
            padding: 2px 0px 0px 0px;
        }
        .box-texto {
            margin: 1.5em 0em 0em 1em;
            cursor: pointer;
        }
        .nome {
            font-size: 15px;
            width: 120px;
            line-height: 110.1%;
        }
        .box-idioma {
            font-size: 10px;
            line-height: 110.1%;
            color: white;
            margin-top: 1em;
            cursor: pointer;
        }
    }

    @media(max-width: 1280px) {
        width: 230px;
        height: 115px;
        border-radius: 12px 12px 0px 0px;

        img{
            width: 80px;
            height: 110px;
            border-radius: 10px 0px 0px 0px;
            padding: 2px 0px 0px 0px;
        }
        .box-texto {
            margin: 1em 0em 0em .7em;
        }
        .nome {
            font-size: 16px;
            width: 130px;
            line-height: 115.1%;
        }
        .box-idioma {
            font-size: 12px;
            line-height: 115.1%;
            margin-top: .7em;
        }
    }
`

export {Bigbox}