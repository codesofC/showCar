"use client";

import Image from "next/image";
import { footerLinks } from "@/constants";
import logoImage from "../public/assets/logoCar.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links-container">
        <div className="footer-right">
          <Image
            src={logoImage}
            width={50}
            height={18}
            alt="Logo"
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            GetFast 2023 <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className="footer-links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer-link">
              <h3 className="font-bold"> {link.title} </h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer-copyrights">
        <p> @2023 GetFast. All Rights Reserved</p>
        <div className="footer-copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
