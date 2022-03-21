
const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <p>The weather</p>
            </div>
            <div className="menu">
                <nav className="nav-bar">
                    <ul className="list">
                        <li>Home</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
            <div className="menu-btn">
                <div className="menu-btn__burger"></div>
            </div>
        </header>
    )
}

export default Header;