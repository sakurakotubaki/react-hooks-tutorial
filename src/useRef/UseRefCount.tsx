/**
 * 
 * @returns 
 * What is useRef
 * refオブジェクトの(React.createRef の戻り値)を返すフック
 * DOMの参照や、コンポーネント内で値を保持できます。
 * useStateとの違いは、useStateはstateを更新するたびに再レンダリングされるが、
 * useRefは再レンダリングされない。
 */

import { useEffect, useRef, useState } from "react";

const UseRefCount = () => {
    const [count, setCount] = useState<number>(10);
    // useRef に0 を渡しているので、prevCountRef.current の初期値は 0
    const prevCountRef = useRef<number>(0);
  
    useEffect(() => {
      // ref オブジェクトが更新されてもコンポーネントは再レンダーされない。
      prevCountRef.current = count;
    });
  
    return (
      <>
        <p>
          現在のcount: {count}, 前回のcount: {prevCountRef.current}
        </p>
        <p>前回のcountより{prevCountRef.current > count ? '小さい' : '大きい'}</p>
        <button onClick={() => setCount(Math.floor(Math.random() * 11))}>
          update
        </button>
      </>
    );
}

export default UseRefCount