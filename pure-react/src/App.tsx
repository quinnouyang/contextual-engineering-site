// import React from 'react';
// import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";

export default function App() {
  return (
    <div className="App">
      <div id="page">
        <Title />
        <div id="content">
          <main>
            <div id="hero" className="container-fluid">
              <div className="row maxwidth1140">
                <div className="col">
                  <div>
                    <nav id="breadcrumbs" aria-label="Breadcrumbs">
                      <ul>
                        <li>
                          <a href="/">Home</a>
                        </li>
                      </ul>
                    </nav>
                    <h1>Home</h1>
                  </div>
                </div>
              </div>
            </div>

            <div id="content_inner" className="container-fluid">
              <div className="tile-list">
                <section
                  className="tile w110 charcoal-box"
                  id="tile14306"
                  data-tileid="14306"
                >
                  <div className="slider-feature">
                    <div
                    // style={background-image: url(//ws.engr.illinois.edu/sitemanager/viewphoto.aspx?id=17806&s=1280);}
                    >
                      <div className="slide-content">
                        <h2>
                          Algorithms and Software group collaboration project
                        </h2>
                        <div className="subtitle">
                          <p>
                            ARI has partnered with Sandia National Laboratories
                            on the Rapid Automation Validation and Verification
                            (RAVVE) project focused on training, testing, and
                            preparing an object detection algorithm.
                          </p>
                        </div>
                        <div className="herolink">
                          <a
                            href="news/algorithm-and-software-group-collaboration-project"
                            className="button"
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                    // style="
                    //   background-image: url(//ws.engr.illinois.edu/sitemanager/viewphoto.aspx?id=25747&s=1280);
                    // "
                    >
                      <div className="slide-content">
                        <h2>A new process for recycling aluminum scrap</h2>
                        <div className="subtitle">
                          <p>
                            ARI is working with Eck Industries to&nbsp;develop a
                            new process for recycling aluminum scrap into a high
                            strength castable aluminum alloy
                          </p>
                        </div>
                        <div className="herolink">
                          <a
                            href="/news/ari-awarded-remade-grant-recycle-aerospace-scrap"
                            className="button"
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                    // style="
                    //   background-image: url(//ws.engr.illinois.edu/sitemanager/viewphoto.aspx?id=17337&s=1280);
                    // "
                    >
                      <div className="slide-content">
                        <h2>Bolivian Project</h2>
                        <div className="subtitle">
                          <p>
                            US Embassy funds Contextual Innovation and Practice
                            to develop Bolivian training facility that&nbsp;
                            addresses food, energy, and water needs.
                          </p>
                        </div>
                        <div className="herolink">
                          <a
                            href="news/us-embassy-funds-contextual-innovation-and-practice-to-develop-bolivian-training-facility-that-addresses-food-energy-and-water-needs"
                            className="button"
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                    // style="
                    //   background-image: url(//ws.engr.illinois.edu/sitemanager/viewphoto.aspx?id=60310&s=1280);
                    // "
                    >
                      <div className="slide-content">
                        <h2>
                          Research by the Indoor Climate Research and Training
                          Center
                        </h2>
                        <div className="subtitle">
                          <p>
                            The Indoor Climate and Research Training Center ICRT
                            research was cited in a journal article,
                            <em>
                              Methane and NOx Emissions from Natural Gas Stoves,
                              Cooktops, and Ovens in Residential Homes
                            </em>
                            <a
                              href="https://pubs.acs.org/doi/10.1021/acs.est.1c04707"
                              // name="_ftnref1"
                            >
                              [1]
                            </a>
                            , published by researchers at Stanford University.
                            The research showed comparable emissions of unburned
                            methane while cooking appliances were in use in
                            residential homes.&nbsp;
                          </p>
                        </div>
                        <div className="herolink">
                          <a
                            href="/news/new-research-published-on-methane-emissions-from-natural-gas-stoves"
                            className="button"
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="tile w50 navy-box fingerprint px-md-5 py-6 minheight400"
                  id="tile9879"
                  data-tileid="9879"
                >
                  <div className="lower" id="lower9879">
                    <div className="row">
                      <div className="col-md column1">
                        <h2 style={{ textAlign: "left" }}>
                          <span className="fs150x">Core Competencies</span>
                        </h2>
                        <p style={{ textAlign: "left" }}>
                          <span className="intro">
                            Scientists and engineers at ARI draw upon our core
                            competencies to help our customers solve important
                            problems across a wide range of applications.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="tile w50 charcoal-box darkify px-md-5 py-6 minheight400"
                  id="tile7627"
                  data-tileid="7627"
                  // style="
                  //   background-image: url(https://ws.engr.illinois.edu/sitemanager/viewphoto.aspx?id=17336&s=0);
                  // "
                >
                  <div className="lower" id="lower7627">
                    <div className="row">
                      <div className="col-md column1">
                        <h2 style={{ textAlign: "left" }}>
                          Algorithm and Software Development
                        </h2>
                        <p style={{ textAlign: "left" }}>
                          ARI develops and implements algorithms for solving
                          complex multi-domain problems in the areas of
                          Information Processing, ISR (Intelligence Surveillance
                          and Reconnaissance), Remote Sensing, Data Fusion, and
                          Distributed Autonomy.
                        </p>
                        <p style={{ textAlign: "left" }}>
                          <a
                            className="button"
                            title="Learn more about Algorithm and Software Development"
                            href="/core-competencies/algorithm-and-software-development"
                          >
                            Learn More
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="tile w50 charcoal-box darkify px-md-5 py-6"
                  id="tile9740"
                  data-tileid="9740"
                  // style="
                  //   background-image: url(https://ws.engr.illinois.edu/sitemanager/viewphoto.aspx?id=58672&s=0);
                  // "
                >
                  <div className="lower" id="lower9740">
                    <div className="row">
                      <div className="col-md column1">
                        <h2 style={{ textAlign: "left" }}>
                          <a
                            href="/core-competencies/contextual-innovation-and-practice"
                            target="_blank"
                            rel="noopener"
                          ></a>
                          Contextual Innovation and Practice
                        </h2>
                        <p>
                          ARI increases operability, sustainability, and
                          functionality of engineered products, systems, and
                          operations by identifying and addressing the unique
                          context in which they reside, and optimizing the
                          impact of place, people, and time on its development
                          and use.
                        </p>
                        <p style={{ textAlign: "left" }}>
                          <a
                            className="button"
                            title="Learn more about Contextual Innovation and Process"
                            href="/core-competencies/contextual-innovation-and-practice"
                            aria-invalid="true"
                          >
                            Learn More
                          </a>
                        </p>
                        <p style={{ textAlign: "left" }}>&nbsp;</p>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="tile w50 charcoal-box darkify px-md-5 py-6 minheight400"
                  id="tile7628"
                  data-tileid="7628"
                  // style="
                  //   background-image: url(https://ws.engr.illinois.edu/sitemanager/viewphoto.aspx?id=17369&s=0);
                  // "
                >
                  <div className="lower" id="lower7628">
                    <div className="row">
                      <div className="col-md column1">
                        <h2 style={{ textAlign: "left" }}>
                          Materials Development
                        </h2>
                        <p style={{ textAlign: "left" }}>
                          ARI improves the performance of material systems
                          through the development, design, processing and
                          characterization of polymers, biomaterials,
                          nanocomposites and metals.
                        </p>
                        <p style={{ textAlign: "left" }}>
                          <a
                            className="button"
                            title="Learn more about Materials Development"
                            href="/core-competencies/materials-development"
                          >
                            Learn More
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="tile w50 charcoal-box darkify px-md-5 py-6 minheight400"
                  id="tile7629"
                  data-tileid="7629"
                  // style="
                  //   background-image: url(https://ws.engr.illinois.edu/sitemanager/viewphoto.aspx?id=17810&s=0);
                  // "
                >
                  <div className="lower" id="lower7629">
                    <div className="row">
                      <div className="col-md column1">
                        <h2>Monitoring, Diagnostics and Controls</h2>
                        <p style={{ textAlign: "left" }}>
                          ARI integrates and deploys sensor technologies and
                          diagnostic tools that provide our customers actionable
                          data that helps them extract valuable insights,
                          enhance situational awareness, and rapidly respond to
                          changing conditions.
                        </p>
                        <p style={{ textAlign: "left" }}>
                          <a
                            className="button"
                            title="Learn more about Monitoring, Diagnostics and Controls"
                            href="/core-competencies/monitoring-diagnostics-and-controls"
                          >
                            Learn More
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="tile w50 charcoal-box darkify px-md-5 py-6 minheight400"
                  id="tile7631"
                  data-tileid="7631"
                  // style="
                  //   background-image: url(https://ws.engr.illinois.edu/sitemanager/viewphoto.aspx?id=17339&s=0);
                  // "
                >
                  <div className="lower text-center" id="lower7631">
                    <div className="row">
                      <div className="col-md column1">
                        <h2 style={{ textAlign: "left" }}>Training</h2>
                        <p style={{ textAlign: "left" }}>
                          ARI bridges the gap between the knowledge gained
                          through research and its practical application. ARI
                          trainers design curriculum and workshop modules to
                          enhance the fundamental knowledge of building science
                          and energy efficiency practitioners.
                        </p>
                        <p style={{ textAlign: "left" }}>
                          <a
                            className="button"
                            title="Learn more about Training"
                            href="/core-competencies/training"
                          >
                            Learn More
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="tile w110 navy-box fingerprint py-5 text-center"
                  id="tile7891"
                  data-tileid="7891"
                >
                  <div className="lower maxwidth1140" id="lower7891">
                    <div className="row">
                      <div className="col-md column1 py-3">
                        <h2 className="fs100x m-0">
                          <a className="button" href="/core-competencies">
                            Explore our Core Competencies
                          </a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="tile w110 orange-box orangify py-1"
                  id="tile8234"
                  data-tileid="8234"
                >
                  <div className="lower maxwidth1140" id="lower8234">
                    <div className="row">
                      <div className="col-md column1">
                        <h2 className="sr-only">Spacer</h2>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="tile news w25 platinum-box"
                  id="page45572_7885"
                  data-pageid="45572"
                  data-tileid="7885"
                  data-type="article"
                  data-bookid="159"
                >
                  <div
                    className="upper"
                    // style="
                    //   background-image: url(//ws.engr.illinois.edu/sitemanager/viewphoto.aspx?id=61148);
                    // "
                  ></div>

                  <div className="lower py-4">
                    <div className="inner">
                      <div className="flex">
                        <h2>
                          <a href="/news/uiuc-student-jessica-mingee-awarded-the-illinois-distinguished-fellowship">
                            UIUC Student Jessica Mingee Awarded the Illinois
                            Distinguished Fellowship
                          </a>
                        </h2>
                        <p className="first">
                          <a href="/news">News</a> | March 3, 2022
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section
                  className="tile news w25 platinum-box"
                  id="page45523_7885"
                  data-pageid="45523"
                  data-tileid="7885"
                  data-type="article"
                  data-bookid="159"
                >
                  <div
                    className="upper"
                    // style="
                    //   background-image: url(//ws.engr.illinois.edu/sitemanager/viewphoto.aspx?id=61075);
                    // "
                  ></div>

                  <div className="lower py-4">
                    <div className="inner">
                      <div className="flex">
                        <h2>
                          <a href="/news/ari-collaboration-with-dr-lara-waldrop-at-the-university-of-illinois-urbana-champaign-electrical-and-computer-engineering ">
                            ARI Collaboration with Dr. Lara Waldrop at the
                            University of Illinois Urbana-Champaign Electrical
                            and Computer Engineering
                          </a>
                        </h2>
                        <p className="first">
                          <a href="/news">News</a> | March 1, 2022
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section
                  className="tile news w25 platinum-box"
                  id="page44666_7885"
                  data-pageid="44666"
                  data-tileid="7885"
                  data-type="article"
                  data-bookid="159"
                >
                  <div
                    className="upper"
                    // style="
                    //   background-image: url(//ws.engr.illinois.edu/sitemanager/viewphoto.aspx?id=61074);
                    // "
                  ></div>

                  <div className="lower py-4">
                    <div className="inner">
                      <div className="flex">
                        <h2>
                          <a href="/news/new-research-published-on-methane-emissions-from-natural-gas-stoves">
                            New Research Published on Methane Emissions from
                            Natural Gas Stoves
                          </a>
                        </h2>
                        <p className="first">
                          <a href="/news">News</a> | January 31, 2022
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section
                  className="tile news w25 platinum-box"
                  id="page44433_7885"
                  data-pageid="44433"
                  data-tileid="7885"
                  data-type="article"
                  data-bookid="159"
                >
                  <div
                    className="upper"
                    // style="
                    //   background-image: url(//ws.engr.illinois.edu/sitemanager/viewphoto.aspx?id=28017);
                    // "
                  ></div>

                  <div className="lower py-4">
                    <div className="inner">
                      <div className="flex">
                        <h2>
                          <a href="/news/bpa-board-chair-paul-francisco-says-equity-is-key-to-future">
                            BPA Board Chair Paul Francisco Says Equity is Key to
                            Future
                          </a>
                        </h2>
                        <p className="first">
                          <a href="/news">News</a> | January 21, 2022
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section
                  className="tile w100 white-box py-5 text-center"
                  id="tile7886"
                  data-tileid="7886"
                >
                  <div className="lower maxwidth1140" id="lower7886">
                    <div className="row">
                      <div className="col-md column1">
                        <h2 className="fs100x m-0">
                          <a className="button orange" href="/newsevents/news">
                            See more news
                          </a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="tile w110 platinum-box py-6 text-center"
                  id="tile8235"
                  data-tileid="8235"
                >
                  <div
                    className="lower text-center maxwidth1140"
                    id="lower8235"
                  >
                    <div className="row">
                      <div className="col-12">
                        <h2>Impact Areas</h2>
                      </div>
                      <div className="col-md column1 px-0 mx-md-2 white-box">
                        <div>
                          <img
                            src="//ws.engr.illinois.edu/sitemanager/viewphoto.aspx?id=17340&s=344"
                            className="image"
                            alt="Building science image showing various building technology"
                            width="344"
                          />
                        </div>
                        <p className="fs125x">
                          <strong>Building Science</strong>
                        </p>
                        <p>
                          <a
                            className="button"
                            title="Learn more about Building Science"
                            href="/impact-areas/building-science"
                          >
                            Learn More
                          </a>
                        </p>
                        <p>&nbsp;</p>
                      </div>
                      <div className="col-md column2 px-0 mx-md-2 white-box">
                        <div>
                          <img
                            src="//ws.engr.illinois.edu/sitemanager/viewphoto.aspx?id=17341&s=344"
                            className="image"
                            alt="Graphic showing defense and security icons"
                            width="344"
                          />
                        </div>
                        <p className="fs125x">
                          <strong>Defense &amp; Security</strong>
                        </p>
                        <p>
                          <a
                            className="button"
                            title="Learn more about Defense and Security"
                            href="/impact-areas/defense-and-security"
                          >
                            Learn More
                          </a>
                        </p>
                        <p>&nbsp;</p>
                      </div>
                      <div className="col-md column3 px-0 mx-md-2 white-box">
                        <div>
                          <img
                            src="//ws.engr.illinois.edu/sitemanager/viewphoto.aspx?id=17342&s=344"
                            className="image"
                            alt="Advanced health imaging display graphic"
                            width="344"
                          />
                        </div>
                        <p className="fs125x">
                          <strong>Health</strong>
                        </p>
                        <p>
                          <a
                            className="button"
                            title="Learn more about Health challenges"
                            href="/impact-areas/health"
                          >
                            Learn More
                          </a>
                        </p>
                        <p>&nbsp;</p>
                      </div>
                      <div className="col-md column4 px-0 mx-md-2 white-box">
                        <div>
                          <img
                            src="//ws.engr.illinois.edu/sitemanager/viewphoto.aspx?id=17343&s=344"
                            className="image"
                            alt="Image of robotic welder"
                            width="344"
                          />
                        </div>
                        <p className="fs125x">
                          <strong>Manufacturing</strong>
                        </p>
                        <p>
                          <a
                            className="button"
                            title="Learn more about manufacturing processes"
                            href="/impact-areas/manufacturing"
                          >
                            Learn More
                          </a>
                        </p>
                        <p>&nbsp;</p>
                      </div>
                      <div className="col-12"></div>
                    </div>
                  </div>
                </section>
                <section
                  className="tile w110 white-box darkify py-6 text-center jarallax"
                  id="tile8036"
                  data-tileid="8036"
                  // style="
                  //   background-image: url(https://ws.engr.illinois.edu/sitemanager/viewphoto.aspx?id=17820&s=0);
                  // "
                >
                  <div className="lower maxwidth1140" id="lower8036">
                    <div className="row">
                      <div className="col-12"></div>
                      <div className="col-md column1 px-md-5 py-4 mx-md-2 platinum-box">
                        <p className="fs200x">
                          {/* <a href="http://research.illinois.edu/"
                          ><em className="fad fa-university" aria-hidden="true"
                            ><!--icon--></em
                          ></a
                        > */}
                        </p>
                        <h2 className="fs100x">
                          <a href="http://research.illinois.edu/">
                            The Office of the Vice Chancellor for Research
                          </a>
                        </h2>
                      </div>
                      <div className="col-md column2 px-md-5 py-4 mx-md-2 platinum-box">
                        <p className="fs200x">
                          {/* <a href="http://researchpark.illinois.edu"
                          ><em className="fad fa-globe" aria-hidden="true"
                            ><!--icon--></em
                          ></a
                        > */}
                        </p>
                        <h2 className="fs100x">
                          <a href="http://researchpark.illinois.edu">
                            The Research Park
                          </a>
                        </h2>
                      </div>
                      <div className="col-md column3 px-md-5 py-4 mx-md-2 platinum-box">
                        <p className="fs200x">
                          {/* <a href="http://engineering.illinois.edu"
                          ><em className="fad fa-home" aria-hidden="true"
                            ><!--icon--></em
                          ></a
                        > */}
                        </p>
                        <h2 className="fs100x">
                          <a href="http://engineering.illinois.edu">
                            The Grainger College of Engineering
                          </a>
                        </h2>
                      </div>
                      <div className="col-12"></div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </main>
        </div>

        <footer style={{ textAlign: "left" }}>
          <div className="container-fluid maxwidth1140">
            <div className="row pt-5 pb-3">
              <div className="col-lg-5 mb-5">
                <div className="campus_wordmark">
                  <a href="http://illinois.edu/">
                    <img
                      src="https://ws.engr.illinois.edu/images/uiuc-footer-wordmark.png"
                      alt="University of Illinois Urbana Champaign"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-7 mb-4 socials">
                <a href="https://twitter.com/UofI_ARI">
                  <i className="fab fa-twitter"></i>
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="https://www.linkedin.com/company/university-of-illinois-at-urbana-champaign---applied-research-institute/">
                  <i className="fab fa-linkedin-in"></i>
                  <span className="sr-only">LinkedIn</span>
                </a>
                <div className="w-100 d-block d-lg-none"></div>
                <a href="/about/contact-us" className="button">
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          <div className="container-fluid maxwidth1140">
            <div className="row pb-5 justify-content-between">
              <div className="col-md-5 pr-xl-5 mb-5 college_container">
                <div className="contact">
                  <p className="department fs150x">
                    <a href="https://appliedresearch.illinois.edu/">
                      Applied Research Institute
                    </a>
                  </p>

                  <p className="college">
                    <a href="https://grainger.illinois.edu">
                      The Grainger College of Engineering
                    </a>
                    <br />
                    <a href="https://illinois.edu">University of Illinois</a>
                  </p>

                  <p>
                    2100 South Oak St.
                    <br />
                    Suite 206, MC 628
                    <br />
                    Champaign, IL 61820, USA
                    <br />
                    Phone: <a href="tel:+12173003162">(217) 300-3162</a> <br />
                    Email:
                    <a href="mailto:appliedresearch@illinois.edu">
                      appliedresearch@illinois.edu
                    </a>
                  </p>

                  <p>
                    <img
                      src="https://ws.engr.illinois.edu/sitemanager/viewphoto.aspx?id=18126&s=250"
                      height="31"
                      width="150"
                      alt="ARI Logo"
                    />
                  </p>
                </div>
              </div>

              <div className="col-md pr-xl-5 my-5">
                <h2>Partners</h2>
                <ul>
                  <li>
                    <a href="https://illinois.edu" target="_blank">
                      University of Illinois
                    </a>
                  </li>
                  <li>
                    <a href="https://beckman.illinois.edu" target="_blank">
                      Beckman Institute
                    </a>
                  </li>
                  <li>
                    <a href="https://medicine.illinois.edu/" target="_blank">
                      Carle Illinois College of Medicine
                    </a>
                  </li>
                  <li>
                    <a href="https://carle.org/" target="_blank">
                      Carle Health
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="container-fluid" id="legal">
            <div className="row justify-content-md-center align-items-center py-4">
              <div className="col-md-auto">
                <div>
                  <button id="ot-sdk-btn" className="ot-sdk-show-settings">
                    Cookie Preferences
                  </button>
                </div>
              </div>

              <div className="col-md-auto">
                <p>&copy; 2022 University of Illinois Board of Trustees</p>
              </div>

              <div className="col-md-auto">
                <p>
                  <a href="https://www.vpaa.uillinois.edu/resources/web_privacy">
                    Privacy Policy
                  </a>
                </p>
              </div>

              <div className="col-md-auto">
                <p>
                  Powered by
                  <a href="https://my.engr.illinois.edu/sitemanager/editpage.asp?id=13275">
                    SiteManager
                  </a>
                  |
                  <a href="mailto:grainger-marcom@illinois.edu">
                    Contact Webmaster
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div id="gototop" className="hidden">
            <a href="#">
              <i className="fa fa-chevron-up"></i>
              <span className="sr-only">Go to top</span>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
