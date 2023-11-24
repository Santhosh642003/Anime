import './App.css';
import React, { useState } from 'react';


const animeData = [
  {
    id: 1,
    title: 'Naruto Shippuden',
    image: 'https://images.justwatch.com/poster/245251537/s718/naruto-shippuden.jpg',
  },
  {
    id: 2,
    title: 'Attack on Titan',
    image: 'https://m.media-amazon.com/images/I/81dH7-pkjiL._SL1500_.jpg'
  },
  {
    id: 3,
    title: 'Your Name',
    image: 'https://e1.pxfuel.com/desktop-wallpaper/403/370/desktop-wallpaper-your-name-mobile-your-name-poster.jpg'
  },
  {
    id: 4,
    title: 'Silent Voice',
    image: 'https://mcdn.wallpapersafari.com/medium/31/18/GfZJOn.jpg'
  },
  {
    id: 5,
    title: 'Jujutsu Kaisen',
    image: 'https://wallpapercave.com/dwp1x/wp8936520.jpg'
  },
  {
    id: 6,
    title: 'Hunter X Hunter',
    image: 'https://wallpapercave.com/dwp1x/wp9591776.jpg'
  },
  {
    id: 7,
    title: 'Violet Evergarden',
    image: 'https://w0.peakpx.com/wallpaper/531/824/HD-wallpaper-violet-evergarden-anime-evergarden-violet.jpg'
  },
  {
    id: 8,
    title: 'Demon Slayer',
    image: 'https://w0.peakpx.com/wallpaper/358/749/HD-wallpaper-demon-slayer-manga-anime-kny.jpg'
  }

];

const AnimeCard = ({ anime }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardHover = (event) => {
    setIsHovered(true);
    event.currentTarget.style.transform = 'scale(1.1)';
  };

  const handleCardMouseOut = (event) => {
    setIsHovered(false);
    event.currentTarget.style.transform = 'scale(1)';
  };

  const handleCardClick = () => {
    // Implement click functionality here
    console.log(`Clicked on ${anime.title}`);
  };

  return (
    <div
      className={`card ${isHovered ? 'hovered' : ''}`}
      onMouseOver={handleCardHover}
      onMouseOut={handleCardMouseOut}
      onClick={handleCardClick}
    >
      <div className='shine'></div>
      <img src={anime.image} alt={anime.title} />
      <div className='shadow'></div>
      <div className='anime_name'>
      <p>{anime.title}</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <div className='main'>
      <div className='title-img'>
      <p className='title'>
      ANIME IS THE WAY
      </p>
      </div>

        <div className='anime_section'>
          <p className='section'>MY ANIME</p>
          <div className='anime-info'>I have seen so many animes over the years and loved them all. But some animes have stuck with me even after watching many anime. Here are the few anime that I liked very much</div>
          <div className='contain'>
            {animeData.map((anime) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </div>
          <div className='anime-name'>
  
          </div>
        </div>
        <div className='final-section'>
        <p className='Marin'> A small edit of Marin. Enjoy :)</p>
            <div className='video-container'>
            <video className='video' width="750" height="500" controls autoPlay>
            <source src={require('./marinvid.mp4')} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
            </div>
        </div>
        <div className='idk'>I don't know why I'm making this, but I enjoyed making it. I don't know what else to put</div>
      </div>
    </div>
  );
}

export default App;