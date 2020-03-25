import React, {lazy, StrictMode, Suspense} from 'react';
import './App.css';

const sleep = () => new Promise<string>(resolve => setTimeout(() => resolve('りあくとちゃん'), 5000))

const Component = lazy(async () => {
  const myName = await sleep()
  return import("./components/Demo").then(({Demo}) => ({
    default: () => Demo({myName})
  }))
})

export class App extends React.PureComponent {
  render() {
    return (
      <StrictMode>
        <Suspense fallback="App準備中...">
          <Component/>
        </Suspense>
      </StrictMode>
    );
  }
}
