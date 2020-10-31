import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import {
    faBookOpen,
    faChalkboardTeacher,
    faChevronRight,
    faCode,
    faCompass,
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
                            className="button is-medium"
                        >
                            <span>Discord</span>
                            <span className="icon">
                                <FontAwesomeIcon icon={faDiscord} />
                            </span>
                        </a>
                        <a
                            href="https://www.eventbrite.com/e/code2k-tickets-127225654357"
                            className="button is-medium is-primary"
                        >
                            <span>Register</span>
                            <span className="icon">
                                <FontAwesomeIcon icon={faChevronRight} />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const AboutColumn = ({ icon, title, children }) => (
    <div className="column">
        <div
            className="box has-shadow has-text-centered"
            style={{ height: "100%" }}
        >
            <div className="card-content has-text-centered">
                <FontAwesomeIcon icon={icon} size="3x" className="mb-5" />
                <p className="title is-4">{title}</p>
                <p>{children}</p>
            </div>
        </div>
    </div>
);

const About = () => (
    <div className="section" id="about">
        <div className="container">
            <p className="title is-3 has-text-centered mb-6">How it works</p>
            <div className="columns">
                <AboutColumn icon={faCompass} title="Discover">
                    Discover all sorts of exciting concepts and technologies
                    through our hour&#8209;long workshops
                </AboutColumn>
                <AboutColumn icon={faBookOpen} title="Learn">
                    Learn from our instructors and follow our guides to deep
                    dive into your chosen topic.
                </AboutColumn>
                <AboutColumn icon={faCode} title="Create">
                    Create a project of your own using your new skills, with the
                    help of our mentors along the way.
                </AboutColumn>
            </div>
        </div>
    </div>
);

const Question = ({ q, children }) => (
    <div className="tile is-child">
        <p className="title is-4 mb-2">{q}</p>
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

const ScheduleTable = ({ title, children }) => (
    <>
        <p className="title is-5">{title}</p>
        <table className="table is-bordered is-fullwidth is-transparent">
            <tbody>{children}</tbody>
        </table>
    </>
);

const ScheduleItem = ({ time, children }) => (
    <tr>
        <td style={{ width: "40%" }}>{time}</td>
        <td>{children}</td>
    </tr>
);

const Schedule = () => (
    <div className="section" id="schedule">
        <div className="container">
            <p className="title is-3 has-text-centered">Schedule</p>

            <ScheduleTable title="Friday, December 18 — Kickoff">
                <ScheduleItem time="5:00 – 5:30 PM">
                    Opening Ceremony
                </ScheduleItem>
                <ScheduleItem time="5:30 – 6:30 PM">TBD</ScheduleItem>
                <ScheduleItem time="6:30 – 7:30 PM">
                    Workshop: Introduction to Python
                </ScheduleItem>
            </ScheduleTable>

            <ScheduleTable title="Saturday, December 19 — Workshop day!">
                <ScheduleItem time="9:00 – 9:30 AM">Day 1 Opening</ScheduleItem>
                <ScheduleItem time="10:00 – 11:00 AM">
                    Workshop: Making Text-based Games with Python
                </ScheduleItem>
                <ScheduleItem time="11:00 AM – 12:00 PM">
                    Workshop: Making Discord Bots with Python
                </ScheduleItem>
                <ScheduleItem time="12:00 – 1:00 PM">Lunch Break</ScheduleItem>
                <ScheduleItem time="1:00 – 2:00 PM">
                    Workshop: Teachable Machine
                </ScheduleItem>
                <ScheduleItem time="2:00 – 3:00 PM">
                    Workshop: Basic 3D Modeling
                </ScheduleItem>
                <ScheduleItem time="3:00 – 4:00 PM">
                    Workshop: Game Design with Unity
                </ScheduleItem>
                <ScheduleItem time="4:00 – 5:00 PM">
                    Workshop: Bot Battles
                </ScheduleItem>
                <ScheduleItem time="5:00 – 5:30 PM">Day 1 Wrap Up</ScheduleItem>
            </ScheduleTable>

            <ScheduleTable title="Sunday, December 20">
                <ScheduleItem time="9:00 – 9:30 AM">Day 2 Opening</ScheduleItem>
                <ScheduleItem time="9:30 AM – 12:00 PM">
                    Morning Worksession &amp; Mentorship – Activities TBD
                </ScheduleItem>
                <ScheduleItem time="12:00 – 1:00 PM">Lunch Break</ScheduleItem>
                <ScheduleItem time="1:00 – 3:00 PM">
                    Afternoon Worksession &amp; Mentorship
                </ScheduleItem>
                <ScheduleItem time="3:00 – 5:00 PM">
                    Closing Ceremony
                </ScheduleItem>
            </ScheduleTable>
        </div>
    </div>
);

const Sponsors = () => (
    <div className="section" id="sponsors">
        <div className="container has-text-centered">
            <p className="title is-3">Sponsors</p>
            <p className="content">
                This section will be updated soon with our sponsors.
                <br />
                Want to sponsor us? Send us an email at{" "}
                <a href="sponsorship@code2k.org">sponsorship@code2k.org</a>.
            </p>
            <a href="/sponsorship.pdf" className="button">
                Sponsorship Prospectus
            </a>
        </div>
    </div>
);

const Footer = () => (
    <div className="section">
        <div className="container has-text-centered">
            <p className="content">
                Code2K is a program of the{" "}
                <a href="https://project-code.org">Project Code Foundation</a>,
                a 501(c)(3) nonprofit.
            </p>
            <img src={require("../assets/pcf_logo.png")} width="200" />
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
            <Footer />
        </>
    );
};

export default Index;
