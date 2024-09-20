// Import libraries
import { Button, Navbar } from "flowbite-react";

// Component name:NavBar
function NavBar() {

    // Navigation into the navbar

    // Render component
    return (
        <header className="bg-lightGray sticky top-0 w-full z-50 shadow-md">
            <Navbar fluid rounded>
                <Navbar.Brand href="#inicio">
                    <img src="/logo/logo.png" className="mr-3 h-12 sm:h-24" alt="Campo Seguro Logo" />
                    <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white text-darkText">Campo Seguro</span>
                </Navbar.Brand>
                <div className="flex md:order-2 text-2xl">
                    <a href="#reportarMapa">
                        <Button
                            type="button"
                            className="bg-ctaOrange hover:bg-orange-500 text-white"
                        >
                            Contribuye a un Cauca Seguro
                        </Button>
                    </a>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="#inicio" active className="text-xl text-primaryBlue">
                        Inicio
                    </Navbar.Link>
                    <Navbar.Link href="#queremos" className="text-xl text-primaryBlue">
                        Ayúdanos
                    </Navbar.Link>
                    <Navbar.Link href="#nosotros" className="text-xl text-primaryBlue">
                        Sobre Nosotros
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

// Export component
export default NavBar;