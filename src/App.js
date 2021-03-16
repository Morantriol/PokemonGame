import { useState } from 'react';
import GamePage from './routes/Game/index';
import HomePage from './routes/Home/index';

const App = () => {
  const [page, setPage] = useState('app');

  const handleChangePage = (page) => {
    setPage(page);
  }

  switch (page) {
    case "app":
      return <HomePage onChangePage={handleChangePage} />
    case "game":
      return <GamePage onClickButton={handleChangePage} />
    default:
      return <HomePage />
  }
}

export default App;