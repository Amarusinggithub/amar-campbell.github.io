const Header=()=>{
return(
    <>
        <header className="s-header">
            <div className="header-mobile">
                <span className="mobile-home-link"><a href="index.html">Amar Campbell</a></span>
                <a className="mobile-menu-toggle" href="#0"><span>Menu</span></a>
            </div>

            <div className="row wide main-nav-wrap">
                <nav className="column lg-12 main-nav">
                    <ul>
                        <li className="current"><a href="#intro">Intro</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        <section id="intro" className="s-intro">
            <div className="row intro-content wide">
                <div className="column">
                    <div className="text-pretitle with-line">Hello World</div>
                    <h1 className="text-huge-title">
                        I am Amar,<br>
                        a Software Developer<br>
                        specializing in Mobile and Web<br>
                        Development.
                    </h1>
                </div>

                <ul className="intro-social">
                    <li><a href="#0">GitHub</a></li>
                    <li><a href="#0">LinkedIn</a></li>
                </ul>
            </div>

            <a href="#about" className="intro-scrolldown smoothscroll">
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/>
                </svg>
            </a>
        </section>

    </>
);
}

export default Header;