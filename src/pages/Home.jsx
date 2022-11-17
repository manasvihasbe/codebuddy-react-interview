import { useState } from 'react';
import Header from './Header';
import MultiCarousel from './MultiCarousel';
import Search from './Search';

function Home({ onToggleImg }) {
  const [toggleNews, setToggleNews] = useState(true);
  const onToggleNews = () => {
    if (toggleNews) {
      setToggleNews(false);
    } else {
      setToggleNews(true);
    }
  };

  return (
    <div>
      <Header onToggleNews={onToggleNews} onToggleImg={onToggleImg} />
      <Search />
      {toggleNews && <MultiCarousel />}
    </div>
  );
}

export default Home;
