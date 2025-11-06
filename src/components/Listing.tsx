import React from 'react';

type ListingProps<T> = {
  items?: T[];
};

type Item = {
  listing_id: number,
  url: string,
  MainImage: string,
  title: string,
  currency_code: string,
  price: string,
  quantity: number,
};

export function Listing<T>({ items = [] }: ListingProps<T>) {

  return (
    <div className="item-list">
      {items.length > 0 && items.map((item) => (item.state === 'active' && <ItemCard key={item.listing_id} listing_id={item.listing_id} url={item.url} MainImage={item.MainImage.url_570xN} title={item.title} currency_code={item.currency_code} price={item.price} quantity={item.quantity}/>))}
    </div>
  )

}


export function ItemCard(item: Item) {

  const level = item.quantity <= 10 ? 'level-low'
    : item.quantity <= 20 ? 'level-medium'
    : 'level-high'  

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage}/>
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
