import React from 'react';

const Input = (type, state, onChange, name) => {
    return (
        <div className="input">
            <input name={name} value={state} onChange={onChange} />
            <label>
                {type}
            </label>
       </div>
    )
}

export default Input;