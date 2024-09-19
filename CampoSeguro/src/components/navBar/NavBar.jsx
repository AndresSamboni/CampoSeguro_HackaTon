// Component: name = NavBar
import { Button, Navbar } from "flowbite-react";
import { useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate()

    return (
        <header className="bg-white sticky top-0 w-full z-10">

            <Navbar fluid rounded>
                <Navbar.Brand href="https://flowbite-react.com">
                    <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Button onClick={() => navigate('/#inicio')} type="button">Reporta un Cultivo</Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="#inicio" active>
                        Inicio
                    </Navbar.Link>
                    <Navbar.Link href="#queremos">Ayudanos</Navbar.Link>
                    <Navbar.Link href="#nosotros">Sobre Nosotros</Navbar.Link>
                    <Navbar.Link href="#">Pricing</Navbar.Link>
                    <Navbar.Link href="#">Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </header>

    );
}
export default NavBar;