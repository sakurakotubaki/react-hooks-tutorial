import React, { useState } from "react";

/**
 * React.memoコンポーネント結果をメモ化するReact API
 */

interface CountMemoProps {
    count: number;
}

// props.count が更新されない限り、再レンダーされない。
const Child: React.FC<CountMemoProps> = ({ count }) => {
    return (
      <div>
        <p>Count: {count}</p>
      </div>
    );
  };

const CountMemo = () => {
    console.log("render App");
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
  
    return (
      <>
        <button onClick={() => setCount1(count1 + 1)}>+ App count</button>
        <button onClick={() => setCount2(count2 + 1)}>- Child count</button>
        <p>App: {count1}</p>
        <Child count={count2} />
      </>
    );
}

export default CountMemo