import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import Logo from '../../public/images/logo.svg';
const Header = () => {
  return (
    <>
    <div className="top_header">
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link className="navbar-brand" href="/">
                <Image src={Logo} width={130} height={44} alt="logo" priority/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav top_nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" href="#about">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" href="#">Platform</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" href="#">Blockchain</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" href="#">Treasury</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" href="#">Contact</Link>
                    </li>
                     
                     
                </ul>
                <div className="top_button">
                    <Button variant="top_nav_button" href="#"> Trading</Button>
                </div>
                </div>
            </div>
            </nav>
    </div>
    </>
  )
}

export default Header