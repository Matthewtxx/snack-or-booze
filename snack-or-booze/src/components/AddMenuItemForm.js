import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button, Col, Container, Row } from 'reactstrap';
import SnackOrBoozeApi from '../Api';
import '../styles/AddMenuItemForm.css';

function AddMenuItemForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('snacks'); // Default to snacks
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input fields if needed

    // Create a new item object
    const newItem = {
      name,
      description,
      // Add more properties based on your data structure
    };

    // Add the new item to the appropriate list (snacks or drinks)
    try {
      if (type === 'snacks') {
        await SnackOrBoozeApi.addSnack(newItem);
      } else if (type === 'drinks') {
        await SnackOrBoozeApi.addDrink(newItem);
      }

      // Redirect to the appropriate menu page after adding the item
      history.push(`/${type}`);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <CardBody>
              <CardTitle className="text-center">
                <h3>Add {type === 'snacks' ? 'Snack' : 'Drink'}</h3>
              </CardTitle>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="description">Description</Label>
                  <Input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="type">Type</Label>
                  <Input
                    type="select"
                    id="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="snacks">Snack</option>
                    <option value="drinks">Drink</option>
                  </Input>
                </FormGroup>
                <Button type="submit" color="primary">
                  Add {type === 'snacks' ? 'Snack' : 'Drink'}
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AddMenuItemForm;