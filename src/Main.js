import React from 'react';
import HornedBeast from './HornedBeast';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SelectedBeast from './SelectedBeast';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedBeast: {},
            modalShow: false,
            setModalShow: false
        }
    };

    setSelectedBeast = (beastObj) => {
        this.setState({
            selectedBeast: beastObj,
            setModalShow: true,
            modalShow: true
        })
    }

    handleCloseModalClick = () => {
        this.setState({
            setModalShow: false,
            modalShow: false
        })
    }

    render() {
        return (
            <>
                <ThemeProvider
                    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
                    minBreakpoint="xxs"
                >
                    <main>
                        <Container fluid="lg">
                            <Row className="justify-content-sm-center">
                                {this.props.beastList.map(beast => (
                                    <Col sm={12} md={6} lg={4} xl={4}>
                                        <HornedBeast
                                            beast={beast}
                                            key={beast.key}
                                            imageUrl={beast.image_url}
                                            description={beast.description}
                                            title={beast.title}
                                            setSelectedBeast={this.setSelectedBeast}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </main>
                </ThemeProvider>
                <SelectedBeast
                    beast={this.state.selectedBeast}
                    show={this.state.modalShow}
                    onHide={() => this.setState({ modalShow: false, setModalShow: false })} />
            </>
        )
    }
}

export default Main;
