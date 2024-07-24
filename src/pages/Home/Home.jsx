import {useEffect, useState} from "react";
import api from "../../services/api";
import "./style.css"
import Loading from "../Loading"
import HeaderGreeting from "../../components/HeaderGreeting/HeaderGreeting";
import ListaFilmes from "./ListaFilmes";

const Home = ()=>{
    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        const loadFilmes = async()=>{
            const response = await api.get("movie/now_playing",{
                params:{
                    language:'pt-BR',
                }
            });
            setFilmes(response.data.results);
            setLoading(false)
        }
        loadFilmes();
    },[])

    return (
        <>
        <HeaderGreeting />
            <div className="container">
                <div className="lista-filmes">
                    {!loading ?
                    <ListaFilmes filmes={filmes} />:[...Array(20).keys()].map( load => (
                        <Loading />
                    )) 
                    }
                </div>
            </div>
        </>
    )
}

export default Home;