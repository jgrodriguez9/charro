import { Card, Col } from "react-bootstrap"

function CardProducto({items, pm}){
    console.log(items)

    return(
        items.map((item, i)=>(
            <Col xs="12" md="6" lg="4" key={i} className="mb-4">            
                <h3 className={`${pm ? 'title-product' : 'title-productam'}`}><span>{item.name}</span></h3>
                <Card className={`rounded-0 mt-2rem ${pm ?'bg-dark1 text-white-1 border-white' : 'bg-white-1 border-secondary text-dark1'}`}>
                    <Card.Body>
                    <ul className="list-unstyled list-product">
                        {
                            item.products.map((product, p)=>(
                            <li key={p}>
                                <h5 className="title">{product.name}</h5>
                                <h5 className="price">{product.precio}</h5>
                            </li>
                            ))
                        }                    
                    </ul>  
                    <label className="font-italic">{item.descripcion}</label>                  
                    </Card.Body>
                </Card>
            </Col>
        ))
        
    )

}

export default CardProducto