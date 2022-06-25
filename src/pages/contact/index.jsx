import React from "react";
import { Container, Content } from "./style";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import ItemContact from "../../../components/Header/contactme";

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact
          IconFa={FaLinkedin}
          LinkContact="https://www.linkedin.com/in/sousa-igor"
        />
        <ItemContact
          IconFa={FaFacebook}
          LinkContact="https://www.facebook.com/sousair"
        />
        <ItemContact
          IconFa={FaInstagram}
          LinkContact="https://www.instagram.com/igorsousa185"
        />
        <ItemContact IconFa={FaEnvelope} LinkContact="igodrisousa@gmail.com" />
      </Content>
    </Container>
  );
}
