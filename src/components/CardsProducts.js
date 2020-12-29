import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsProducts() {
  return (
    <div className='cards'>
      <h1>Koristimo samo najbolje proizvode ...</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/product3.jpg'
              text='Wella professionals (color brilliance)'
              label='INVIGO'
            />
            <CardItem
              src='images/product4.jpg'
              text='Wella professionals (refresh wash, aqua pure, clean scalp, balance serum, senso calm)'
              label='INVIGO'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/product1.jpg'
              text='Wella professionals (blonde recharge with color pigments'
              label='INVIGO'
            />
            <CardItem
              src='images/product2.jpg'
              text='Wella professionals (volume boost with coton extract)'
              label='INVIGO'
            />
            <CardItem
              src='images/product5.jpg'
              text='Wella professionals (nutri-enrich with silk extract)'
              label='INVIGO'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsProducts;
