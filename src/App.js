import React from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import { useState } from 'react';
import Route from './Route';
import Header from './Header';

const items = [
{
    title:'What is React?',
    content:'React is a front end javascript framework'
},
{
    title:'Why use React?',
    content:'Nwm w sumie'
},
{
    title:'How do you use React?',
    content:'By creating components'
}
]

const options = [

    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    }

]

export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);
    return (

        <div>
            <Header/>
            <Route path="/"> <Accordion items={items}/> </Route>
            <Route path="/list"> <Search /> </Route>
            <Route path="/dropdown"> <Dropdown 
            label="Select a color"  
            onSelectedChange={setSelected}
            selected={selected} 
            options= {options} /> </Route>
            <Route path="/translate"> <Translate /> </Route>
            
        </div>

    );
};