import React, { useState } from 'react';
import fakeData from '../../images/fakeData';
import Lunch from '../../components/Lunch/Lunch';

const Menu = (props) => {
    const lunch6 = fakeData.slice(6,12);
    const [quantity, setQuantity] = useState(lunch6);

    const handleItem = (item) => {
          console.log(item);
    }

    return (
        <div>
            <div>
                {
                    quantity.map(items => <Lunch handleItem = {handleItem} item={items}></Lunch>)
                }
            </div>
            
        </div>

    );
};

export default Menu;