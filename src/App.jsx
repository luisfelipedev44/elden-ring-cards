import React, { useState, useEffect } from 'react';
import CharacterCard from './components/CharacterCard/CharacterCard';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';
import Home from './components/Home/Home';
import { eldenRingCharacters } from './data/characters';
import './styles/App.css';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [currentView, setCurrentView] = useState('home');  

  useEffect(() => {
    const savedView = localStorage.getItem('currentView');
    const savedCharacter = localStorage.getItem('selectedCharacter');
    
    console.log('Carregando:', { savedView, savedCharacter });
    
    if (savedView) {
      setCurrentView(savedView);
    }
    
    if (savedCharacter) {
      setSelectedCharacter(JSON.parse(savedCharacter));
    }
  }, []);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
    setCurrentView('detail');
  };

  const handleEnterSite = () => {
    setCurrentView('characters');
    localStorage.setItem('currentView', 'characters');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedCharacter(null);
    localStorage.setItem('currentView', 'home');
    localStorage.removeItem('selectedCharacter');
  };

  if (currentView === 'detail' && selectedCharacter) {
    return (
      <CharacterDetail 
        character={selectedCharacter}
        onBack={() => {
          setSelectedCharacter(null);
          setCurrentView('characters');
          localStorage.setItem('currentView', 'characters');
          localStorage.removeItem('selectedCharacter');
        }}
      />
    );
  }

  if (currentView === 'home') {
    return (
      <Home onEnterSite={handleEnterSite} />
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <button className="back-to-home" onClick={handleBackToHome}>
           Voltar 
        </button>
        
        <h1>PERSONAGENS</h1>
        <p>Conheça a história dos personagens de Elden Ring</p>
      </header>

      <div className="characters-grid">
        {eldenRingCharacters.map(character => (
          <CharacterCard 
            key={character.id} 
            character={character}
            onClick={handleCharacterClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;