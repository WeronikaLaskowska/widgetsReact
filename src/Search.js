import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('cats');
    const [results, setResults] = useState([]);

    useEffect( () => {
     const timeoutId=setTimeout( () => {

            if(term){
                (async () =>{
                        const {data}=await axios.get('https://en.wikipedia.org/w/api.php',{ params: {
                            action:'query',
                            list:'search',
                            origin:'*',
                            format:'json',
                            srsearch: term
                        }
                       })
                    setResults(data.query.search);
                })(); 
            }

        }, 500);  
        
        return () => {
            clearTimeout(timeoutId);
        }
    }, [term])
   /* nothing, [] or [some elements]*/
    const renderedResults = results.map ( result =>{
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a target="_blank" href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button">Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
            </div>
        )
    })
 
    return (

        <div >
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input value={term} onChange={ e => setTerm(e.target.value)}className="input"></input>
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>

    )
}
export default Search;