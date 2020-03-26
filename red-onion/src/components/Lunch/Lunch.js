import React from 'react';
import './Lunch.css'
import { Link } from 'react-router-dom';

const Lunch = (props) => {
    //console.log(props.item)
    const {name,image,price,phrase} = props.item;

    return (
        <div className="row col-lg-4">
        <div>
            <div className="card">
               <img src={image} className="card-img-top" alt=""/>
               <h6>{name}</h6>
               <p>{phrase}</p>
               <p>${price}</p>
               <button onClick={ ()=> props.handleItem(props.item)} type="submit" className="btb btn-outline-danger"><Link to={"/"+name}>Details</Link></button>
            </div>
        </div>
        </div>
    );
};

export default Lunch;