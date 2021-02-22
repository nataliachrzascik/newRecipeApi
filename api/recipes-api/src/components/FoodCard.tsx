import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import './css/foodRecipes.css';
import axios from 'axios';

interface Idata{
    img:string;
    name:string;
    ingredients:Array<string>;
    preparation:string;
    id:number;
}

const FoodCard = () => {
    const [data, setData] = useState<Array<Idata>>([]);
    const [ready, setReady] = useState<boolean>(false);

    const url = window.location.hash;
    console.log(url)
    alert(url)
    const url2 = url.substring(1);
    const indexSlash = url2.indexOf("/");
    const id = url2.substring(indexSlash + 1);
    console.log(id)
    alert(id)
    
    const getBlogPost = () => {
        axios.get(`/search/product${id}`)
            .then((response) => {
                const data = response.data;
                setData(data);
                setReady(true)
            })
            .catch(() => {
                alert('Error received data! ');
            });
    }

    useEffect(() => {
        getBlogPost()
    }, []);
    return (

        <Container className="min-vh-100">
            {ready ? (
                data.map((element, k) => {
                    return (
                        <div key={k} className="card">
                            <h1 className="card-title">{element.name}</h1>
                            <div className="card-body">
                                <h3>Składniki: </h3>
                                {element.ingredients.map((one, k) => {
                                    return (
                                        <p key={k}>{one}</p>
                                    )
                                })}
                                <h3>Sposób przygotowania:</h3><p>{element.preparation}</p>
                                {element.img ? <img className="card-img-top" src={element.img} alt="Card image" /> : null}
                            </div>
                        </div>

                    )
                })
            ) : <i className="fas fa-4x fa-spinner fa-spin"></i>}
        </Container>


    )
};
export default FoodCard; 