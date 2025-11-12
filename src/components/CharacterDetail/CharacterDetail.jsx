/* MODAL PARA LORE DOS PERSONAGENS PARECIDO COM O DO LOL */


import React, { useState, useEffect } from 'react';
import './CharacterDetail.css';

const CharacterDetail = ({ character, onBack }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  /* BOTAR O LOCALSTORAGE EM ALGUM LUGAR AQUI */

  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="character-detail">
      <button className="back-button" onClick={onBack}>
         Voltar
      </button>

      <div className={`character-hero ${isScrolled ? 'scrolled' : ''}`}>
        <div className="hero-background">
          {character.detailImage ? (
            <img 
              src={character.detailImage} 
              alt={character.name}
              className="hero-character-image"
            />
          ) : (
            <div className="image-placeholder-large">
              <span>...</span>
            </div>
          )}
        </div>

        <div className="hero-gradient"></div>

        <div className={`hero-title ${isScrolled ? 'scrolled' : ''}`}>
          <h1 className="character-name-hero">{character.name}</h1>
          <div className="character-subtitle-hero">{character.region}</div>
        </div>
      </div>

      <div className="character-content-wrapper">
        <div className="character-content">
          
          <div className="content-header">
            <h1 className="character-name-content">{character.name}</h1>
            <div className="character-subtitle-content">{character.region}</div>
          </div>

          {character.quote && (
            <div className="character-quote">
              "{character.quote}"
            </div>
          )}

          <div className="content-text">
            {character.overview || character.lore}
          </div>

          {character.background && (
            <div className="content-text">
              {character.background}
            </div>
          )}

          {character.erdtreeAge && (
            <div className="content-text">
              {character.erdtreeAge}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;