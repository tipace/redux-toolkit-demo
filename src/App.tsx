import React from 'react';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import { Counter } from './features/counter/Counter';
import { Todo } from './features/todos/Todo';
import { TodoEntity } from './features/todosEntity/Todo';
import './App.css';

const { TabPane } = Tabs;
const tabList = [
  {
    key: 'counter',
    component: Counter,
  },
  {
    key: 'todo',
    component: Todo,
  },
  {
    key: 'todoEntity',
    component: TodoEntity,
  },
];
function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Tabs defaultActiveKey="counter" type="card">
          {tabList.map((item) => (
            <TabPane key={item.key} tab={item.key}>
              <item.component />
            </TabPane>
          ))}
        </Tabs>
      </div>
      <span>
        <span>Learn </span>
        <a className="App-link" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
          React
        </a>
        <span>, </span>
        <a className="App-link" href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
          Redux
        </a>
        <span>, </span>
        <a className="App-link" href="http://cn.redux.js.org/" target="_blank" rel="noopener noreferrer">
          Redux中文
        </a>
        <span>, </span>
        <a className="App-link" href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer">
          Redux Toolkit
        </a>
        <span>, </span>
        <a className="App-link" href="https://redux-toolkit-cn.netlify.app/" target="_blank" rel="noopener noreferrer">
          Redux Toolkit中文
        </a>
        ,<span> and </span>
        <a className="App-link" href="https://react-redux.js.org/" target="_blank" rel="noopener noreferrer">
          React Redux
        </a>
      </span>
    </div>
  );
}

export default App;
