import { useEffect } from 'react'
import { Form, Container } from "react-bootstrap";

let q17_1 = "focus on the written message"
let q17_2 = "Read each line. To find key words related to various ideas "
let q18_1 = "I feel awkward and I want more information"
let q18_2 = "Able to make decisions based on the available information"
let q19_1 = "Slowly process your thoughts while talking about it"
let q19_2 = "speak out only when you have well thought about it"
let q20_1 = "Idea Issues"
let q20_2 = "People related issues"
let q21_1 = "I like to offer many ideas that are still lacking in clarity"
let q21_2 = "It takes the meeting time to discuss the details of the work neatly."
let q22_1 = "People get up early in the morning"
let q22_2 = "People stay up late"
let q23_1 = "I want to attend the meeting and comment on the meeting"
let q23_2 = "Fully prepared. And drew out the agenda on the subject of the meeting "
let q24_1 = "Good emotional ability"
let q24_2 = "Give priority to work"

let toggle = (l,id) => {
    l[id] === 1 ? l[id] = 2 : l[id] = 1
}

function Q3({ list, page }) {

    useEffect(() => {
        for (var i = 17;i < 25;i++) {
            list[i] = 1;
        }
        console.log(list)
    }, [page])

    return(
        <div>
            <Container fluid>
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>Question 17. When I read anything. I often?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,17)}}>
                            <option>{q17_1}</option>
                            <option>{q17_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>Question number 18. When I need to make an urgent decision, I often?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,18)}}>
                            <option>{q18_1}</option>
                            <option>{q18_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>Question number 19. In meetings, I usually?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,19)}}>
                            <option>{q19_1}</option>
                            <option>{q19_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>Question number 20. In my work, the issue that I prefer to spend more time is?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,20)}}>
                            <option>{q20_1}</option>
                            <option>{q20_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>Question number 21. In meetings, I am often annoyed by those who are?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,21)}}>
                            <option>{q21_1}</option>
                            <option>{q21_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>Question number 22. I like to be?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,22)}}>
                            <option>{q22_1}</option>
                            <option>{q22_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>Question 23. What is my form of preparation before attending meetings?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,23)}}>
                            <option>{q23_1}</option>
                            <option>{q23_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>Question number 24. At the meeting, I like the person who?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,24)}}>
                            <option>{q24_1}</option>
                            <option>{q24_2}</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Container>
        </div>
    );
}

export default Q3;