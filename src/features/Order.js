import React, {useState} from 'react';

function Order({ order }) {
    const total = order.reduce((total, item) => total + item.value, 0);
    return (
        <div className = 'order-container'>
            <div className="items-container">
           {order.map (item => (
                <div className="item-line" key = {item.name}>
                <div> {item.name} </div>
                <div> {item.value} </div>
                </div>
           ))}
           </div>
           <div className='total'><p>Total:</p> <p>{total}</p> </div>
        </div>
    );
}

export default Order;