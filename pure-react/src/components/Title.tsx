export default function Title() {
  return (
    <header>
      <div className="container-fluid campus">
        <div className="row mx-auto maxwidth1140">
          <div id="campus_name" className="col p-0">
            <a href="http://illinois.edu/">
              <svg width="362" height="10" xmlns="http://www.w3.org/2000/svg">
                <title>University of Illinois Urbana-Champaign</title>
                <path d="M4.193 9.144c2.388 0 3.804-1.368 3.804-3.84V.6h-1.92v4.632c0 1.596-.684 2.256-1.872 2.256-1.176 0-1.872-.66-1.872-2.256V.6H.389v4.704c0 2.472 1.416 3.84 3.804 3.84zM13.587 9V3.9L17.775 9h1.596V.6h-1.92v5.1L13.275.6h-1.608V9h1.92zm11.47 0V.6h-1.944V9h1.944zm8.134 0L36.827.6h-1.932l-2.592 6-2.556-6h-2.1L31.271 9h1.92zm12.586 0V7.44h-4.572V5.496h3.9V3.984h-3.9V2.16h4.416V.6h-6.348V9h6.504zm5.242 0V6.66h1.788L54.427 9h2.088l-1.884-2.7c1.092-.468 1.728-1.392 1.728-2.652C56.359 1.764 54.955.6 52.711.6h-3.636V9h1.944zm1.584-3.888h-1.584V2.184h1.584c1.188 0 1.788.54 1.788 1.464 0 .912-.6 1.464-1.788 1.464zm9.802 4.032c2.4 0 3.564-1.2 3.564-2.604 0-3.084-4.884-2.016-4.884-3.564 0-.528.444-.96 1.596-.96.744 0 1.548.216 2.328.66l.6-1.476c-.78-.492-1.86-.744-2.916-.744-2.388 0-3.54 1.188-3.54 2.616 0 3.12 4.884 2.04 4.884 3.612 0 .516-.468.9-1.62.9-1.008 0-2.064-.36-2.772-.876l-.66 1.464c.744.576 2.088.972 3.42.972zM70.995 9V.6h-1.944V9h1.944zm7.426 0V2.184h2.688V.6h-7.32v1.584h2.688V9h1.944zm9.358 0V6.024L91.043.6h-1.908l-2.244 3.732L84.647.6h-2.064L85.835 6v3h1.944zm15.044.144c2.64 0 4.596-1.836 4.596-4.344S105.463.456 102.823.456c-2.652 0-4.596 1.848-4.596 4.344 0 2.496 1.944 4.344 4.596 4.344zm0-1.656c-1.5 0-2.628-1.092-2.628-2.688s1.128-2.688 2.628-2.688c1.5 0 2.628 1.092 2.628 2.688s-1.128 2.688-2.628 2.688zM112.577 9V5.94h3.888V4.38h-3.888V2.16h4.404V.6h-6.348V9h1.944zm14.564 0V.6h-1.944V9h1.944zm9.898 0V7.416h-4.212V.6h-1.944V9h6.156zm8.998 0V7.416h-4.212V.6h-1.944V9h6.156zm4.786 0V.6h-1.944V9h1.944zm5.662 0V3.9l4.188 5.1h1.596V.6h-1.92v5.1L156.173.6h-1.608V9h1.92zm13.594.144c2.64 0 4.596-1.836 4.596-4.344S172.719.456 170.079.456c-2.652 0-4.596 1.848-4.596 4.344 0 2.496 1.944 4.344 4.596 4.344zm0-1.656c-1.5 0-2.628-1.092-2.628-2.688s1.128-2.688 2.628-2.688c1.5 0 2.628 1.092 2.628 2.688s-1.128 2.688-2.628 2.688zM179.833 9V.6h-1.944V9h1.944zm6.502.144c2.4 0 3.564-1.2 3.564-2.604 0-3.084-4.884-2.016-4.884-3.564 0-.528.444-.96 1.596-.96.744 0 1.548.216 2.328.66l.6-1.476c-.78-.492-1.86-.744-2.916-.744-2.388 0-3.54 1.188-3.54 2.616 0 3.12 4.884 2.04 4.884 3.612 0 .516-.468.9-1.62.9-1.008 0-2.064-.36-2.772-.876l-.66 1.464c.744.576 2.088.972 3.42.972zm15.524 0c2.388 0 3.804-1.368 3.804-3.84V.6h-1.92v4.632c0 1.596-.684 2.256-1.872 2.256-1.176 0-1.872-.66-1.872-2.256V.6h-1.944v4.704c0 2.472 1.416 3.84 3.804 3.84zM211.277 9V6.66h1.788l1.62 2.34h2.088l-1.884-2.7c1.092-.468 1.728-1.392 1.728-2.652 0-1.884-1.404-3.048-3.648-3.048h-3.636V9h1.944zm1.584-3.888h-1.584V2.184h1.584c1.188 0 1.788.54 1.788 1.464 0 .912-.6 1.464-1.788 1.464zM224.247 9c2.208 0 3.36-.84 3.36-2.292 0-1.056-.6-1.776-1.536-2.076.684-.36 1.116-1.008 1.116-1.848 0-1.308-1.08-2.184-3.18-2.184h-4.104V9h4.344zm-.48-4.956h-1.932v-1.98h1.932c.948 0 1.464.324 1.464.984 0 .66-.516.996-1.464.996zm.336 3.492h-2.268V5.46h2.268c1.008 0 1.548.336 1.548 1.044 0 .72-.54 1.032-1.548 1.032zM231.721 9l.744-1.8h3.9l.744 1.8h2.04L235.393.6h-1.92L229.729 9h1.992zm4.032-3.276h-2.664l1.332-3.216 1.332 3.216zM243.695 9V3.9l4.188 5.1h1.596V.6h-1.92v5.1L243.383.6h-1.608V9h1.92zm10.414 0l.744-1.8h3.9l.744 1.8h2.04L257.781.6h-1.92L252.117 9h1.992zm4.032-3.276h-2.664l1.332-3.216 1.332 3.216zm8.77.648v-1.5h-3.396v1.5h3.396zm7.426 2.772c1.464 0 2.676-.528 3.468-1.5l-1.248-1.152c-.564.66-1.272.996-2.112.996-1.572 0-2.688-1.104-2.688-2.688s1.116-2.688 2.688-2.688c.84 0 1.548.336 2.112.984l1.248-1.152c-.792-.96-2.004-1.488-3.456-1.488-2.616 0-4.56 1.812-4.56 4.344s1.944 4.344 4.548 4.344zm8.47-.144V5.556h3.816V9h1.944V.6h-1.944v3.312h-3.816V.6h-1.944V9h1.944zm10.39 0l.744-1.8h3.9l.744 1.8h2.04L296.869.6h-1.92L291.205 9h1.992zm4.032-3.276h-2.664l1.332-3.216 1.332 3.216zM305.075 9V4.068l2.46 4.044h.876l2.472-4.152.012 5.04h1.824l-.024-8.4h-1.596l-3.096 5.22L304.859.6h-1.608V9h1.824zm13.33 0V6.684h1.692c2.244 0 3.648-1.164 3.648-3.036 0-1.884-1.404-3.048-3.648-3.048h-3.636V9h1.944zm1.584-3.9h-1.584V2.184h1.584c1.188 0 1.788.54 1.788 1.464 0 .912-.6 1.452-1.788 1.452zm7.354 3.9l.744-1.8h3.9l.744 1.8h2.04L331.015.6h-1.92L325.351 9h1.992zm4.032-3.276h-2.664l1.332-3.216 1.332 3.216zM339.341 9V.6h-1.944V9h1.944zm7.798.144c1.2 0 2.472-.372 3.396-1.068V4.668h-1.776v2.46c-.492.264-.984.36-1.512.36-1.608 0-2.724-1.116-2.724-2.688 0-1.596 1.116-2.688 2.748-2.688.852 0 1.56.3 2.172.948l1.248-1.152c-.816-.948-2.04-1.452-3.516-1.452-2.676 0-4.62 1.812-4.62 4.344s1.944 4.344 4.584 4.344zM356.005 9V3.9l4.188 5.1h1.596V.6h-1.92v5.1L355.693.6h-1.608V9h1.92z"></path>
              </svg>
            </a>
          </div>
          <div
            id="featurelinks"
            className="col p-0 text-right"
            role="navigation"
            aria-label="Top Bar"
          ></div>
        </div>
      </div>

      <div className="container-fluid site">
        <div className="row wordmark d-flex flex-nowrap align-items-center">
          <div className="col d-flex flex-fill px-0">
            <div className="blocki">
              <a href="https://illinois.edu">
                University of Illinois at Urbana-Champaign
              </a>
            </div>
            <div className="site_identification">
              <div className="parent_name">
                <a href="https://grainger.illinois.edu">
                  The Grainger College of Engineering
                </a>
              </div>
              <div className="site_name">
                <a href="/">
                  <span>Applied Research Institute</span>
                </a>
              </div>
            </div>
          </div>

          <div className="col d-flex align-items-center px-0">
            <div
              id="header-search-container"
              className="d-none d-lg-block site-search"
            >
              <form
                className="form-inline"
                method="get"
                action="/search"
                id="search-form"
                role="search"
              >
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    name="q"
                    placeholder="Search"
                    aria-label="Search this site"
                    aria-describedby="header-search-go-button"
                  />
                  <div className="input-group-append">
                    <button
                      // onClick="$('#header-search-container form').submit(); return false;"
                      className="input-group-text"
                      id="header-search-go-button"
                    >
                      <i className="far fa-search"></i>
                      <span className="sr-only">Search</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div id="mainnav-toggler-container">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#mainnav"
                aria-controls="mainnav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon"></span>
                <span className="label sr-only">Menu</span>
              </button>
            </div>
          </div>
        </div>
        {/* <nav className="navbar navbar-expand-lg p-0" aria-label="Main Menu">
          <div className="collapse navbar-collapse" id="mainnav">
            <form
              className="d-block d-lg-none"
              method="get"
              action="/search"
              id="mobile-search-form"
            >
              <div className="p-3">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    name="q"
                    placeholder="Search"
                    aria-label="Search this site"
                    aria-describedby="mobile-search-go-button"
                  />
                  <div className="input-group-append">
                    <a
                      href="/search"
                      // onclick="$('#mobile-search-form').submit(); return false;"
                      className="input-group-text"
                      id="mobile-search-go-button"
                    >
                      <i className="far fa-search" aria-hidden="true"></i>
                      <span className="sr-only">Search</span>
                    </a>
                  </div>
                </div>
              </div>
            </form>
            <ul className="navbar-nav w-100">
              <li className="dropdown simple nav-item">
                <a
                  href="/about"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <span>About</span>
                </a>
                <div className="dropdown-menu tile-list" id="mainnav-about">
                  <section className="tile menu white-box col">
                    <h2>
                      <a href="/about">About</a>
                    </h2>
                    <div className="row">
                      <div className="menucol col-sm">
                        <ul>
                          <li>
                            <a href="/about/strategic-plan" className="">
                              Stategic Plan
                            </a>
                          </li>
                          <li>
                            <a
                              href="/about/connections-research-park-and-campus"
                              className=""
                            >
                              Connections with Research Park and Campus
                            </a>
                          </li>
                          <li>
                            <a href="/about/contact-us" className="">
                              Contact Us
                            </a>
                          </li>
                          <li>
                            <a href="/about/careers" className="">
                              Careers
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>
                </div>
              </li>
              <li className="dropdown simple nav-item">
                <a
                  href="/core-competencies"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <span>Core Competencies</span>
                </a>
                <div
                  className="dropdown-menu tile-list"
                  id="mainnav-core-competencies"
                >
                  <section className="tile menu white-box col">
                    <h2>
                      <a href="/core-competencies">Core Competencies</a>
                    </h2>
                    <div className="row">
                      <div className="menucol col-sm">
                        <ul>
                          <li>
                            <a
                              href="/core-competencies/algorithm-and-software-development"
                              className=""
                            >
                              Algorithm and Software Development
                            </a>
                          </li>
                          <li>
                            <a
                              href="/core-competencies/contextual-innovation-and-practice"
                              className=""
                            >
                              Contextual Innovation and Practice
                            </a>
                          </li>
                          <li>
                            <a
                              href="/core-competencies/materials-development"
                              className=""
                            >
                              Materials Development
                            </a>
                          </li>
                          <li>
                            <a
                              href="/core-competencies/monitoring-diagnostics-and-controls"
                              className=""
                            >
                              Monitoring, Diagnostics and Controls
                            </a>
                          </li>
                          <li>
                            <a href="/core-competencies/training" className="">
                              Training
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>
                </div>
              </li>
              <li className="dropdown simple nav-item">
                <a
                  href="/impact-areas"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <span>Impact Areas</span>
                </a>
                <div
                  className="dropdown-menu tile-list"
                  id="mainnav-impact-areas"
                >
                  <section className="tile menu white-box col">
                    <h2>
                      <a href="/impact-areas">Impact Areas</a>
                    </h2>
                    <div className="row">
                      <div className="menucol col-sm">
                        <ul>
                          <li>
                            <a
                              href="/impact-areas/building-science"
                              className=""
                            >
                              Building Science
                            </a>
                          </li>
                          <li>
                            <a
                              href="/impact-areas/defense-and-security"
                              className=""
                            >
                              Defense and Security
                            </a>
                          </li>
                          <li>
                            <a href="/impact-areas/health" className="">
                              Health
                            </a>
                          </li>
                          <li>
                            <a href="/impact-areas/manufacturing" className="">
                              Manufacturing
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>
                </div>
              </li>
              <li className="dropdown simple nav-item">
                <a
                  href="/work-us"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <span>Work With Us</span>
                </a>
                <div className="dropdown-menu tile-list" id="mainnav-work-us">
                  <section className="tile menu white-box col">
                    <h2>
                      <a href="/work-us">Work With Us</a>
                    </h2>
                    <div className="row">
                      <div className="menucol col-sm">
                        <ul>
                          <li>
                            <a href="/work-us/benefits-ari" className="">
                              Benefits of ARI
                            </a>
                          </li>
                          <li>
                            <a href="/work-us/what-we-do" className="">
                              What We Do
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>
                </div>
              </li>
              <li className="dropdown simple nav-item">
                <a
                  href="/staff"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <span>Our People</span>
                </a>
                <div className="dropdown-menu tile-list" id="mainnav-staff">
                  <section className="tile menu white-box col">
                    <h2>
                      <a href="/staff">Our People</a>
                    </h2>
                    <div className="row">
                      <div className="menucol col-sm">
                        <ul>
                          <li>
                            <a href="/staff/all-staff" className="">
                              Our People
                            </a>
                          </li>
                          <li>
                            <a href="/staff/executive-leadership" className="">
                              Leadership
                            </a>
                          </li>
                          <li>
                            <a href="/staff/research-staff" className="">
                              Research Staff
                            </a>
                          </li>
                          <li>
                            <a href="/staff/operations-staff" className="">
                              Operations Staff
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>
                </div>
              </li>
              <li className="dropdown mega nav-item">
                <a
                  href="/ari-spotlight"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <span>ARI Spotlight</span>
                </a>
                <div
                  className="dropdown-menu tile-list"
                  id="mainnav-ari-spotlight"
                >
                  <section className="tile menu white-box col">
                    <h2>
                      <a href="/ari-spotlight">ARI Spotlight</a>
                    </h2>
                    <div className="row">
                      <div className="menucol col-sm">
                        <ul>
                          <li>
                            <a
                              href="/ari-spotlight/archive-spotlight-profiles"
                              className=""
                            >
                              Archive Spotlight Profiles
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>
                </div>
              </li>
              <li className="dropdown simple nav-item">
                <a
                  href="/newsevents"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <span>News & Events</span>
                </a>
                <div
                  className="dropdown-menu tile-list"
                  id="mainnav-newsevents"
                >
                  <section className="tile menu white-box col">
                    <h2>
                      <a href="/newsevents">News & Events</a>
                    </h2>
                    <div className="row">
                      <div className="menucol col-sm">
                        <ul>
                          <li className="dropdown">
                            <a href="/newsevents/news" className="">
                              Current News
                            </a>
                            <ul className="news">
                              <li>
                                <a
                                  href="/newsevents/news/news-archive"
                                  className=""
                                >
                                  News Archive
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/newsevents/news/ari-publications"
                                  className=""
                                >
                                  Publications
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="/newsevents/events" className="">
                              Events
                            </a>
                            <ul className="events">
                              <li>
                                <a
                                  href="/newsevents/events/workshops-and-training"
                                  className=""
                                >
                                  Workshops and Training
                                </a>
                              </li>
                              <li className="dropdown">
                                <a
                                  href="/newsevents/events/past-events"
                                  className=""
                                >
                                  Past Events
                                </a>
                                <ul className="past-events">
                                  <li>
                                    <a
                                      href="/newsevents/events/past-events/2013-events-and-announcements"
                                      className=""
                                    >
                                      2013 Events and Announcements
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="/newsevents/events/past-events/2014-events-and-announcements"
                                      className=""
                                    >
                                      2014 Events and Announcements
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="/newsevents/events/past-events/2015-events-and-announcements"
                                      className=""
                                    >
                                      2015 Events and Announcements
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="/newsevents/events/past-events/2016-events"
                                      className=""
                                    >
                                      2016 Events
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="/newsevents/events/past-events/2017-events"
                                      className=""
                                    >
                                      2017 Events
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>
                </div>
              </li>
            </ul>
          </div>
        </nav> */}
      </div>
    </header>
  );
}
