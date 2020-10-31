import { DefaultSeo } from "next-seo";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import MainLayout from "../layouts/MainLayout";
import "../styles/main.scss";
import Head from "next/head";

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
            <Head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <Layout {...layoutProps}>
                <Component {...pageProps} />
            </Layout>
        </>
    );
};

export default App;
