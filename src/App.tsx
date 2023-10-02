import './global.css';

import appStyles from './App.module.css';

import { Header } from './components/Header.tsx';
import { Mural } from './components/Mural.tsx';
import { CreateTaskButton } from './components/CreateTaskButton.tsx';

export function App() {
  return (
    <div className={appStyles.contentApp}>
      <Header/>
      <main>
        <CreateTaskButton/>
        <Mural/>
      </main>
    </div>
  )
}

