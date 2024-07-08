//useRef is a React Hook that lets you reference a value that’s not needed for rendering.

import { useEffect, useRef, useState } from "react";

// const ref = useRef(initialValue)
//whenever my component re-renders my 

const DemoRef = () => {
    const [y , setY] =  useState(0);

    const ref = useRef(0);
    console.log(ref);
    let x=10;

    // let i; --> can not be used
    const i = useRef(null);
    useEffect(() => {
         i.current = setInterval(()=> {
            console.log("Namaste React" , Math.random());
        } , 1000);

        return () => clearInterval(i.current);
    }, []);
    return (
        <div className="m-4 p-4 bg-slate-50 border border-black w-96 h-96">
            <div>
                <button className="bg-green-100 p-2 m-4"
                onClick={() =>{
                    x = x + 1;
                    console.log(x);
                } }>
                    Increase X
                </button>
                <span className="font-bold text-xl m-4 p-2"> let = {x} </span>
            </div>
            <div>
                <button className="bg-green-100 p-2 m-4"
                onClick={() =>{
                   setY(y+1)
                } }>
                    Increase Y
                </button>
                <span className="font-bold text-xl m-4 p-2"> state Y  = {y} </span>
            </div>
            <div>
                <button className="bg-green-100 p-2 m-4"
                onClick={() =>{
                   ref.current = ref.current + 1;
                   console.log("ref current" , ref.current);
                } }>
                    Increas Ref
                </button>
                <span className="font-bold text-xl m-4 p-2"> ref Value = {ref.current} </span>
            </div>
            <button className="border bg-red-700 border-black p-2 m-4 rounded-md text-white" onClick={()=> clearInterval(i.current)}>Stop Printing</button>
        </div>
    )
}

export default DemoRef;