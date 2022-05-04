import React from 'react';

function Waiter({setWaiter}) {
    return (
        <div>
            <input type = 'text' placeholder = "Mesero" 
            onChange={(e) => setWaiter(e.target.value)}
            />
        </div>
    );
}

export default Waiter;