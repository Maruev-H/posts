import { useState } from 'react';
import './App.scss';

import Header from './components/header/Header';
import PostList from './components/post-list/PostList';
import BurgerMenu from './components/berger-menu/BurgerMenu';

import {useWindowDimensions} from './hooks/useWindowDimensions'


function App() {

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)
  const [search, setSearch] = useState('')

  const isTablet = useWindowDimensions().width <= 766

  return (
    <div className="App">
      {isTablet && <BurgerMenu isBurgerMenuOpen={isBurgerMenuOpen} onClose={() => setIsBurgerMenuOpen(false)}/>}
      <Header onBurgerMenuOpen={() => setIsBurgerMenuOpen(true)} search={search} onChange={(event) => setSearch(event.target.value)}/>
      <PostList search={search} />
    </div>
  );
}

export default App;
