import React, { useEffect, useState } from "react";
import { Route } from "react-router";
import "../../assets/html/assets/css/app.min.css";
import Header from "../../components/Dashboard/Header";
import Navigation from "../../components/Dashboard/Navigation";
import Sidebar from "../../components/Dashboard/Sidebar";

function DashboardLayout() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, []);

  return (
    <>
      {isLoading ? (
        <div class="preloader">
          <div class="preloader-icon"></div>
        </div>
      ) : (
        <>
          <div class="sidebar-group">
            <Sidebar />
          </div>

          <div class="layout-wrapper">
            <div class="header">
              <Header />
            </div>

            <div class="content-wrapper">
              <Navigation />

              <div class="content-body">
                <div class="content">
                  <Route
                    path="/"
                    exact
                    component={() => <h1>Dashboard Home</h1>}
                  />
                  <Route
                    path="/profile"
                    exact
                    component={() => <h1>Profile</h1>}
                  />
                  <Route
                    path="/edit"
                    exact
                    component={() => <h1>Edit Profile</h1>}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default DashboardLayout;
