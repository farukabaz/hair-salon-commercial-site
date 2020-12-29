import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsResults() {
  return (
    <div className='cards'>
      <h1>... za najbolje rezultate</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/result1.jpg'
              text='Wella professionals (color brilliance)'
            />
            <CardItem
              src='images/result4.jpg'
              text='Wella professionals (refresh wash, aqua pure, clean scalp, balance serum, senso calm)'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/result3.jpg'
              text='Wella professionals (blonde recharge with color pigments'
            />
            <CardItem
              src='images/result2.jpg'
              text='Wella professionals (volume boost with coton extract)'
            />
            <CardItem
              src='images/result5.jpg'
              text='Wella professionals (nutri-enrich with silk extract)'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsResults;
