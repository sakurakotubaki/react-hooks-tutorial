import React, { useReducer } from 'react';

/**
 * What is useReducer?
 * state と action を受け取り、新しい state を返す関数を使って、state の更新を行うためのフック
 * コンポーネント内での state の管理を、useReducer を使って行うことができる
 * 戻り値である dispatch 関数を使って、action を送信することで、state の更新を行う
 * action は、type プロパティを持つオブジェクトで、state の更新方法を示す
 * reducer 関数は、現在の state と action を受け取り、action に応じて更新した state を返す
 * dispatch 関数を使って action を送信することで、reducer 関数が呼び出され、state が更新される
 */

// State の型定義
interface State {
  count: number;
}

// ActionType の enum 定義
enum ActionType {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  RESET = 'RESET'
}

// Action の型定義
interface Action {
  type: ActionType;
}

// 現在の state と action を受け取り、action に応じて更新した state を返す関数
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.INCREMENT:
      return { count: state.count + 1 };
    case ActionType.DECREMENT:
      return { count: state.count - 1 };
    case ActionType.RESET:
      return { count: 0 };
    default:
      return state;
  }
}

const CounterReducer: React.FC = () => {
  // useReducer の第２引数に { count: 0 } を渡しているので、
  // state の初期値は { count: 0 }
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>count: {state.count}</p>

      {/* { type: ActionType.DECREMENT } という action を送信する */}
      <button onClick={() => dispatch({ type: ActionType.DECREMENT })}>-</button>

      {/* { type: ActionType.INCREMENT } という action を送信する */}
      <button onClick={() => dispatch({ type: ActionType.INCREMENT })}>+</button>

      {/* { type: ActionType.RESET } という action を送信する */}
      <button onClick={() => dispatch({ type: ActionType.RESET })}>Reset</button>
    </div>
  );
}

export default CounterReducer;