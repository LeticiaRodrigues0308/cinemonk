import React from "react";
import {Fileira} from "./styled";
import {Cadeira} from "./index";

export default function Fileira2(){
    return(
        <Fileira>
           
           <div className="assento2">
                <Cadeira> 1 </Cadeira>
                <Cadeira> 2 </Cadeira>
                <Cadeira> 3 </Cadeira>
             
                <Cadeira>  </Cadeira>
            
                <Cadeira> 4 </Cadeira>
                <Cadeira> 5 </Cadeira>
                <Cadeira> 6 </Cadeira>
                <Cadeira> 7 </Cadeira>
                <Cadeira> 8 </Cadeira>
            
                <Cadeira>  </Cadeira>
            
                <Cadeira> 9 </Cadeira>
                <Cadeira> 10 </Cadeira>
                <Cadeira> 11 </Cadeira>
            </div>
        </Fileira>
    );
}