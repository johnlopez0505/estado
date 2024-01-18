import { useState } from "react";

const MyHeader = () =>{
    const [color,setColor]= useState(0);
    const colores = ['blue','red','white','black','orange','brown']
    return(
        <div>
            <h1 style={{color:colores[color]}}>Hello Style</h1>
            <p>Add a little Style!</p>
            <button onClick={()=>{setColor((color +1) % colores.length)}}>cambiar color</button>
        </div>
    );
}
export default MyHeader;