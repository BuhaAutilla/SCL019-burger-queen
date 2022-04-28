import React, {useState} from 'react';
import Client from './Client';

function Order({ order }) {
    const [client, setClient] = useState('');
    const total = order.reduce((total, item) => total + item.value, 0);
    // console.log(client);
    // console.log(order);
    return (
        <div>
            < Client setClient={setClient}/>
            <div className="order-container">
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