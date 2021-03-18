import { useEffect } from 'react'
import { Form, Container } from "react-bootstrap";

let q1_1 = "แก้ปัญหาใหม่ๆที่มีความซับซ้อน"
let q1_2 = "เลือกทำงานที่เคยทำสำเร็จมาแล้ว"
let q2_1 = "ทำงานตามลำพังในที่สงบ"
let q2_2 = "อยู่ตรงที่งานกำลังดำเนินอยู่"
let q3_1 = "ได้สร้างและกำหนดเกณฑ์การทำงานและการตัดสินใจไว้ให้แล้ว"
let q3_2 = "ใส่ใจต่อความต้องการและช่วยเหลือลูกน้องรายบุคคล"
let q4_1 = "ทำให้เสร็จและปิดโครงการทันที"
let q4_2 = "ไม่รีบปิดโครงการเผื่อไว้หากต้องการปรับปรุงเปลี่ยนแปลง"
let q5_1 = "การคิดเชิงเหตุผล การมีข้อมูลและความคิดเห็น"
let q5_2 = "ความรู้สึกและค่านิยมของคน"
let q6_1 = "คิดทบทวนหลายครั้งก่อนที่จะตัดสินใจว่าจะเริ่มดำเนินการอย่างไร"
let q6_2 = "เริ่มต้นลงมือทำงานทันที พร้อมกับคิดไปทำไปทีละขั้น"
let q7_1 = "คงวิธีการควบคุมให้มากที่สุดเท่าที่จะเป็นไปได้"
let q7_2 = "ตรวจสอบหาแนวทางต่าง ๆ ที่สามารถนำมาใช้ดำเนินการ"
let q8_1 = "ทำพร้อมกันหลายโครงการ และพยายามหาความรู้จากแต่ละโครงการให้มากที่สุดเท่าที่จะทำได้"
let q8_2 = "เลือกทำโครงการที่มีความท้าทายมากที่สุดเพียงโครงการเดียวและจะทุ่มเทอย่างเต็มที่"

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
                <h1>แบบทดสอบ</h1>
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>คำถามข้อที่ 1. ข้าพเจ้าชอบที่จะ?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,1)}}>
                            <option>{q1_1}</option>
                            <option>{q1_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>คำถามข้อที่ 2. ข้าพเจ้าชอบที่จะ?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,2)}}>
                            <option>{q2_1}</option>
                            <option>{q2_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>คำถามข้อที่ 3. ข้าพเจ้าชอบหัวหน้าที่?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,3)}}>
                            <option>{q3_1}</option>
                            <option>{q3_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>คำถามข้อที่ 4. เมื่อข้าพเจ้าทำงานเกี่ยวกับโครงการ ข้าพเจ้าต้องการ?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,4)}}>
                            <option>{q4_1}</option>
                            <option>{q4_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>คำถามข้อที่ 5. เมื่อต้องตัดสินใจ สิ่งสำคัญที่สุดที่ต้องคำนึงถึง คือ?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,5)}}>
                            <option>{q5_1}</option>
                            <option>{q5_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>คำถามข้อที่ 6. เมื่อต้องทำงานโครงการ ข้าพเจ้าจะ?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,6)}}>
                            <option>{q6_1}</option>
                            <option>{q6_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>คำถามข้อที่ 7. เมื่อต้องทำงานโครงการ ข้าพเจ้าจะ?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,7)}}>
                            <option>{q7_1}</option>
                            <option>{q7_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>คำถามข้อที่ 8. ในการทำงานของข้าพเจ้า ข้าพเจ้ามักจะ?</p>
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