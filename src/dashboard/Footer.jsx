import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative z-10 h-16 w-full mt-0 items-center bg-white shadow md:h-20">
      <div className="relative mx-auto flex h-full flex-col justify-center px-3">
        <div className="relative flex w-full items-center pl-1 sm:ml-0 sm:pr-2">
          <div className="relative left-0 flex w-3/4">
            <div className="relative flex h-full items-center">
              <a
                href="https://www.csl.ws"
                target="_blank"
                rel="noopener noreferrer"
              >
                Motu Dashboard
              </a>
              &nbsp;is an open source project by &nbsp;
              <a
                href="https://www.csl.ws"
                target="_blank"
                rel="noopener noreferrer"
              >
                CSL
              </a>
            </div>
          </div>
          <div className="relative ml-5 flex w-full items-center justify-end p-1 sm:right-auto sm:mr-0">
            <strong>Version</strong>
            &nbsp;1.0.0 (Master)
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
