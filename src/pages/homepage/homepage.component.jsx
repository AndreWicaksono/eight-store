import React from 'react';

import './homepage.styles.scss';

import Catalog from '../../components/catalog/catalog.component';
import Slider from '../../components/slider/slider.component';

import SHOP_DATA from '../../shop.data';

class HomePage extends React.Component {
    constructor() {
        super();
        
        this.state = {
            items: SHOP_DATA
        };
    };

    render() {
        return (
            <div className='homepage'>
            <Slider/>
                {
                    this.state.items.map(({id, ...otherProps}) => (
                        <Catalog key={id} {...otherProps} />
                    ))
                }
            </div>
        );
    };
};

export default HomePage;