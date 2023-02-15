import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import Card from 'react-bootstrap/Card'

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            favorites: 0
        }
    }

    handleClick = () => {
        this.setState({ favorites: this.state.favorites + 1 });
    }

    render() {
        return (
            <section onClick={this.handleClick}>
                <Card class="card-container">
                    <Card.Img
                        variant="top"
                        src={this.props.imageUrl}
                        alt={this.props.description}
                        title={this.props.title}
                        style={{ width: 200, height: 200, }}
                        class="card-image" />
                    <Card.Body>
                        <Card.Title key={this.props.key}>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                            <br></br>
                            <FontAwesomeIcon icon={regular('heart')} />
                            {this.state.favorites}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </section>
        )
    }
}

export default HornedBeast;