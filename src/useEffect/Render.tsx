import { useEffect, useState } from "react";

/**
 * 
 * @returns 
 * What is useEffect
 * Reactから生成されたDOMの変更
 * APIとの通信
 * 非同期処理
 * console.log
 */

const Render = () => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
      // 副作用
      const element = document.getElementById("effectHook");
      if (element) {
        console.log(element.innerText);
      }
      //  依存配列
    }, [count]); // count が更新される度に実行される

    return (
      <div>
        <p id="effectHook">You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>click</button>
      </div>
    );
}

export default Render;