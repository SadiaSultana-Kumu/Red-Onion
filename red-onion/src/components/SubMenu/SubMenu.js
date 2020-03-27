import React from 'react';
import { Link } from 'react-router-dom';
import Lunch from '../Item/Item';
const SubMenu = (props) => {
    return (
        <div>
            <div className="container">
            <div className="row">
                {
                    props.curMenu.map(item => {
                        return <Lunch item={item}
                                    handleItem={props.handleItem}
                                ></Lunch>
                    })
                }
            </div> 
            <br/>
            <Link to='/signup'>
                <button className="btn btn-danger"
                    disabled={props.emptyCart}
                    onClick={props.handleOrder}
                >Checkout Your Food</button>
            </Link>
        </div>
        </div>
    );
};

export default SubMenu;