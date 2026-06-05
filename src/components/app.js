import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Body";
import Heading from "./Heading";




const AppLayout=()=>{
    return(
        <div>
            <Heading/>
            <Body/>
            
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)