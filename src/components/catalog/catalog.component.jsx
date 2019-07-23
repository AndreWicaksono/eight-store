import React from 'react';

import CatalogItem from '../catalog-items/catalog-item.component';

import './catalog.styles.scss';

const Catalog = ({ title, items }) => (
    <div className="catalog">
        <h1 className='title'>{title}</h1>
        <div className="catalog-preview">
            {
                items.map(({id, ...otherItemProps })=> (
                    <CatalogItem key={id} {...otherItemProps}/>
                ))
            }
        </div>
    </div>
);

export default Catalog;