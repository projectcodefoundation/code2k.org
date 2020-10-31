import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
    return (
        <div className="main">
            <Navbar
                className="is-transparent"
                style={{ backgroundColor: "transparent" }}
                brand={
                    <Navbar.Item href="/" active={false}>
                        <img src={require("../assets/code2k_logo.png")} />
                    </Navbar.Item>
                }
            >
                <Navbar.Item href="/">About</Navbar.Item>
                <Navbar.Item href="/faq">FAQ</Navbar.Item>
                <Navbar.Item href="/schedule">Schedule</Navbar.Item>
                <Navbar.Item href="/sponsors">Sponsors</Navbar.Item>
            </Navbar>

            {children}
        </div>
    );
};

export default MainLayout;
