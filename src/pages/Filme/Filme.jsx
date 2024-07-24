import { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom"
import HeaderGreeting from "../../components/HeaderGreeting/HeaderGreeting";
import api from "../../services/api";
import "./style.css"
import Loading from "../Loading";

const Filme = ()=>{
    const {id} = useParams();
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    
  

    useEffect(()=>{
        const loadFilme = async ()=>{
            await api.get(`movie/${id}`,{
                params:{
                    language:'pt-BR',
                }
            }).then((res)=>{
                setFilme(res.data);
                setLoading(false)
            }).catch(()=>{
                navigate("/",{replace:true})
            })
        }
        loadFilme();
    },[])

    return (
        <>
        {!loading ?
            <>
            <HeaderGreeting filme={filme} />
            <div className="sinopse">
                <h3>Sinopse</h3>    
                <p >
                    {filme.overview}
                </p>
                <span className="average"><i className="bi bi-check-square-fill"></i>{filme.vote_average ? filme.vote_average.toFixed(2):''}/10</span>
            </div>
            </>: <h1>Carregando detalhes...</h1>
            }
        </>
    )
}

export default Filme;