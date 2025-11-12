import React from 'react';
import './CharacterCard.css';

const CharacterCard = ({character, onClick = () => {} }) => {
  const handleClick = () => { 
    localStorage.setItem('currentView', 'detail');
    localStorage.setItem('selectedCharacter', JSON.stringify(character));

    onClick(character);
    localStorage.setItem('lastClickedCard', character.id.toString());
    localStorage.setItem('lastCharacterData', JSON.stringify(character));
  }
  
  return (
    <div 
      className="character-card" 
      onClick={handleClick} 
      tabIndex={0} 
    >
      <div className="glow-effect"></div>
      
      <div className="card-image">
        {character.image ? (
          <img 
            src={character.image} 
            alt={character.name}
            className="character-image"
            loading="lazy" 
          />
        ) : (
          <div className="image-placeholder">
            ...
          </div>
        )}
      </div>

      <div className="card-name">
        <h3>{character.name}</h3>
        <div className="region">{character.region}</div>
      </div>
    </div>
  );
};

export default CharacterCard;