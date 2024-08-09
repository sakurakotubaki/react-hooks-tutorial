import React, { useState, useCallback } from 'react';

/**
 * What is useCallback?
 * React.memoでメモ化したコンポーネントに、useCallbackでメモ化した
 * コールバック関数をPropsとして渡すことで、コンポーネントの不要な
 * 再レンダリングをスキップする
 */

// Child コンポーネントのプロパティの型定義
interface ChildProps {
  handleClick: () => void;
}

const Child: React.FC<ChildProps> = React.memo(({ handleClick }) => {
  console.log('render Child');
  return <button onClick={handleClick}>Child</button>;
});

const CountCallback: React.FC = () => {
  console.log('render App');

  const [count, setCount] = useState(0);
  // 関数をメモ化すれば、新しい handleClick と前回の handleClick は
  // 等価になる。そのため、Child コンポーネントは再レンダーされない。
  const handleClick = useCallback(() => {
    console.log('click');
  }, []);

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <Child handleClick={handleClick} />
    </>
  );
}

export default CountCallback;