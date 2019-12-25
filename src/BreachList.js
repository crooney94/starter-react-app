import React from 'react';


class BreachList extends React.Component {
    constructor(){
        super();

        this.state = {
            breaches: []
        };
}



componentDidMount(){
    fetch('https://haveibeenpwned.com/api/v2/breaches')
    .then(results => {
        return results.json();
    }).then((data) => {
        this.setState({ breaches: data})
    })
    .catch(console.log)
}

render(){
    return (
        <div className="container">
            { this.state.breaches }
        </div>
    );
    }
}

export default BreachList;