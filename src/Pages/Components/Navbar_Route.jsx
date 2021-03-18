import NavbarTH from './Navbar_TH';
import NavbarEN from './Navbar_EN';

function Route({ lang, setLang, setPage }) {
    return(
        <div>
            {
                lang === "TH" ? <NavbarTH setLang={setLang} setPage={setPage}/> : <NavbarEN setLang={setLang} setPage={setPage}/>
            }
        </div>
    )
}

export default Route;