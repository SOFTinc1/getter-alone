import { useNavigate } from "react-router-dom";
import {
  DashboardContainer,
  LogoImg,
  Side2,
  NotificationImg,
  OptionImg,
  AvatarImg,
  ImageWallet,
} from "./dashboard-header.styles";
import Form from "react-bootstrap/Form";
import Sidebar from "./side-bar/sidebar.component";
// import Logo from "../../../assets/svg/logo.png";
import Noti from "../../../assets/svg/noti.png";
import Option from "../../../assets/svg/option2.png";
import Avatar from "../../../assets/image/11.jpg";
import Search from "../../../components/search/search";
// import Wallet from "../../../assets/svg/wallet.svg";

export default function DashboardHeader() {
  let navigate = useNavigate();
  return (
    <DashboardContainer>
      <Sidebar />
      {/* <LogoImg src={Logo} /> */}
      <Form>
        <Search placeholder="search coin name" />
      </Form>
      <Side2>
      <NotificationImg src={Noti}/>
      <OptionImg src={Option}/>
      <AvatarImg src={Avatar}/>
      </Side2>
    </DashboardContainer>
  );
}


// import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import Toast from 'react-bootstrap/Toast';
// import ToastContainer from 'react-bootstrap/ToastContainer';

// function PlacementExample() {
//   const [position, setPosition] = useState('top-start');
//   const [show, setShow] = useState(false);

//   return (
//     <>
//       <div className="mb-3">
//         <Button onClick={() => setShow(true)}>Show Toast</Button>
//       </div>

//       <div
//         aria-live="polite"
//         aria-atomic="true"
//         className="bg-dark position-relative"
//         style={{ minHeight: '240px' }}
//       >
//         <ToastContainer className="p-3" position="top-start">
//           <Toast onClose={() => setShow(false)} show={show} delay={3000}>
//             <Toast.Header closeButton={false}>
//               <img
//                 src="holder.js/20x20?text=%20"
//                 className="rounded me-2"
//                 alt=""
//               />
//               <strong className="me-auto">Bootstrap</strong>
//               <small>11 mins ago</small>
//             </Toast.Header>
//             <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
//           </Toast>
//         </ToastContainer>
//       </div>
//     </>
//   );
// }

// export default PlacementExample;