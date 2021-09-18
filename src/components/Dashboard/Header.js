import React from "react";

function Header() {
  return (
    <div className="header-container">
      <div className="header-body">
        <div className="header-body-left">
          <ul className="navbar-nav">
            <li className="nav-item navigation-toggler">
              <a href="#" className="nav-link">
                <span>Toggle</span>
              </a>
            </li>
            <li className="nav-item">
              <h4>Header _TEXT</h4>
            </li>
          </ul>
        </div>

        <div className="header-body-right">
          <div className="header-search-form">
            <form>
              <div className="input-group">
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search something..."
                  />
                </div>
                <div>
                  <button className="btn header-search-close-btn">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
