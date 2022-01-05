import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { BsArrowRightShort } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import "./style.css";

function ContactForm() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      "service_5o2rk9p",
      "template_vk8ptgh",
      formData,
      "user_io3TkmEhP1duYWJAZ70M6"
    );
    setFormData({
      name: "",
      email: "",
      number: "",
      message: "",
    });
  };

  return (
    <div className="contactMeForm mt-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group
          controlId="formBasicEmail"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <h6>{t("form.name")}</h6>
          <Form.Control
            type="text"
            placeholder={t("form.nameph")}
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <br />
        <Form.Group
          controlId="formBasicEmail"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h6>{t("form.email")}</h6>
          <Form.Control
            type="email"
            placeholder={t("form.emailph")}
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <br />
        <Form.Group
          controlId="formBasicEmail"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <h6>{t("form.number")}</h6>
          <Form.Control
            type="number"
            placeholder={t("form.numberph")}
            name="number"
            value={formData.number}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">{t("form.numberctrl")}</Form.Text>
        </Form.Group>
        <br />
        <Form.Group
          controlId="formBasicEmail"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <h6>{t("form.message")}</h6>
          <Form.Control
            as="textarea"
            rows={8}
            placeholder={t("form.messageph")}
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </Form.Group>
        <hr />
        <div className="d-grid gap-2 submitButton" data-aos="fade-left">
          <button type="submit" className="btn">
            <BsArrowRightShort size="3rem" style={{ color: "#FFFFFF" }} />
            <span className="btn-text">{t("form.send")}</span>
          </button>
        </div>
      </Form>
    </div>
  );
}

export default ContactForm;
