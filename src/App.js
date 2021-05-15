import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button,Form,Nav,Navbar,NavDropdown,FormControl} from 'react-bootstrap'
import img from "./nature.jpg"


function App() {
  return (


       
  <div className ="englobant">


<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Site</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About</Nav.Link>
      <NavDropdown title="Menu" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button className="sorry" variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>








<Form>
  <Form.Group> 
    <Form.Label   className="m"     >   Email Adress                 </Form.Label>
  <Form.Control   className="m"      type="email" placeholder= "write your email here"></Form.Control>
  </Form.Group>
  <Form.Group> 
    <Form.Label   className="m"     >   User name              </Form.Label>
  <Form.Control   className="m"     type="text" placeholder= " write your  user name"></Form.Control>
  </Form.Group>
<Form.Group>
<Form.Label   className="m"     >   Password              </Form.Label>
  <Form.Control   className="m"      type="password" placeholder= " write your password here"></Form.Control>
  </Form.Group>
</Form>
   
       
     
      


       
         
      <Button className="submit" variant ="secondary"> Submit</Button>  
        
      <img src={img} alt="not found" />
      
   
    </ div>
  );
}

export default App;
