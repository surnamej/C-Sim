import Route from './Pages/Page_Route';
import NavRoute from './Pages/Components/Navbar_Route';
import './app.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootswatch/dist/minty/bootstrap.css";

import { useState } from 'react';

function App() {

  const [page, setPage] = useState(0);
  const [lang, setLang] = useState("TH");


  /*return (
    <div className="App">
      <Unavbar change = {setPage}/>
      <Route page = {page} change={setPage}/>
      <h1 align = 'center'>{page}</h1>
    </div>
  );*/
  return(
    <div>
      <NavRoute lang={lang} setLang={setLang} setPage={setPage}/>
      <Route lang={lang} page={page} setPage={setPage}/>
      <p></p>
    </div>
  );
  
}

export default App;

