import React, { useEffect, useState } from 'react';
import './App.css';
import Menu from'./components/Menu';
import Recipes from'./components/Recipes';
import FoodCard from './components/FoodCard';
import Container from 'react-bootstrap/Container';
import { Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import AddNew from './components/AddNew';

function App() {
  const [url, setUrl] = useState<string>("");

function funcRef(){
    console.log("pathnamee");
    let url = window.location.pathname;
    let url2 = url.substring(1);
    let indexSlash = url2.indexOf("/");
    let id = url2.substring(indexSlash + 1);
    console.log(url)
    if(id==="sweets"||"main"||"soups"||"cocktails"){
      console.log(id)
       setUrl(id)
    }
  }

  return (
    <div className="App">
    <Container >
      <div className="row">
        <div className="col-md-2 col-lg-2 col-sm-4 bg-secondary h-auto">
   <Menu />
</div>
<div className="col-md-10 col-lg-10 col-sm-8 bg-light">
  {window.addEventListener("hashchange", funcRef, false)}
  {url?<Recipes url={url} />:null}
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
