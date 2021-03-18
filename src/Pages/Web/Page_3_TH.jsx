import { useEffect } from 'react'
import { Form, Container } from "react-bootstrap";

let q17_1 = "เพ่งความคิดไปยังข้อความที่เขียนนั้น"
let q17_2 = "อ่านแต่ละบรรทัด เพื่อหาคำสำคัญที่เกี่ยวข้องกับความคิดต่าง ๆ"
let q18_1 = "รู้สึกอึดอัดใจและอยากได้ข้อมูลเพิ่มเติม"
let q18_2 = "สามารถตัดสินใจได้จากข้อมูลเท่าที่มีอยู่"
let q19_1 = "ค่อย ๆ ประมวลความคิดตนเองในขณะที่พูดถึงเรื่องนั้น"
let q19_2 = "พูดออกไปก็ต่อเมื่อได้ใคร่ครวญความคิดเกี่ยวกับเรื่องนั้นอย่างดีแล้ว"
let q20_1 = "ประเด็นที่เกี่ยวกับความคิด"
let q20_2 = "ประเด็นที่เกี่ยวกับคน"
let q21_1 = "ชอบเสนอความคิดมากมายที่ยังขาดความชัดเจน"
let q21_2 = "ทำให้เสียเวลาที่ประชุมไปกับการพูดถึงรายละเอียดของการทำงานอย่างถี่ยิบ"
let q22_1 = "คนตื่นเช้า"
let q22_2 = "คนนอนดึก"
let q23_1 = "อยากเข้าประชุมและได้แสดงความคิดเห็นต่อที่ประชุม"
let q23_2 = "เตรียมตัวพร้อมเต็มที่ และขีดเขียนวาระหัวข้อการประชุมนั้นออกมา"
let q24_1 = "สามารถแสดงออกทางอารมณ์ได้ดี"
let q24_2 = "ให้ความสำคัญกับงาน"

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
                            <p>คำถามข้อที่ 17. เมื่อข้าพเจ้าอ่านอะไรก็แล้วแต่ ข้าพเจ้ามักจะ?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,17)}}>
                            <option>{q17_1}</option>
                            <option>{q17_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>คำถามข้อที่ 18. เมื่อข้าพเจ้าจำเป็นต้องตัดสินใจโดยเร่งด่วน ข้าพเจ้ามัก?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,18)}}>
                            <option>{q18_1}</option>
                            <option>{q18_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>คำถามข้อที่ 19. ในการประชุม ข้าพเจ้ามักจะ?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,19)}}>
                            <option>{q19_1}</option>
                            <option>{q19_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>คำถามข้อที่ 20. ในการทำงาน ประเด็นที่ข้าพเจ้าชอบใช้เวลาค่อนข้างมากกว่าคือ?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,20)}}>
                            <option>{q20_1}</option>
                            <option>{q20_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>คำถามข้อที่ 21. ในการประชุม ข้าพเจ้ามักถูกรบกวนให้รำคาญใจกับคนที่?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,21)}}>
                            <option>{q21_1}</option>
                            <option>{q21_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>คำถามข้อที่ 22. ข้าพเจ้าชอบเป็น?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,22)}}>
                            <option>{q22_1}</option>
                            <option>{q22_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>คำถามข้อที่ 23. รูปแบบการเตรียมพร้อมก่อนเข้าร่วมประชุมของข้าพเจ้า คือ?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,23)}}>
                            <option>{q23_1}</option>
                            <option>{q23_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>คำถามข้อที่ 24. ในที่ประชุมข้าพเจ้าชอบคนที่?</p>
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