import { Col, Container, Row } from "react-bootstrap";

import Before from '../Components/Button_Before';
import Next from '../Components/Button_Next';

import TH_1 from './Page_1_TH';
import TH_2 from './Page_2_TH';
import TH_3 from './Page_3_TH';
import TH_4 from './Page_4_TH';
import TH_5 from './Page_5_TH';
import TH_6 from './Page_6_TH';
import TH_7 from './Page_7_TH';
import EN_1 from './Page_1_EN';
import EN_2 from './Page_2_EN';
import EN_3 from './Page_3_EN';
import EN_4 from './Page_4_EN';
import EN_5 from './Page_5_EN';
import EN_6 from './Page_6_EN';
import EN_7 from './Page_7_EN';

function Route({ lang, page, setPage, choiceList, select }){
    return(
        <Container align='left'>
            <Row>
                <br />
            </Row>
            <Row className='justify-content-md-center'>
                <Col />
                <Col xs={10}>
                    {
                        lang === "TH" ? <div>
                            {
                                page === 1 ? <TH_1 list={choiceList} page={page}/> :
                                page === 2 ? <TH_2 list={choiceList} page={page}/> :
                                page === 3 ? <TH_3 list={choiceList} page={page}/> :
                                page === 4 ? <TH_4 list={choiceList} page={page}/> :
                                page === 5 ? <TH_5 list={select} page={page}/> :
                                page === 6 ? <TH_6 list={choiceList} page={page} select={select}/> :
                                page === 7 ? <TH_7 list={choiceList} page={page}/> :
                                <div />
                            }
                        </div> : <div>
                            {
                                page === 1 ? <EN_1 list={choiceList} page={page}/> :
                                page === 2 ? <EN_2 list={choiceList} page={page}/> :
                                page === 3 ? <EN_3 list={choiceList} page={page}/> :
                                page === 4 ? <EN_4 list={choiceList} page={page}/> :
                                page === 5 ? <EN_5 list={select} page={page}/> :
                                page === 6 ? <EN_6 list={choiceList} page={page} select={select}/> :
                                page === 7 ? <EN_7 list={choiceList} page={page}/> :
                                <div />
                            }
                        </div>
                    }
                </Col>
                <Col />
            </Row>
                <hr />
                {
                    page === 0 ? <div /> :
                    page < 6 ?
                    <div>
                        <Row>
                            <Col align = 'left'>
                                {page > 1 ? <Before lang = {lang} page = {page} change = {setPage}/> : <div />}
                            </Col>
                            <Col>
                            </Col>
                            <Col align = 'right'> 
                                <Next lang = {lang} page = {page} change = {setPage}/>
                            </Col>
                        </Row>
                    </div> : <div />
                }
        </Container>
    )
}

export default Route;