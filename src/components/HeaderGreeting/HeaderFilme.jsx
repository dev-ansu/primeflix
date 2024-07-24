import "./style.css"
import {toast} from "react-toastify";

const HeaderFilme = ({filme})=>{

    const ano = (new Date(filme.release_date)).getFullYear();
    const releaseDate = (new Date(`${filme.release_date}T00:00:00`)).toLocaleDateString('pt-BR');
    const original_language = filme.original_language ? filme.original_language.toUpperCase():'';
    const genres = filme.genres ? filme.genres.map(genre => genre.name).join(", "):'';
    
    const saveMovie = (e)=>{
        e.preventDefault();
     
        const minhaLista = localStorage.getItem("@filmes")
        let filmesSalvos = JSON.parse(minhaLista) || [];
        const hasFilme = filmesSalvos.some(filmesSalvos => filmesSalvos.id == filme.id);
        if(hasFilme){
            toast.warning("Este filme já está na sua lista.");
            return;
        }else{
            filmesSalvos.push(filme);
            localStorage.setItem("@filmes", JSON.stringify(filmesSalvos))
            toast.success("Filme salvo com sucesso!");
        }
    }

    return (
        <div id="header-filme">
            <div className="filme-image">
                <div style={{border:"2px solid #fff"}} className="card">
                    <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt="" />
                </div>
            </div>
            <div className="filme-dados">
                <h2>{filme.title}<br></br>
                </h2>
                <span className="year-release">({ano})</span>
                <span className="release-date">{releaseDate} ({original_language}) - {genres}</span>
                <div className="actions">
                    <a target="_blank" href={`https://youtube.com/results?search_query=${filme.title} trailer`} className="btn btn-trailer"><i className="bi bi-tv"></i>Trailer</a>
                    <button onClick={saveMovie} target="_blank" className="btn btn-save"><i className="bi bi-plus"></i>Salvar</button>
                </div>
            </div>
        </div>
    )
}

export default HeaderFilme;