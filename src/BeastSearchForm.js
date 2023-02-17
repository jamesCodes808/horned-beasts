import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class BeastSearchForm extends React.Component {


    render() {
        return (
            <Form className='mb-4' onSubmit={this.handleSubmit}>
                <fieldset>
                    <Form.Group className='mb-2'>
                        <Form.Label htmlFor="fuzzySearch">Search</Form.Label>
                        <Form.Control
                            type='text'
                            id="fuzzySearch"
                            placeholder="Search for horned beast"
                            onChange={this.props.setSearchQuery}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-2'>
                        <Form.Label htmlFor="searchCategory">Category</Form.Label>
                        <Form.Select
                            id="searchCategory"
                            onChange={this.props.setSelectCategory}>
                            <option value="horns"># Of Horns</option>
                            <option value="description">Description</option>
                            <option value="title">Title</option>
                            <option value="keyword">Keywords</option>
                        </Form.Select>
                    </Form.Group>
                </fieldset>
                <Button type="submit">Search</Button>
            </Form>
        )
    }
}


export default BeastSearchForm;