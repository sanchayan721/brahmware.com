import AOS from "aos";
import { lazy, Suspense } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//CSS File Here
/* import "./assets/css/style.min.css"; */
import "aos/dist/aos.css";
import "./assets/css/plugins/animate.css";
import "swiper/components/navigation/navigation.scss";
import "swiper/swiper.scss";
import "./assets/scss/style.scss";
import NavScrollTop from "./components/nav-scroll-top";

// UI Components Here
import LoadingPage from "./pages/loading";
const HomePage = lazy(() => import("./pages/index"));
const AboutPage = lazy(() => import("./pages/about"));
const PricingPage = lazy(() => import("./pages/pricing"));
const ContactPage = lazy(() => import("./pages/contact"));
const WorksPage = lazy(() => import("./pages/works.jsx"));
const ProjectDetails = lazy(() => import("./templates/project-details"));
/* const BlogDetails = lazy(() => import("./templates/blog-details"));
const BlogCategory = lazy(() => import("./templates/blog-category"));
const BlogDate = lazy(() => import("./templates/blog-date"));
const BlogAuthor = lazy(() => import("./templates/blog-author"));
const BlogTag = lazy(() => import("./templates/blog-tag"));
const BlogPage = lazy(() => import("./pages/blog")); */
const OurServices = lazy(() => import("./pages/services"));
const careerPage = lazy(() => import("./pages/career"));
const privacyPolicy = lazy(() => import("./pages/privacyPolicy"));


const App = () => {
    /* console.log(process.env.REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY)
    console.log(process.env.REACT_APP_GOOGLE_RECAPTCHA_SECRET_KEY) */
    useEffect(() => {
        AOS.init({
            offset: 80,
            duration: 1000,
            once: true,
            easing: "ease",
        });
        AOS.refresh();
    }, []);
    return (
        <Router>
            <NavScrollTop>
                <Suspense fallback={<LoadingPage />}>
                    <Switch>
                        <Route
                            path={`${process.env.PUBLIC_URL + "/"}`}
                            exact
                            component={HomePage}
                        />
                        <Route
                            path={`${process.env.PUBLIC_URL + "/about"}`}
                            component={AboutPage}
                        />
                        <Route
                            path={`${process.env.PUBLIC_URL + "/services"}`}
                            component={OurServices}
                        />
                        <Route
                            path={`${process.env.PUBLIC_URL + "/pricing"}`}
                            component={PricingPage}
                        />
                        <Route
                            path={`${process.env.PUBLIC_URL + "/works"}`}
                            component={WorksPage}
                        />
                        <Route
                            path={`${process.env.PUBLIC_URL + "/project-detalis/:id"}`}
                            component={ProjectDetails}
                        />
                        {/* <Route
                            path={`${process.env.PUBLIC_URL + "/blog"}`}
                            component={BlogPage}
                        />
                        <Route
                            path={`${process.env.PUBLIC_URL + "/blog-details/:id"}`}
                            component={BlogDetails}
                        />
                        <Route
                            path={`${process.env.PUBLIC_URL + "/category/:slug"}`}
                            component={BlogCategory}
                        />
                        <Route
                            path={`${process.env.PUBLIC_URL + "/date/:date"}`}
                            component={BlogDate}
                        />
                        <Route
                            path={`${process.env.PUBLIC_URL + "/author/:author"}`}
                            component={BlogAuthor}
                        /> */}
                        <Route
                            path={`${process.env.PUBLIC_URL + "/career"}`}
                            component={careerPage}
                        />
                        <Route
                            path={`${process.env.PUBLIC_URL + "/contact"}`}
                            component={ContactPage}
                        />
                        <Route
                            path={`${process.env.PUBLIC_URL + "/privacy-policy"}`}
                            component={privacyPolicy}
                        />
                        {/* <Route
                            path={`${process.env.PUBLIC_URL + "/loading"}`}
                            component={LoadingPage}
                        /> */}
                    </Switch>
                </Suspense>
            </NavScrollTop>
        </Router>
    );
};

export default App;
