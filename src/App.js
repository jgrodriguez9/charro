import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import CardProducto from './components/CardProducto';
import products from './data/product.json'
import productspm from './data/productpm.json'
import { useEffect, useState } from 'react';
import app from './firebase'
import firebase from 'firebase/app'
import "firebase/firestore"
import Loading from './loader/Loading'

function App() {
  const [loading, setLoading] = useState(true)
  const firebaseDB = firebase.firestore();
  const [menus, setMenus] = useState([])

  useEffect(()=>{
    setLoading(true)
    const menuS = async () =>{
      const menuCollection = await firebaseDB.collection("menu").where("active", "==", true).orderBy("orden").get()
      if(!menuCollection.empty){
        let arr = []
        menuCollection.forEach(doc=>{
            console.log(doc.data())
            //console.log(doc.id, " => ", doc.data());
            // let obj = {
            //     id: doc.id,
            //     menu: doc.data()
            // }
            arr.push(doc.data())
        })
        setMenus(arr)
        setLoading(false)
      }
    }

    menuS()
  },[])

  return (
    
      loading ? <Loading /> :
      <>
        {
          menus.map((item, i)=>(
            <section key={i} className="bg-dark1 text-white1">
              <Container fluid>
                {i===0 && <Row>
                  <Col xs="12" lg={{ span:"4", offset:"4"}} md={{ span:"8", offset:"2"}}>
                      <h1 className="text-center d-block text-menu">MENU</h1>
                      {/* <h2 className="subtext-menu"><span>{item.name_es}</span></h2>  */}
                  </Col>        
                </Row>}
                <Row>          
                  <CardProducto items={item.section.filter(el=>el.active).sort((a,b)=>{return a.orden - b.orden})} pm={false}/>
                </Row>
              </Container>
            </section>
          ))
        }
      </>
  );
}

export default App;
