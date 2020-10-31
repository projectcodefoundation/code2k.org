import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import {
    faChalkboardTeacher,
    faChevronRight,
    faTrophy,
    faTv,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Link from "next/link";

const Banner = () => (
    <div className="section">
        <div className="container">
            <div className="columns">
                <div className="column is-8-desktop is-offset-2-desktop has-text-centered">
                    <p className="title is-2 has-text-centered">
                        Discover. Learn. Create.
                    </p>
                    <p className="subtitle is-4 has-text-centered">
                        December 18–20, 2020
                    </p>
                    <p className="subtitle is-4 is-family-primary">
                        Code2K is a weekend of CS discovery. It's a
                        self-directed hackathon for students all around the
                        world. No matter how experienced you are, join us this
                        winter to learn something new, create your very own
                        project, and dive into the fascinating world of
                        programming.
                    </p>
                    <div className="buttons is-centered">
                        <a
                            href="https://discord.gg/SgGZrjK4H3"
                            className="button is-medium has-shadow"
                        >
                            <span>Discord</span>
                            <span className="icon">
                                <FontAwesomeIcon icon={faDiscord} />
                            </span>
                        </a>
                        <Link href="/">
                            <a className="button is-medium is-primary has-shadow">
                                <span>Register</span>
                                <span className="icon">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const About = () => (
    <div className="section" id="about">
        <div className="container">
            <p className="title is-3 has-text-centered mb-6">How it works</p>
            <div className="columns">
                <div className="column">
                    <div className="box has-shadow has-text-centered">
                        <div className="card-content has-text-centered">
                            <FontAwesomeIcon
                                icon={faChalkboardTeacher}
                                size="3x"
                                className="mb-5"
                            />
                            <p className="title is-4">Discover</p>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="box has-shadow">
                        <div className="card-content has-text-centered">
                            <FontAwesomeIcon
                                icon={faTrophy}
                                size="3x"
                                className="mb-5"
                            />
                            <p className="title is-4">Learn</p>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="box has-shadow">
                        <div className="card-content has-text-centered">
                            <FontAwesomeIcon
                                icon={faTv}
                                size="3x"
                                className="mb-5"
                            />
                            <p className="title is-4">Create</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const Question = ({ q, children }) => (
    <div className="tile is-child">
        <h4 className="title is-4 mb-2">{q}</h4>
        <p className="content is-size-5">{children}</p>
    </div>
);

const FAQ = () => (
    <div className="section" id="faq">
        <div className="container">
            <p className="title is-3 has-text-centered mb-6">FAQ</p>

            <div className="tile is-ancestor">
                <div className="tile is-vertical is-parent">
                    <Question q="Who can attend?">
                        Any student aged 10-18 is eligible to participate in
                        Code2K. Students do not need any prior experience—we
                        have many workshops for you to learn from!
                    </Question>

                    <Question q="Can I come with a friend?">
                        Yes! We encourage you to invite your friends to Code2K
                        and work together on your project. However, you can
                        still work alone if you would like.
                    </Question>
                </div>
                <div className="tile is-vertical is-parent">
                    <Question q="How will the event be held?">
                        Code2K will be held live over Discord from December
                        18–20, 2020. Please join our Discord server at{" "}
                        <a href="https://discord.gg/SgGZrjK4H3">this link</a>.
                    </Question>

                    <Question q="How much does the event cost?">
                        Thanks to our sponsors, our event is completely free for
                        everyone to attend!
                    </Question>
                </div>
            </div>
        </div>
    </div>
);

const Schedule = () => (
    <div className="section" id="schedule">
        <div className="container">
            <p className="title is-3 has-text-centered mb-6">Schedule</p>
        </div>
    </div>
);

const Sponsors = () => (
    <div className="section" id="sponsors">
        <div className="container">
            <p className="title is-3 has-text-centered mb-6">Sponsors</p>
        </div>
    </div>
);

const Index = () => {
    return (
        <>
            <Banner />
            <About />
            <FAQ />
            <Schedule />
            <Sponsors />
        </>
    );
};

export default Index;
