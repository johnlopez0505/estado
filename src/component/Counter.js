import { useState } from "react";
import Pie from "./Pie";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [max, setMax] = useState(20);
    const [min,setMin]  = useState(-13)
    return(
        <>
            <p>El contador es: {counter}</p>
            <div id="cont">
                <input type="number" value={max} onChange={event=>{
                    const newMax = parseInt(event.target.value);
                    if(newMax > min)
                        setMax(newMax);
                    if(counter > newMax)
                        setCounter(newMax)}}/>valor maximo
                <input style={{marginLeft:"20px"}} value={min} type="number" onChange={event=>{
                    const newMin = parseInt(event.target.value);
                    if(newMin < max)
                        setMin(newMin)
                    if(counter < newMin)
                        setCounter(newMin)}}/>valor minimo
            
                <br/>
                <button style={{marginTop:"40px"}} onClick={()=>{setCounter(counter < max ? counter +1: counter );}}>Incrementar</button>
                <button style={{marginLeft:"20px"}} onClick={()=>{setCounter(counter > min ? counter -1 : counter);}}>Decrementar</button>
                <button style={{marginLeft:"20px"}} onClick={()=>{setCounter(0);}}>Resetear</button>
                <Pie counter={counter}/>
            </div>
        
        </>

    );

}
export default Counter