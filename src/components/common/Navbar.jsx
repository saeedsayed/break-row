// hooks
import { useEffect, useRef, useState } from "react";
// components
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import MainButton from "./MainBtn";
import { motion } from "framer-motion";
// data
import { PAGES_LINKS } from "../../data/dummyData";
// assets
import logoImageLight from "../../assets/images/logo_light.png";
import logoImageDark from "../../assets/images/logo_dark.png";
// styles
import "./Navbar.css";
import { fadeLeftVariant, fadeRightVariant } from "../../data/framerMotionVariant";

const MainNavbar = () => {
  const [logo, setLogo] = useState(logoImageLight);
  const header = useRef(null);

  useEffect((_) => {
    window.addEventListener("scroll", (_) => {
      if (window.scrollY > 200) {
        // console.log(header.current);
        header.current?.classList.add("sticky-top", "dark-header");
        header.current.classList.remove("header-to-top", "position-absolute");
        setLogo(logoImageDark);
      } else if (window.scrollY > 100) {
        // header.current.classList.remove("");
        header.current.classList.add("header-to-top");
      } else {
        header.current.classList.remove(
          "header-to-top",
          "sticky-top",
          "dark-header"
        );
        header.current.classList.add("position-absolute");
        setLogo(logoImageLight);
      }
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);
  return (
    <Navbar
      expand="lg"
      ref={header}
      className="px-md-2 header position-absolute "
    >
      <Container fluid>
        <Link to={"/"}>
          <motion.img
            variants={fadeLeftVariant}
            src={logo}
            className="w-50"
            alt="BREAKROW"
          />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "200px" }}
            navbarScroll
          >
            {PAGES_LINKS.map((link) => (
              <motion.span
                key={link.path}
                variants={fadeRightVariant}
                //   transition={{ duration: 2 }}
              >
                <NavLink
                  to={link.path}
                  key={link.path}
                  // className="text-decoration-none text-black px-3"
                  className={`header-nav_link`}
                >
                  {link.name}
                </NavLink>
              </motion.span>
            ))}
          </Nav>
          <MainButton>اتصل الان</MainButton>
          {/* <Form className="d-flex">
            <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
        </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
