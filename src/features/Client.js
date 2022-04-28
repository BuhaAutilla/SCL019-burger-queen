import React from 'react';

function Client({setClient}) {
    return (
        <div>
            <input type = 'text' placeholder = "Cliente" 
            onChange={(e) => setClient(e.target.value)}
            />
        </div>
    );
}

export default Client;