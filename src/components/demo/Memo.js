//useMemo --> is a React hook that lets you cache the result of a calculation between re-renders.


//const cachedValue = useMemo(calculateValue, dependencies)



import { useMemo, useState } from "react";
import { findNthPrime } from "../../utils/helper";

const DemoMemo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  console.log(isDarkTheme);
  const primeNum = useMemo(() => findNthPrime(text), [text]);
  return (
    <div
      className={
        "border border-black m-4 p-2 w-96 h-96 " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <div>
        <button
          className={" m-5 p-2 bg-green-200 " + (isDarkTheme && "text-black")}
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Dark / Light
        </button>
      </div>
      <input
        type="number"
        className={
          "border border-black m-5 p-2 " + (isDarkTheme && "text-black")
        }
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="m-5 p-2">
        {" "}
        Prime Number of {text} is : {primeNum}
      </div>
    </div>
  );
};

export default DemoMemo;
