import { useEffect } from 'react'
import { Form, Container } from "react-bootstrap";

let q25_1 = "กระตุ้นการใช้ปัญญาในการทำงานให้กับข้าพเจ้า"
let q25_2 = "ข้าพเจ้าผูกพันกับเป้าหมายและพันธกิจ"
let q26_1 = "วางแผนล่วงหน้าว่าจะทำอะไรบ้าง"
let q26_2 = "ไปดูว่ามีอะไรเกิดขึ้นบ้าง แล้วจึงตัดสินใจเข้าร่วมตามนั้น"
let q27_1 = "ชอบออกไปพบปะผู้คน"
let q27_2 = "ชอบใช้ความคิดไตร่ตรอง"
let q28_1 = "เต็มไปด้วยความคิดใหม่ ๆ"
let q28_2 = "เป็นนักปฏิบัติที่ดี"
let q29_1 = "สังคม"
let q29_2 = "ทฤษฎี"
let q30_1 = "ความเป็นเจ้าความคิด"
let q30_2 = "ความเป็นนักปฏิบัติ"
let q31_1 = "ความเป็นรูปแบบ"
let q31_2 = "ความยืดหยุ่น"
let q32_1 = "มีความคล่องแคล่ว"
let q32_2 = "มีสมาธิ"

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
                            <p>คำถามข้อที่ 25. ข้าพเจ้าชอบการทำงานกับหน่วยงานที่?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,25)}}>
                            <option>{q25_1}</option>
                            <option>{q25_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>คำถามข้อที่ 26. ช่วงสุดสัปดาห์ ข้าพเจ้ามักจะ?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,26)}}>
                            <option>{q26_1}</option>
                            <option>{q26_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>คำถามข้อที่ 27. ข้าพเจ้าเป็นคนประเภท?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,27)}}>
                            <option>{q27_1}</option>
                            <option>{q27_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>คำถามข้อที่ 28. ข้าพเจ้าชอบทำงานกับหัวหน้าที่?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,28)}}>
                            <option>{q28_1}</option>
                            <option>{q28_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>คำถามข้อที่ 29. ข้าพเจ้าเลือก?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,29)}}>
                            <option>{q29_1}</option>
                            <option>{q29_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>คำถามข้อที่ 30. ข้าพเจ้าเป็นคนที่มี?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,30)}}>
                            <option>{q30_1}</option>
                            <option>{q30_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>คำถามข้อที่ 31. ข้าพเจ้ามักจะชอบ?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,31)}}>
                            <option>{q31_1}</option>
                            <option>{q31_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>คำถามข้อที่ 32. ข้าพเจ้ามักจะ?</p>
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