import React from 'react';

class Footer extends React.Component {

    constructor() {
        super();
        this.state = {
            message: ""
        }
    }

    handleFooterClick = () => {
        this.setState({ message: "Thanks for stopping by!" })
    }

    render() {
        return (
            <footer onClick={this.handleFooterClick}>
                <p>&copy; James Ian Solima</p>
                <p>{this.state.message}</p>
            </footer>
        )
    }
}

export default Footer;