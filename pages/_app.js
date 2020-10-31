import { DefaultSeo } from "next-seo";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import MainLayout from "../layouts/MainLayout";
import "../styles/main.scss";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const App = ({ Component, pageProps }) => {
    const Layout = Component.layout || MainLayout;
    const layoutProps = Component.layoutProps || {};

    return (
        <>
            <DefaultSeo
                title="Code2K"
                description="Code2K is a weekend of CS discovery. It's a self-directed hackathon for students all around the world. No matter how experienced you are, join us this winter to learn something new, create your very own project, and dive into the fascinating world of programming."
            />
            <Layout {...layoutProps}>
                <Component {...pageProps} />
            </Layout>
        </>
    );
};

export default App;
