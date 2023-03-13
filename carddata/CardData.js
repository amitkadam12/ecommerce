import React from 'react';
import list from './data';
import Card from '../card/Card';

const Amazon = ({ handleClick }) => {

 return (
        <section id='popular-product'>
          <div className='product-heading'>
            <h3>Popular product</h3>
            <span>All</span>
          </div>
          <div className='product-container'>
              {list.map(item => (
                <Card key={item.id} item={item} handleClick={handleClick} />
              ))}
              </div>
        </section>
  );
};

export default Amazon;
