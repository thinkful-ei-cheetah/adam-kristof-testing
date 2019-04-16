import React from 'react';
import Card from './Card';

const List = ({ header, cards, allCards}) => {
console.log(cards)
  const cardsHTML = cards.map((card,i) => {
    return <Card key={'card'+i} title={allCards[card].title} content={allCards[card].content} />
  })

  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{header}</h2>
      </header>
      <div className='List-cards'>{cardsHTML}</div>
    </section>
  );
};

export default List;
