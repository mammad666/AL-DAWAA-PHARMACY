import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

export default function App() {
  return (
    <Navbar maxWidth="full" style={{ backgroundColor: "#008080" }}>
      <NavbarBrand>
        <Link href="/">
          <img
            src="newlogo.jpg"
            className="h-12 w-auto"
            alt="Al-Dawaa Pharma Logo"
          ></img>
          <p className=" font-sans font-bold text-inherit text-white px-2">
            AL-DAWAA PHARMA
          </p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <a className="font-sans text-white" color="foreground" href="#home">
            Home
          </a>
        </NavbarItem>
        <NavbarItem>
          <a
            href="#services"
            aria-current="page"
            className="font-sans text-white"
          >
            Services
          </a>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link className=" font-sans text-white" href="#contactus">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
