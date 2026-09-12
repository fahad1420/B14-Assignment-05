import { FiMenu } from "react-icons/fi";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <button className="mobile-menu-button" type="button" aria-label="Open menu">
          <FiMenu />
        </button>

        <a className="brand" href="#home">
          <img src="/assets/logo-text.png" alt="Dev Stack" />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="auth-actions">
          <button className="sign-in-button" type="button">
            Sign In
          </button>

          <button className="sign-up-button" type="button">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;