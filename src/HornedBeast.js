import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            favorites: 0,
        }
    }

    handleBtnClick = () => {
        this.setState({ favorites: this.state.favorites + 1 });
    }

    handleImgClick = () => {
        this.props.setSelectedBeast(this.props.beast)
    }

    render() {
        return (
            <section>
                <Card class="card-container">
                    <Card.Img
                        variant="top"
                        src={this.props.imageUrl}
                        alt={this.props.description}
                        title={this.props.title}
                        style={{ width: 200, height: 200, }}
                        class="card-image"
                        onClick={this.handleImgClick}
                    />
                    <Card.Body>
                        <Card.Title key={this.props.key}>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                            <br></br>
                        </Card.Text>
                        <Button variant="primary" onClick={this.handleBtnClick}> <FontAwesomeIcon icon={regular('heart')} /></Button>
                        {this.state.favorites}
                    </Card.Body>
                </Card>
            </section>
        )
    }
}

export default HornedBeast;