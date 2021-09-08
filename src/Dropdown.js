import { render } from '@testing-library/react';
import React, { useEffect, useState, useRef } from 'react';

const Dropdown = ({label, options, selected, onSelectedChange}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();
    const hStyle = { color: `${selected.value}`};
    
    useEffect(() => {
        const onBodyClick = e => {
          if (ref.current.contains(e.target)) {
            return;
          }
          setOpen(false);
        };
        
        document.body.addEventListener("click", onBodyClick, { capture: true });
     
        return () => {
          document.body.removeEventListener("click", onBodyClick, {
            capture: true,
          });
        };
      }, []);
    
    const renderedOptions = options.map( option => {
        if(option.value === selected.value){
            return null;
        }
        return (
            <div 
            onClick={ () => onSelectedChange(option)}
            className="item" 
            key={option.value}>
                {option.label}
            </div>
        )
    });
    return (

        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div onClick= { () => setOpen(!open)}className={` ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`${open ?'visible transition' : ''} menu`}>
                        {renderedOptions}
                    </div>
                </div>
                {/* <h1 style={ hStyle }>This color is {selected.value}</h1> */}
            </div>
        </div>

    )
}

export default Dropdown;