import { Container, Form, Row, Col } from "react-bootstrap";
import { useEffect } from 'react'
let toggle = (l,id) => {
    l[id] === 1 ? l[id] = 0 : l[id] = 1
}

function Q5({ list, page }) {

    useEffect(() => {
        list.map((l,i) => {
            list[i] = 0;
        })
        console.log(list)
    }, [page])

    return(
        <div>
            <Container fluid>
                <Form>
                    <Row>
                        <Col align="center"><Form.Label><p>เลือกวิชาที่ชอบ</p></Form.Label></Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                            <Form.Check type = 'checkbox' onClick={() => {toggle(list,0)}} label = 'Algorithm'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,1)}} label = 'Computer Architecture'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,2)}} label = 'Computer Networks'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,3)}} label = 'Computer Engineering Probability and Statistics'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,4)}} label = 'Computer Programming (Learning C++ / or other)'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,5)}} label = 'Data and Computer Communication'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,6)}} label = 'Data Structures'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,7)}} label = 'Database System'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,8)}} label = 'Discrete Mathematics'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,9)}} label = 'Logic and Digital Circuits'/>

                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,10)}} label = 'Microprocessor and Interfacing + Embedded System Laboratory'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,11)}} label = 'Numerical Computation'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,12)}} label = 'Object-Oriented Programming'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,13)}} label = 'Operating System'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,14)}} label = 'Software Engineering'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,15)}} label = 'Data Centric Application Development'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,16)}} label = 'Data Warehousing and Business Intelligence'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,17)}} label = 'Information Technology Service Management'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,18)}} label = 'Platform Programming'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,19)}} label = 'Wireless and Broadband Computer Networks'/>

                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,20)}} label = 'Advanced Database Systems'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,21)}} label = 'Advanced Information Systems and Network Technology'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,22)}} label = 'Basic Compiler Design'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,23)}} label = 'Bioinformatics Programming'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,24)}} label = 'Broadband Communication Networks'/>
                            </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group>
                            
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,25)}} label = 'Computer-Aided Manufacturing'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,26)}} label = 'Computer Hardware Design'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,27)}} label = 'Computer Graphics'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,28)}} label = 'Computer Network Design and Management'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,29)}} label = 'Computer Network Traffic Analysis'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,30)}} label = 'Data Mining'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,31)}} label = 'Digital Image and Video Compression'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,32)}} label = 'Digital Image Processing'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,33)}} label = 'Digital System Design'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,34)}} label = 'Information Systems'/>

                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,35)}} label = 'Introduction to Computational Intelligence for CPE'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,36)}} label = 'Introduction to Human-Computer Interaction'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,37)}} label = 'Introduction to Neuro-Fuzzy Systems'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,38)}} label = 'Machine Vision'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,39)}} label = 'Mobile Application Development'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,40)}} label = 'Network and Information Security'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,41)}} label = 'Network Programming'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,42)}} label = 'Personal Software Process Improvement'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,43)}} label = 'Robotics'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,44)}} label = 'Signal and Systems'/>

                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,45)}} label = 'Software Project Management'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,46)}} label = 'Software Testing for Computer Engineering'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,47)}} label = 'System Analysis and Design for Computer Engineering'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,48)}} label = 'Visual and Interactive Programming'/>
                                <Form.Check type = 'checkbox' onClick={() => {toggle(list,49)}} label = 'Wireless Networks'/>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
}

export default Q5;