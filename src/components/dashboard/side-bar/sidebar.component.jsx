import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { SidebarContainer, ButtonImg, Hr } from "./sidebar.styles";
import "./sidebar.css";
import SecondDashboardHeader from "./second-dashboard-header/second-dashboard-header.component";
import Profile from "../second-dashboard/profile/profile.component";
import Payment from "../second-dashboard/payments/payment.component";

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
          <Offcanvas.Title className="header">
            <SecondDashboardHeader />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Hr />
        <Offcanvas.Body>
          <Profile />
          <Payment />
        </Offcanvas.Body>
      </Offcanvas>
    </SidebarContainer>
  );
}
