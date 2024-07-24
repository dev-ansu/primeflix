import { useEffect, useState } from "react";
import "./style.css";
import {Link} from "react-router-dom"
import {toast} from "react-toastify"

const Favoritos = ()=>{
    const [filmes, setFilmes] = useState();

    const loadFilmes = ()=>{
        const filmesSalvos = localStorage.getItem("@filmes");
        let filmes = JSON.parse(filmesSalvos) || [];
        setFilmes(filmes);
    }

    useEffect(()=>{
        loadFilmes();
    },[]);

 
    const removeMovie = (id)=>{
        const newFilmes = filmes.filter( filme => filme.id != id);
        setFilmes(newFilmes);
        localStorage.setItem("@filmes", JSON.stringify(newFilmes));
        toast.success("Filme removido com sucesso.");

    }

    return (
        <div className="container">
            <h1>Favoritos</h1>
            <div className="lista-filmes">
                <ul className="filmes">
                {filmes ? filmes.map(filme => (
                    <li>
                        {filme.title}
                        <div className="actions">
                            <Link to={`/filme/${filme.id}`} className="nav-link">Detalhes</Link>
                            <button onClick={()=> removeMovie(filme.id)} className="btn-excluir">Excluir</button>
                        </div>
                    </li>
                )):''}
                </ul>
            </div>
        </div>
    )
}

export default Favoritos;