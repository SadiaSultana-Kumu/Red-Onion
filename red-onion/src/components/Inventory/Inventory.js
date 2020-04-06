import React from 'react';
import fakeData from '../../images/fakeData';

const Inventory = () => {
    const handleAddInventory = () => {
        const menu = fakeData;
        console.log('posting....')
        console.log(menu)
    }

    return (
        <div>
            <h1>This is inventory</h1>
            <button onClick={handleAddInventory}>Add Items</button>
        </div>
    );
};

export default Inventory;