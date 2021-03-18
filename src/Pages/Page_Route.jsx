import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Home from './Page_Home/Home_Route';
import Page from './Web/Web_Route';

function Route({ lang, page, setPage }) {

    var answerList = new Array();

    answerList.push('answers');
    for(var i = 0; i < 32; i++) {
        answerList.push(1);
    }

    var selectList = new Array();

    for(var i = 0; i < 50; i++) {
        selectList.push(0);   
    }

    const [choiceList, setList] = useState(answerList);
    const [select, setSelect] = useState(selectList);
 
    return(
        <div>
            {
                page === 0 ? <Home lang={lang} setPage={setPage}/> :
                <Page lang={lang} page={page} setPage={setPage} choiceList={choiceList} select={select}/>
            }
        </div>
    );
}

export default Route;