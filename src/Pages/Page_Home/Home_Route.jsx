import HomeTH from './Home_TH';

import HomeEn from './Home_EN';

function Route({ lang, setPage }) {
    return(
        <div>
            {
                lang === "TH" ? <HomeTH setPage={setPage}/> : <HomeEn setPage={setPage}/>
            }
        </div>
    )
}

export default Route;