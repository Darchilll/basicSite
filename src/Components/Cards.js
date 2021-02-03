import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>
        <u>Chef's Special</u>
      </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {/* ITEM1 */}
            <CardItem
              src='images/item-10.jpeg'
              text='Taste the most tender piece of meat with gravy we got'
              label='Dinner'
              path='/services'
            />

            {/* ITEM2 */}
            <CardItem
              src='images/item-11.jpg'
              text="No idea why people are scared of Indian food, it's not going to bite you, you have to bite it tho xD"
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            {/* ITEM1 */}
            <CardItem
              src='images/organic.jpg'
              text='All the ingredients used here is purely organic and fresh.'
              label='Food'
              path='/services'
            />

            {/* ITEM2 */}
            <CardItem
              src='images/friends.jpg'
              text="We've designed this place to be as instagrammable and chilled as possible, with hygiene in mind."
              label='Family'
              path='/products'
            />

            {/* ITEM3 */}
            <CardItem
              src='images/present.jpg'
              text='Most important of all, everything is made and served with love :)'
              label='Love'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
