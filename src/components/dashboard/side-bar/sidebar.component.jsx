import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { SidebarContainer, ButtonImg } from "./sidebar.styles";
import "./sidebar.css";

export default function Sidebar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <SidebarContainer>
      <ButtonImg variant="primary" onClick={handleShow}>
        Launch
      </ButtonImg>

      <Offcanvas show={show} onHide={handleClose} className="open">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </SidebarContainer>
  );
}
