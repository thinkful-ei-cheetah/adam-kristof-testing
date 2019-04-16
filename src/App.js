import React, { Component } from 'react';
import List from './components/List';
import './App.css';

const App=({store})=> {

  let lists = store.lists.map(list=>{
    return <List key={list.id} header={list.header} cards={list.cardIds} allCards={store.allCards}/>});
  
    return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
      {lists}
      </div>
    </main>
  );
}

export default App;
