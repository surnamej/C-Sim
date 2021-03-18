import { useEffect } from 'react'
import { Form, Container } from "react-bootstrap";

let q25_1 = "Stimulate intelligence in my work for me"
let q25_2 = "I am committed to goals and missions"
let q26_1 = "Plan ahead what will do"
let q26_2 = "Let's go see what happens. And then decided to join accordingly. "
let q27_1 = "Like meeting people"
let q27_2 = "Pondering"
let q28_1 = "full of new ideas"
let q28_2 = "Be a good worker"
let q29_1 = "social"
let q29_2 = "theory"
let q30_1 = "Thoughtfulness"
let q30_2 = "pragmatism"
let q31_1 = "Pattern Style"
let q31_2 = "flexibility"
let q32_1 = "fluency"
let q32_2 = "Concentrate"
let toggle = (l,id) => {
    l[id] === 1 ? l[id] = 2 : l[id] = 1
}

function Q4({ list, page }) {

    useEffect(() => {
        for (var i = 25;i < 33;i++) {
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
                            <p>Question number 25. I like working with that agency?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,25)}}>
                            <option>{q25_1}</option>
                            <option>{q25_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>Question number 26. On the weekend I often?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,26)}}>
                            <option>{q26_1}</option>
                            <option>{q26_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>Question number 27, what kind of person am I?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,27)}}>
                            <option>{q27_1}</option>
                            <option>{q27_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>Question number 28. I like to work with a supervisor that?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,28)}}>
                            <option>{q28_1}</option>
                            <option>{q28_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>Question number 29. I choose?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,29)}}>
                            <option>{q29_1}</option>
                            <option>{q29_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>Question number 30. Am I a person who has?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,30)}}>
                            <option>{q30_1}</option>
                            <option>{q30_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>Question number 31. I tend to like it?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,31)}}>
                            <option>{q31_1}</option>
                            <option>{q31_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>Question number 32. Am I usually?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,32)}}>
                            <option>{q32_1}</option>
                            <option>{q32_2}</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Container>
        </div>
    );
}

export default Q4;