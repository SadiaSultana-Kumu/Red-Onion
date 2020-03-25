import React, { useState } from 'react';
import fakeData from '../../images/fakeData';
import BreakFast from '../../components/BreakFast/BreakFast';

const Menu = () => {
    const breakfast6 = fakeData.slice(0,6);
    const [quantity, setQuantity] = useState(breakfast6);
    return (
        <div>
            <div>
                {
                    quantity.map(items => <BreakFast item={items}></BreakFast>)
                }
            </div>
            
        </div>

    );
};

export default Menu;