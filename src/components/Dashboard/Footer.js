import React from "react";

function Footer() {
  return (
    <>
      <div>
        © 2020 Filedash -{" "}
        <a href="http://laborasyon.com" target="_blank">
          Laborasyon
        </a>
      </div>
      <div>
        <nav className="nav">
          <a
            href="https://themeforest.net/licenses/standard"
            className="nav-link"
          >
            Licenses
          </a>
          <a href="#" className="nav-link">
            Change Log
          </a>
          <a href="#" className="nav-link">
            Get Help
          </a>
        </nav>
      </div>
    </>
  );
}

export default Footer;
