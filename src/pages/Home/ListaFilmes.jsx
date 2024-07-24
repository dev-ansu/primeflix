import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";

const ListaFilmes = ({filmes})=>{
    const {search} = useContext(SearchContext)
    filmes = search ? filmes.filter(filme =>{
        if(String(filme.title).normalize("NFD").toLowerCase().includes(String(search).normalize("NFD").toLowerCase())){
            return filme;
        }
    }):filmes;

    return (
        <>
        {filmes.map(filme =>(
            <a key={filme.id} href={`/filme/${filme.id}`} className="filme-link">
            <article className="card scale">
                <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                <div className="card-footer">
                    <strong>{filme.title}</strong>
                    <span className="filme-data"></span>
                </div>
            </article>
            </a>
        ))}
        </>
    )
}


export default ListaFilmes;