import { Nav, Image, NavDropdown } from 'react-bootstrap'
import React from "react";
import logo from '../Images/Untitled-1.png'

function Unavbar({ setLang, setPage }) {
    return(
        <div>
            <Nav class="navbar navbar-expand-lg navbar-dark bg-primary"> 
                <a class="navbar-brand" href="./">
                    <Image class="d-inline-block mx-2" src={logo}/>
                    C-Sim
                </a>
                <div id="navbarColor01">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" onClick={() => {setPage(0)}}>หน้าหลัก</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" onClick={() => {setPage(7)}}>ข้อมูลเพิ่มเติมเกี่ยวกับสายอาชีพ</a>
                        </li>

                        <NavDropdown title="Select language" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => {setLang("EN")}}>English</NavDropdown.Item>
                            <NavDropdown.Item>ไทย</NavDropdown.Item>
                        </NavDropdown>
                    </ul>
                </div>
            </Nav>
        </div>
    );
}


export default Unavbar;