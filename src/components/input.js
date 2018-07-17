import React from 'react';

const Input = (type) => {
    return (
        <div className="input">
            <input />
            <label>
                {type}
            </label>
       </div>
    )
}

export default Input;