import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Trouvez nos articles sur différents jeux et les guides correspondant </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/calamity.jpg'
              text='Terraria Calamity Mod'
              label='Terraria'
              path='/services'
            />
            <CardItem
              src='images/identity-danganronpa.jpg'
              text='Identity V Dangarouppa Exclusive'
              label='IDV'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/7DS.jpg'
              text='7 deadly Sins Grand Cross Guide'
              label='7DS GC'
              path='/services'
            />
            <CardItem
              src='images/kequing.jpg'
              text='Fan-art de la communauté'
              label='Fan-art'
              path='/products'
            />
            <CardItem
              src='images/tournoi.jpg'
              text='Tournoi et Évenenement'
              label='Events'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
