import { useEffect } from 'react'
import { Form, Container } from "react-bootstrap";

let q1_1 = "Solve new problems that are complicated."
let q1_2 = "Choose the work that I have previously completed."
let q2_1 = "Working alone in a quiet place"
let q2_2 = "Right where the work is in progress"
let q3_1 = "Have created and set the criteria for work and decision making"
let q3_2 = "Pay attention to needs and help individual employees."
let q4_1 = "Complete and close the project immediately."
let q4_2 = "Do not hurry to close the project in case of wanting to improve and changeง"
let q5_1 = "Reasoning,the presence of information and opinions"
let q5_2 = "Feelings and values of people"
let q6_1 = "Think twice before deciding how to take action."
let q6_2 = "Start working immediately Along with thinking about going step by step"
let q7_1 = "Maintaining as much control as possible"
let q7_2 = "Check out what actions can be taken."
let q8_1 = "Doing multiple projects at the same time and try to get as much knowledge from each project as possible"
let q8_2 = "Choose to take on just one of the most challenging projects, and will be fully dedicated."

let toggle = (l,id) => {
    l[id] === 1 ? l[id] = 2 : l[id] = 1
}

function Q1({ list, page }) {

    useEffect(() => {
        for (var i = 1;i < 9;i++) {
            list[i] = 1;
        }
        console.log(list)
    }, [page])

    return(
        <div>
            <Container fluid>
                <h1>Test</h1>
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>Question number 1. I like to?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,1)}}>
                            <option>{q1_1}</option>
                            <option>{q1_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>Question number 2. I like to?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,2)}}>
                            <option>{q2_1}</option>
                            <option>{q2_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>Question number 3. I like that boss?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,3)}}>
                            <option>{q3_1}</option>
                            <option>{q3_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>Question No. 4. When I work on a project I want?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,4)}}>
                            <option>{q4_1}</option>
                            <option>{q4_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>Question number 5. When making a decision What is the most important thing to consider?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,5)}}>
                            <option>{q5_1}</option>
                            <option>{q5_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>Question 6. When I have to work on a project, I will?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,6)}}>
                            <option>{q6_1}</option>
                            <option>{q6_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>Question 7. When I have to work on a project, I will?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,7)}}>
                            <option>{q7_1}</option>
                            <option>{q7_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>Question 8. In my work I often?</p>
                        </Form.Label>
                        <Form.Control as="select"  onChange = {() => {toggle(list,8)}}>
                            <option>{q8_1}</option>
                            <option>{q8_2}</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Container>
        </div>
    );
}

export default Q1;