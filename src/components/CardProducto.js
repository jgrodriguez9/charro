import { Card, Col } from "react-bootstrap"

function CardProducto({items, pm}){
    return(
        items.map((item, i)=>(
            <Col xs="12" md="6" lg="4" key={i} className="mt-2 mb-4">            
                <h3 className={`${pm ? 'title-productam': 'title-product'}`}><span>{item.name_es}</span></h3>
                <Card className={`rounded-0 mt-2rem ${pm ?'bg-white-1 border-secondary text-dark1': 'bg-dark1 text-white-1 border-white'}`}>
                    <Card.Body>
                    <ul className="list-unstyled list-product mb-0">
                        {
                            item.productos.filter(el=>el.active).sort((a,b)=>{return a.orden-b.orden}).map((product, p)=>(
                            <li key={p}>
                                <h5 className="title">{product.name_es}</h5>
                                <h5 className="price">${product.precio}.00</h5>
                            </li>
                            ))
                        }                    
                    </ul>  
                    {item.observacion && <label className='font-italic  mt-3'>{item.observacion}</label>    }              
                    </Card.Body>
                </Card>
            </Col>
        ))
        
    )

}

export default CardProducto