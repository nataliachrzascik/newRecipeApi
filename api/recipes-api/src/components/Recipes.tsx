import { render } from '@testing-library/react';
import React, { useState, useEffect,FunctionComponent } from 'react';
import Container from 'react-bootstrap/Container';
import './css/foodRecipes.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import background from "./css/pot.jpg";

interface Iprops {
    url: string;
}
interface Idata{
    img:string;
    name:string;
    id:number;
}

const Recipes=(props:Iprops)=> {

    const [posts, setPosts] = useState<Array<Idata>>([]);
    const [ready, setReady] = useState<boolean>(false);

    const getBlogPost = () => {

        axios.get(`/all/api${props.url}`)
            .then((response) => {
                const data = response.data;
                setPosts(data);
                setReady(true)
            })
            .catch(() => {
                alert(`Error received data! ${props.url} `);
            });

    }

    useEffect(() => {
        getBlogPost();

    }, [props.url]);
    return (
        <Container className="col-sm-10 col-lg-8 col-xl-8 min-vh-100">
            {ready ? (console.log(posts),console.log(typeof(posts)),
                posts?(posts.map((element, k) => {
                    return (

                        <div key={k} className="card">
                            <img className="card-img-top" src={element.img ? element.img : background} alt="Card image" />
                            <div className="card-body">
                                <h5 className="card-title">{element.name}</h5>
                                <Link to={`/${props.url}/${element.id}`} className="btn btn-primary">
                                    Zobacz przepis
                                    </Link>
                            </div>
                        </div>
                    )
                })):null
            ) : <i className="fas fa-4x fa-spinner fa-spin"></i>}
        </Container>
    )
};
export default Recipes; 