import React from 'react';

export function Listing({ items = [] }) {

  return (
    <div className="item-list">
      {items.length > 0 && items.map((item) => (item.state === 'active' && <ItemCard key={item.id} item={item}/>))}
    </div>
  )

}


export function ItemCard({ item = {} }) {

  const level = item.quantity <= 10 ? 'level-low'
    : item.quantity <= 20 ? 'level-medium'
    : 'level-high'  

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN}/>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{item.title}</p>
        <p className="item-price">
          {item.currency_code === 'USD' ? '$' : item.currency_code === 'EUR' ? '€' : ''}
          {item.price}
          {item.currency_code != 'USD' && item.currency_code != 'EUR' ? ` ${item.currency_code}` : ''}
        </p>
        <p className={`${level} item-quantity`}>{item.quantity} left</p>
      </div>
    </div>
  )

}
