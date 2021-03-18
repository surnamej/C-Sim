import { useState } from 'react'
import { Container, Form, Row, Col, Dropdown } from "react-bootstrap";


function Q7() {

    const [job, setJob] = useState('')

    return(
        <div>
            <Container fluid>
                <Row>
                    <Col align="right">
                        <h3>Career details</h3>
                    </Col>
                    <Col align='left'>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Choose a career
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick = {() => {setJob('Computer Graphic')}}>Computer Graphic</Dropdown.Item>
                                <Dropdown.Item onClick = {() => {setJob('Cyber Security')}}>Cyber Security</Dropdown.Item>
                                <Dropdown.Item onClick = {() => {setJob('Data Science')}}>Data Science</Dropdown.Item>
                                <Dropdown.Item onClick = {() => {setJob('Database Administrator')}}>Database Administrator</Dropdown.Item>
                                <Dropdown.Item onClick = {() => {setJob('Computer Graphic')}}>Computer Graphic</Dropdown.Item>
                                <Dropdown.Item onClick = {() => {setJob('Developing Software')}}>Developing Software</Dropdown.Item>
                                <Dropdown.Item onClick = {() => {setJob('Developing Hardware')}}>Developing Hardware</Dropdown.Item>
                                <Dropdown.Item onClick = {() => {setJob('Developing Website')}}>Developing Website</Dropdown.Item>
                                <Dropdown.Item onClick = {() => {setJob('Developing Game')}}>Developing Game</Dropdown.Item>
                                <Dropdown.Item onClick = {() => {setJob('E-Commerce/Digital Marketing')}}>E-Commerce/Digital Marketing</Dropdown.Item>

                                <Dropdown.Item onClick = {() => {setJob('IT Consultant')}}>IT Consultant</Dropdown.Item>
                                <Dropdown.Item onClick = {() => {setJob('IT management')}}>IT management</Dropdown.Item>
                                <Dropdown.Item onClick = {() => {setJob('IT Support')}}>IT Support</Dropdown.Item>
                                <Dropdown.Item onClick = {() => {setJob('Network')}}>Network</Dropdown.Item>
                                <Dropdown.Item onClick = {() => {setJob('QA ( Quality Assurance )')}}>QA ( Quality Assurance )</Dropdown.Item>
                                <Dropdown.Item onClick = {() => {setJob('SAP/ERP')}}>SAP/ERP</Dropdown.Item>
                                <Dropdown.Item onClick = {() => {setJob('System Analyst')}}>System Analyst</Dropdown.Item>
                                <Dropdown.Item onClick = {() => {setJob('User experience (UX) designer')}}>User experience (UX) designer</Dropdown.Item>
                                <Dropdown.Item onClick = {() => {setJob ('IT Course Instructor / IT Trainer')}}> IT Course Instructor / IT Trainer</Dropdown.Item>
                                <Dropdown.Item onClick = {() => {setJob ('Computer Design / Drawing / 3D Art / Animation')}}> Design / Computer Drawing / 3D Work / Animation</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                {
                    job === '' ? 
                    <div /> :
                    <div>
                        <hr />
                        <Row>
                            <Col align='center'>
                                <h5>Information of  {job}</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>{job} ข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูล
                                ข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูล
                                ข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูล
                                ข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูล
                                ข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูล
                                ข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูลข้อมูล
                                </p>
                            </Col>
                        </Row>
                    </div>
                }
            </Container>
        </div>
    );
}

export default Q7;