import React, {useState, useEffect } from 'react';
import './App.css';
import Menu from'./components/Menu';
import Recipes from'./components/Recipes';
import FoodCard from './components/FoodCard';
import Container from 'react-bootstrap/Container';
import { Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import AddNew from './components/AddNew';
import axios from 'axios';
import background from "./components/css/pot.jpg";

import { useHistory } from 'react-router-dom'

interface Iprops {
  url: string;
}
interface Idata{
  img:string;
  name:string;
  id:number;
}

function App() {
  const [url, setUrl] = useState<string>("");
  const [posts, setPosts] = useState<Array<Idata>>([]);
  const [ready, setReady] = useState<boolean>(false);

  const history = useHistory();
  useEffect(() => {
    return history.listen((location) => { 
       //console.log(`You changed the page to: ${location.pathname}`) 
       let pathname=location.pathname.slice(1);
       if(pathname==="sweets"||"main"||"soups"||"cocktails"){
         setUrl(pathname);
         axios.get(`/all/api${pathname}`)
         .then((response) => {
             const data = response.data;
             setPosts(data);
             setReady(true)
         })
         .catch(() => {
             alert(`Error received data! `);
         });
        console.log(`You changed the page to: ${pathname}`);
        //błąd pochodzi z backendu
       }
       
    }) 
 },[history])
  return (
    <div className="App">
    <Container >
      <div className="row">
        <div className="col-md-2 col-lg-2 col-sm-4 bg-secondary h-auto">
   <Menu />
</div>
<div className="col-md-10 col-lg-10 col-sm-8 bg-light">

{ready ? (
                posts?(posts.map((element, k) => {
                    return (

                        <div key={k} className="card">
                            <img className="card-img-top" src={element.img ? element.img :background} alt="Card image" />
                            <div className="card-body">
                                <h5 className="card-title">{element.name}</h5>
                            </div>
                        </div>
                    )
                })):null
            ) : <i className="fas fa-4x fa-spinner fa-spin"></i>}

  <Switch>
    <Route exact path="/"><MainPage/></Route>
  </Switch>
  <Switch>
    <Route exact path="/sweets" >
    <Recipes url="sweets"/>
    </Route>
    <Route exact path="/main" >
    <Recipes url="main"/>
    </Route>
    <Route exact path="/soups" >
    <Recipes url="soups"/>
    </Route>
    <Route exact path="/cocktails" >
    <Recipes url="cocktails"/>
    </Route>
    <Route path="/(sweets|main|soups|cocktails)/(.*)" ><FoodCard /></Route>
    <Route path="/add" ><AddNew /></Route>
  </Switch>
</div>
</div>
  </Container>
    </div>
  );
}

export default App;
