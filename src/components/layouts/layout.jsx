export default function Layout(props) {
    const {children} = props

    return(

        <>
            <header>
                {/* title */}
                <h1 className="text-gradient">Copacitic</h1>
            </header>

            {/* main */}
            <main>
                {children}
            </main>

            <footer>
                <small>Created by: Asmaa Maryah</small>

                {/* github Repo */}
                <a target="_blank" href="https://github.com/asmaa505">

                {/* gitHub Profile Picture */}
                <img src="https://avatars.githubusercontent.com/u/145287676?v=4" alt="PFP" />

                {/* github user name */}
                <p>asmaa505</p>

                {/* gitHub icon */}
                <i className="fa-brands fa-github"></i>
                </a>

            </footer>
        </>

    )

}