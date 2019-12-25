
import React from 'react';
import './Search.css';


class SearchButton extends React.Component {

    render(){
        return (
            <button type="submit">Go!</button>
        );
    }
}

class Search extends React.Component {

    render(){

        return (
            <div>
                <form>
                    <input type="text" placeholder="Search.." name="search"/>
                    <SearchButton />
                </form>
            </div> 
        );

    }
}

export default Search;