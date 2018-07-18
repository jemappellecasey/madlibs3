import React from 'react';

const Input = ({type, state, name}, onChange) => {
    return (
        <div key={name} className="input">
            <input name={name} value={state} onChange={onChange} />
            <label>
                {type}
            </label>
       </div>
    )
}

export default Input;