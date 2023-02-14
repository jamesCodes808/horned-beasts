import React from 'react';


class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {
        return (
            <section>
            <h2>{this.props.title}</h2>
                <img src={this.props.imageUrl} 
                alt={this.props.description} 
                title={this.props.title}></img>
                <p>{this.props.description}</p>
            </section>
        )
    }
}

export default HornedBeast;