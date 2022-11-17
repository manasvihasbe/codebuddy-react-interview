import { useState } from 'react';
import Router from './Router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

function App() {
  const [toggleImg, setToggleImg] = useState(true);

  const onToggleImg = () => {
    if (toggleImg) {
      setToggleImg(false);
    } else {
      setToggleImg(true);
    }
  };

  return (
    <div
      style={{
        backgroundImage: toggleImg
          ? 'url(' +
            'https://media.istockphoto.com/id/931479532/photo/mountain-valley-during-sunrise-beutiful-natural-landsscape-in-the-summer-time.jpg?b=1&s=170667a&w=0&k=20&c=Mo4u13p91M-bLF7jypBLjefS7wiD0lPE3jLV_VR2WYY=' +
            ')'
          : null,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Router onToggleImg={onToggleImg} />;
    </div>
  );
}

export default App;
