import React from "react";
import { useTranslation } from "react-i18next";
import { SiGmail } from "react-icons/si";
import {
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiWhatsappFill,
  RiPhoneFill,
  RiGithubFill,
} from "react-icons/ri";
import "./style.css";

function Socials() {
  const { t } = useTranslation();

  return (
    <>
      <h4 data-aos="fade-right" data-aos-delay="100" className="mt-4 mb-3">
        <SiGmail size="2rem" className="icon" />
        <a
          href="mailto:awadbilal99@gmail.com"
          rel="noreferrer"
          className="underline"
        >
          {t("contact.mail")}
        </a>
      </h4>
      <h4 data-aos="fade-right" data-aos-delay="200" className="mb-3">
        <RiPhoneFill size="2rem" className="icon flip" />
        <a href="tel:+905315815031" rel="noreferrer" className="underline">
          {t("contact.phone")}
        </a>
      </h4>
      <h4 data-aos="fade-right" data-aos-delay="300" className="mb-3">
        <RiWhatsappFill size="2rem" className="icon" />
        <a
          href="https://wa.me/+905315815031"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          {t("contact.whatsapp")}
        </a>
      </h4>
      <h4 data-aos="fade-right" data-aos-delay="400" className="mb-3">
        <RiLinkedinBoxFill size="2rem" className="icon" />
        <a
          href="https://www.linkedin.com/in/bilal-avvad/"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          {t("contact.linkedin")}
        </a>
      </h4>
      <h4 data-aos="fade-right" data-aos-delay="500" className="mb-3">
        <RiGithubFill size="2rem" className="icon" />
        <a
          href="https://github.com/awadbilal"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          {t("contact.github")}
        </a>
      </h4>
      <h4 data-aos="fade-right" data-aos-delay="600" className="mb-3">
        <RiInstagramFill size="2rem" className="icon" />
        <a
          href="https://www.instagram.com/awadbilal/"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          {t("contact.instagram")}
        </a>
      </h4>
    </>
  );
}

export default Socials;
