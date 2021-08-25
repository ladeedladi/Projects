import React from 'react'
import { Container,Button,Alert,Image, Breadcrumb,Card, Form ,Row,Col} from 'react-bootstrap'
 import 'bootstrap/dist/css/bootstrap.min.css'
function Reactbootstrap() {
    return (
        <div>
            <Container >
             <Form>
                 <Row>
                     <Col md>
                <Form.Group>
                    <Form.Label>email</Form.Label>
                    <Form.Control type='email' placeholder='email.com'/>                
                     <Form.Text>never share mail</Form.Text>
                     
                     
                </Form.Group>
                </Col> 
                <Col md>
                <Form.Group>
                    <Form.Label>password</Form.Label>
                    <Form.Control type='email' placeholder='password'/>                
                    
               
                </Form.Group> 
                </Col>
                </Row>
             </Form>
             <Card>
                
                 <Card.Body>
                     <Card.Title>title</Card.Title>
                      <Card.Text>this is text</Card.Text>
                 <Button variant="primary">button</Button>
                 </Card.Body>
                
             </Card>
             <Breadcrumb>
             <Breadcrumb.Item>1</Breadcrumb.Item>
             <Breadcrumb.Item>2</Breadcrumb.Item>
             <Breadcrumb.Item active >3</Breadcrumb.Item>
             </Breadcrumb>
            <Alert variant="" >this is sick</Alert>
            <Button>click me</Button>
            </Container>
        </div>
    )
}

export default Reactbootstrap
