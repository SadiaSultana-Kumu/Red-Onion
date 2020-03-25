import React from 'react';
import './BreakFast.css'

const BreakFast = (props) => {
    return (
        <div className="col-lg-4">
            <div className="card">
               <img src={props.item.image} className="card-img-top" alt=""/>
            </div>
            <div className="card-body">
               <h1>{props.item.name}</h1>
            </div>
        </div>
    );
};

export default BreakFast;