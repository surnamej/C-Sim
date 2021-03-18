import { useEffect } from 'react'
import { Form, Container } from "react-bootstrap";

let q9_1 = "จัดทำรายการและแผนก่อนที่จะเริ่มต้นทำงาน และไม่พอใจถ้าถูกปรับเปลี่ยนไปจากแผน"
let q9_2 = "หลีกเลี่ยงการทำแผนแต่จะปล่อยให้งานคืบหน้าไปเองขณะที่ทำงานนั้น"
let q10_1 = "มองเห็นภาพรวมได้โดยง่าย"
let q10_2 = "เข้าใจจุดใดจุดหนึ่งของสถานการณ์นั้นได้อย่างลึกซึ้งได้โดยง่าย"
let q11_1 = "รู้สึกว่าเป็นเสียงที่รบกวนการทำงาน"
let q11_2 = "ไม่รังเกียจที่จะรับสายโทรศัพท์นั้น"
let q12_1 = "การวิเคราะห์"
let q12_2 = "ความเข้าอกเข้าใจ"
let q13_1 = "ทำอย่างสม่ำเสมอและคงเส้นคงวา"
let q13_2 = "ทำอย่างเต็มที่แต่มีช่วงหยุดเป็นช่วง ๆ"
let q14_1 = "นำมาเกี่ยวข้องกับประสบการณ์เก่าของข้าพเจ้าและดูว่าคล้ายกันไหม"
let q14_2 = "วิเคราะห์และประเมินเนื้อหาที่ได้ยินนั้น"
let q15_1 = "ลงมือทำดู"
let q15_2 = "ลองพิจารณาใคร่ครวญความคิดใหม่นั้นอีกหลายครั้ง"
let q16_1 = "ตีกรอบงานให้แคบลง เพื่อที่จะมองเห็นภาพได้ชัดเจนและตรงประเด็นยิ่งขึ้น"
let q16_2 = "ขยายขอบเขตงานออกไป เพื่อให้สามารถครอบคลุมประเด็นที่เกี่ยวข้องได้ครบ"

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
                            <p>คำถามข้อที่ 9. ข้าพเจ้ามักจะ?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,9)}}>
                            <option>{q9_1}</option>
                            <option>{q9_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>คำถามข้อที่ 10. เมื่ออภิปรายปัญหากับเพื่อน ข้าพเจ้าสามารถ?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,10)}}>
                            <option>{q10_1}</option>
                            <option>{q10_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>คำถามข้อที่ 11. เมื่อมีเสียงกริ่งโทรศัพท์ดังขึ้นที่ทำงานหรือที่บ้าน ปกติข้าพเจ้า?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,11)}}>
                            <option>{q11_1}</option>
                            <option>{q11_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>คำถามข้อที่ 12. คำใดที่อธิบายตรงกับตัวข้าพเจ้าได้ดีกว่ากัน ระหว่าง?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,12)}}>
                            <option>{q12_1}</option>
                            <option>{q12_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>คำถามข้อที่ 13. เมื่อข้าพเจ้าลงมือทำการบ้าน ข้าพเจ้ามักจะ?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,13)}}>
                            <option>{q13_1}</option>
                            <option>{q13_2}</option>
                        </Form.Control>
                    </Form.Group>
                    
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>คำถามข้อที่ 14. เมื่อข้าพเจ้าเกิดได้ยินใครพูดถึงเรื่องใดเรื่องหนึ่ง ข้าพเจ้ามักจะพยายาม?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,14)}}>
                            <option>{q14_1}</option>
                            <option>{q14_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>คำถามข้อที่ 15. เมื่อข้าพเจ้าเกิดความคิดใหม่ขึ้น ข้าพเจ้ามักจะ?</p>
                        </Form.Label>
                        <Form.Control as="select" onChange = {() => {toggle(list,15)}}>
                            <option>{q15_1}</option>
                            <option>{q15_2}</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <p>คำถามข้อที่ 16. เมื่อต้องทำงานโครงการ ข้าพเจ้ามักจะ?</p>
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