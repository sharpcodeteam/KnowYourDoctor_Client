import { Layout, Space, Row, Col, Button } from "antd";
import React from "react";
import "../styles/HomePage.css";
import '../App.css'

import Nav from "../components/Nav";

// images
import doctor from "../images/doctor.webp";
import { Link } from "react-router-dom";

import { Card } from "antd";
import "../styles/homeStyles.css";
import img from "../images/Navicon.png"
import Consult from "../components/Consult";
const { Meta } = Card;
const { Footer, Content } = Layout;

const contentStyle = {
  textAlign: "center",
  minHeight: "90vh",
  lineHeight: "120px",
  color: "#fff",
  // backgroundImage: "linear-gradient(#FFF0F5,white )",
};
const footerStyle = {
  textAlign: "center",
  color: "#000000",
  fontSize: "20px",
  fontWeight: "bold",
  backgroundColor: " #FFF0F5",
  backgroundImage: "linear-gradient(#facbda,white )",
};

const HomePage = () => {
  // const [openChatbot, setOpenChatbot] = useState(false);

  // const generateChat = () => {
  //   setOpenChatbot(true);
  // }
  return (
    <>
    <div >
      {/* <Chatbot/> */}
    </div>
      <Nav />
      <Space
        direction="vertical"
        style={{ position: "relative", top: "4rem", width: "100%", height:"80vh" }}
        size={[0, 48]}
        className="space"
      >
        <Content style={contentStyle} className="headerStyle">
          <Row>
            <Col flex="1" className=" about_tag">
              <p>KnowYourDoctor is your go-to platform for finding the best healthcare professionals in your area. Easily search for doctors by specialty, location, and experience. Read patient reviews and ratings to make informed decisions about your healthcare.</p>
            </Col>

            <Col flex="1" className="contentt image">
              <img
                src={doctor}
                alt="error"
                style={{ width: 632.25, height: 500, filter: 100, padding: 10 }}
                className="doctorImage"
              />
            </Col>
          </Row>
          <div>
      {/* <Chatbot /> */}
    
           
              
      
          </div>

        </Content>
        <Consult/>

                   
        <Footer style={footerStyle}>
          <Row gutter={16}>
            <Col flex="1em" className="column logo">
              <img style={{ position: "relative", height: "4.5em", padding: "0.5em 0.5em" }} src={img} alt="" />
            </Col>

            <Col className="gutter-row" span={5.33}></Col>
            <Col className="gutter-row" span={6}></Col>
          </Row>
          &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <div style={{ marginBottom: "5%", lineHeight: "250%" }}>
                <Row>About Us</Row>
                <Row>Annual CheckUp</Row>
                <Row>Blog</Row>

              </div>
            </Col>

            <Col className="gutter-row" span={6}>
              <div style={{ lineHeight: "250%" }}>
                <Row>Get a Diagnosis</Row>
                <Row>How it Works</Row>
                <Row>Privacy Policy</Row>
              </div>
            </Col>

            <Col className="gutter-row" span={6}>
              <div style={{ lineHeight: "250%" }}>
                <Row>Hospitals in India</Row>
                <Row>International Patients</Row>
                <Row>Medical Procedures</Row>
              </div>
            </Col>

            <Col className="gutter-row" span={6}>
              <div style={{ lineHeight: "250%" }}>
                <Row>Contact Us</Row>
                <Row>FAQ's</Row>
                <Row>Careers</Row>
              </div>
            </Col>

            <Col className="gutter-row" span={6}>
              <div></div>
            </Col>
          </Row>
          &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          <div className="Row">All rights Reserved © Emmet 2023</div>
        </Footer>
      </Space>

    </>
  );
};

export default HomePage;
