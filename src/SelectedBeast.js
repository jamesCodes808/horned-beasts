import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal

                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                center>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {this.props.beast.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>{this.props.beast.title}</h4>
                    <img
                        src={this.props.beast.image_url}
                        alt={this.props.beast.description}
                        class="card-image"
                        style={{ width: 200, height: 200 }}>

                    </img>
                    <p>
                        {this.props.beast.description}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    };
}

export default SelectedBeast;