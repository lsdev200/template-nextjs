import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@component/styles/Home.module.css";
import Script from "next/script";
import Header from "./Header";
import Footer from "./Newsletter";
import About from "./About";
import Clients from "./Clients";
import Service from "./Service";
import Pricing from "./Pricing";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <>
        <Header />

        <div
          className="main-banner wow fadeIn"
          id="top"
          data-wow-duration="1s"
          data-wow-delay="0.5s"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-6 align-self-center">
                    <div
                      className="left-content show-up header-text wow fadeInLeft"
                      data-wow-duration="1s"
                      data-wow-delay="1s"
                    >
                      <div className="row">
                        <div className="col-lg-12">
                          <h2>Get The Latest App From App Stores</h2>
                        </div>
                        <div className="col-lg-12">
                          <div className="white-button first-button scroll-to-section">
                            <a href="#contact">
                              Free Quote <i className="fab fa-apple" />
                            </a>
                          </div>
                          <div className="white-button scroll-to-section">
                            <a href="#contact">
                              Free Quote <i className="fab fa-google-play" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className="right-image wow fadeInRight"
                      data-wow-duration="1s"
                      data-wow-delay="0.5s"
                    >
                      <img src="assets/images/slider-dec.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
        {/* Scripts */}
      </>

      {/* Scripts */}
    </>
  );
}
