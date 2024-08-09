import { useState } from "react";

/**
 * 
 * @returns 
 * What is useState?
 * stateと、state更新関数を返すフック
 * コンポーネントないでstate管理ができる
 * stateとは、UIに表示されるデータやUIの状態などアプリケーションが保持している情報（データや値）
 */

const UseStateApp = () => {
  // count という state と setCount という count を更新する関数を定義。
  // 今回、useState に 10 を渡しているため count の初期値は 10 になる。
  const [count, setCount] = useState<number>(10);

  const decrement = (): void => {
    // setCount に count - 1 を渡しているので、
    // decrement が実行される度に、count が 1 減る。
    setCount(count - 1);
  };

  const increment = (): void => {
    // setCount に count + 1 を渡しているので、
    // increment が実行される度に、count が 1 増える。
    setCount(count + 1);
  };

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </>
  );
}

export default UseStateApp