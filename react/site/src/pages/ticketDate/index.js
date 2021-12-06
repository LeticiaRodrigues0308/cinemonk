import React from "react";
import {LittleBoxes, Boxes, Conteiner, Texto} from "./styled"
import LittleBox from "../../components/littleBox";
import BigBox from "./bigBox";
import Logo from "../../components/logo"
//import { useHistory } from "react-router";


export default function TicketDate() {
    //const navigation = useHistory();

    /*const filme = async () => {
        navigation.push('/select')
     }*/
    return(
            <Conteiner>
                <Logo/>
                <Texto>
                    <p> Escolha a data que você deseja comprar o ingresso </p>
                </Texto>
                <Boxes>
                    <BigBox/>
                    <LittleBoxes>
                        <LittleBox/>
                        <LittleBox/>
                        <LittleBox/>
                        <LittleBox/>
                        <LittleBox/>
                        <LittleBox/>
                    </LittleBoxes>
                </Boxes>
            </Conteiner>
    )
}