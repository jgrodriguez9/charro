import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import CardProducto from './components/CardProducto';
import products from './data/product.json'
import productspm from './data/productpm.json'

function App() {
  return (
    <>
      <section className="bg-white1 text-dark1">
        <Container fluid>
          <Row>
            <Col xs="12" lg={{ span:"4", offset:"4"}} md={{ span:"8", offset:"2"}}>
                <h1 className="text-center d-block text-menu">MENU</h1>
                <h2 className="subtext-menu-am"><span>AM</span></h2> 
            </Col>        
          </Row>

          <Row className="mt-5">          
            <CardProducto items={products} pm={false}/>
          </Row>
        </Container>
      </section>
      <section className="bg-dark1 text-white1">
        <Container fluid>
            <Row>
              <Col xs="12" lg={{ span:"4", offset:"4"}} md={{ span:"8", offset:"2"}}>
                  <h1 className="text-center d-block text-menu">MENU</h1>
                  <h2 className="subtext-menu"><span>PM</span></h2> 
              </Col>        
            </Row>

            <Row className="mt-5">          
              <CardProducto items={productspm} pm={true}/>
            </Row>
          </Container>
      </section>
    </>
    
    
    

  );
}

export default App;
