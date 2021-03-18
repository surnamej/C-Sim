import { useEffect } from 'react'
import { Form, Container } from "react-bootstrap";

let q9_1 = "Make lists and plans before you start working. And dissatisfied if it was modified from the plan"
let q9_2 = "Avoid making plans, but will let the work progress on its own while doing so."
let q10_1 = "Easily see the big picture"
let q10_2 = "It is easy to understand deeply at any point in a situation."
let q11_1 = "Felt that it was the noise that interfered with the work"
let q11_2 = "Don't mind answering that phone call"
let q12_1 = "Analysis"
let q12_2 = "Understanding"
let q13_1 = "Do it consistently"
let q13_2 = "Do your best, but with intermittent stops."
let q14_1 = "Take them to check with my old experiences and see if they are similar."
let q14_2 = "Analyze and evaluate the content heard"
let q15_1 = "Do it"
let q15_2 = "Try to reflect on that new idea several times."
let q16_1 = "Narrow the framework In order to see the picture more clearly and to the point"
let q16_2 = "Expand the scope of work In order to be able to cover all relevant issues"

let toggle = (l,id) => {
    l[id] === 1 ? l[id] = 2 : l[id] = 1
}

function Q2({ list, page }) {

    useEffect(() => {
        for (var i = 9;i < 17;i++) {
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
                            <p>Question number 9. Am I usually?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,9)}}>
                            <option>{q9_1}</option>
                            <option>{q9_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>Question 10. When discussing problems with friends. I can?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,10)}}>
                            <option>{q10_1}</option>
                            <option>{q10_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>Question 11. When the phone rings at work or at home,I usually?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,11)}}>
                            <option>{q11_1}</option>
                            <option>{q11_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>Question 12. Which word would describe me better?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,12)}}>
                            <option>{q12_1}</option>
                            <option>{q12_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>Question number 13. When I do my homework I often?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,13)}}>
                            <option>{q13_1}</option>
                            <option>{q13_2}</option>
                        </Form.Control>
                    </Form.Group>
                    
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>Question number 14. When I hear someone talk about a subject, I usually try  to?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,14)}}>
                            <option>{q14_1}</option>
                            <option>{q14_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>Question number 15. When I came up with a new idea. I often?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,15)}}>
                            <option>{q15_1}</option>
                            <option>{q15_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>Question number 16. When working on a project. I often?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,16)}}>
                            <option>{q16_1}</option>
                            <option>{q16_2}</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Container>
        </div>
    );
}

export default Q2;