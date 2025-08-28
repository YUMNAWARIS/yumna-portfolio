import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import {

  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineSketch,
} from "react-icons/ai";
import '../../styles/nav.css';


import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);


  const baseUrl = process.env.PUBLIC_URL;
  const items = [
    {
      label: "Profile",
      icon: <AiOutlineUser className="me-2" />,
      to: "/profile"
    },
    {
      label: "Projects",
      icon: <AiOutlineFundProjectionScreen className="me-2" />,
      to: "/projects"
    },
    {
      label: "Certifications",
      icon: <CgFileDocument className="me-2" />,
      to: "/certs"
    },
    {
      label: "Writings",
      icon: <ImBlog className="me-2" />,
      to: "/writings"
    },
    {
      label: "Replications",
      icon: <AiOutlineSketch className="me-2" />,
      to: "/replications"
    }
  ]

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={"navbar"}
    >
      <Container>
        <Navbar.Brand href={baseUrl + "/home"} className="d-flex align-items-center navbar-brand">
          <img
            src={logo}
            alt="Profile logo"
            style={{ width: 60, height: 60, cursor: "pointer" }}
            decoding="async"
            className="me-2 profile-logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#about">

            {items.map((item, index) => (
              <Nav.Item key={index}>
                <Nav.Link
                  as={Link}
                  to={item.to}
                  onClick={() => updateExpanded(false)}
                >
                  {item.icon} {item.label}
                </Nav.Link>
              </Nav.Item>
            ))}


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
