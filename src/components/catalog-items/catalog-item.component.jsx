import React from 'react';

import './catalog-item.styles.scss';

const CatalogItem = ({ name, imageUrl, price}) => (
    <div className="catalog-item">
        <div className="product-image" style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className="product-detail">
            <span className='product-name'>{name}</span>
            <span className='product-price'>Rp{price}</span>
        </div>
    </div>
);

export default CatalogItem;