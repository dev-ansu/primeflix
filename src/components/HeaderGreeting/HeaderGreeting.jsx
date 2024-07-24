import HeaderFilme from "./HeaderFilme";
import background from "../../assets/img/filme-background.jpg";
import './style.css'
import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";

const HeaderGreeting = (props)=>{
    const {search, handleSearch} = useContext(SearchContext);
    

    return(
        <div style={{backgroundImage: `linear-gradient(to top,rgba(0,0,0,0.3), 90%, rgba(255,255,255,0.1)), linear-gradient(rgba(35, 35, 35,0.65), 90%, red), url(${props.filme ? "https://image.tmdb.org/t/p/original/"+props.filme.backdrop_path:background })`}}  id="header-greeting">
            <div id="header-greeting-content">
                {!props.filme ?
                <>
                    <div className="form-group">
                    <h1>Bem-vindo(a).</h1>
                        <input value={search} onChange={handleSearch} type="text" className="form-control" id="search-movie" placeholder="Buscar filme" />
                    </div>
                    <div id="image-attribution">
                        Imagem de <a href="https://br.freepik.com/fotos-gratis/vista-de-3d-xicara-de-pipoca-com-assento-de-cinema_71888707.htm#query=filmes&position=0&from_view=keyword&track=sph&uuid=437a51ed-f0c7-4904-8021-ad03d90c3f94">Freepik</a>
                    </div>
                </>
                :
                    <HeaderFilme filme={props.filme} />                
                }
            </div>
        </div>
    )
}

export default HeaderGreeting;