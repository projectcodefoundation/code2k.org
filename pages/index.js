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
);

const Section1 = () => (
    <div className="section">
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

const Index = () => {
    return (
        <>
            <Banner />
            <Section1 />
        </>
    );
};

export default Index;
