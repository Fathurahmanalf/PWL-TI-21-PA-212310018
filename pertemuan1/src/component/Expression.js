import React from 'react';

const Expression = () => {

    const today = new Date;
    return (
        <div>
                <h1>Today is {today().toTimeString()}</h1>
                <h2>My name is</h2>
            
        </div>
    );
}

export default Expression;
