import React from 'react';
import HornedBeast from './HornedBeast';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Main extends React.Component {

    render() {
        return (
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
                                        key={beast.key}
                                        imageUrl={beast.image_url}
                                        description={beast.description}
                                        title={beast.title}
                                        chooseBeast={this.props.chooseBeast}
                                        handleShowModalClick={this.props.handleShowModalClick}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </main>
            </ThemeProvider>
        )
    }
}

export default Main;
