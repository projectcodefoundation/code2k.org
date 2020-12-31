import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import {
    faBookOpen,
    faChevronRight,
    faCode,
    faCompass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Banner = () => (
    <div className="section">
        <div className="container">
            <div className="columns">
                <div className="column is-8-desktop is-offset-2-desktop has-text-centered">
                    <p className="title is-2 has-text-centered">
                        Discover. Learn. Create.
                    </p>
                    <p className="subtitle is-4 has-text-centered">
                        January 8–10, 2021
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
                    <a href="https://forms.gle/zrQqRLa7YJq16PNN8">
                        Programming wizard? Sign up to mentor
                    </a>
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
            <div className="columns">
                <div className="column is-10-desktop is-offset-1-desktop">
                    <p className="content is-size-5 has-text-centered mt-5">
                        Or, if you already know how to code, feel free to skip
                        the workshops and get advice from our experienced
                        mentors, or use our sponsor-provided resources to create
                        a fresh project!
                    </p>
                </div>
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

                    <Question q="I can't code. Can I come?">
                        Of course! Saturday consists of an entire day of
                        exciting workshops, where our instructors will guide you
                        through basic programming fundamentals. Check out our
                        schedule for more details.
                    </Question>
                </div>
                <div className="tile is-vertical is-parent">
                    <Question q="How will the event be held?">
                        Code2K will be held live over Discord from January 8–10,
                        2021. Please join our Discord server at{" "}
                        <a href="https://discord.gg/SgGZrjK4H3">this link</a>.
                    </Question>

                    <Question q="How much does the event cost?">
                        Thanks to our sponsors, our event is completely free for
                        everyone to attend!
                    </Question>

                    <Question q="What if I already know how to code?">
                        The workshops aren't mandatory, and we've got plenty for
                        you if you're more advanced! Join a speaker event, talk
                        with our mentors, or use some sponsor-provided tools and
                        APIs.
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

const ScheduleItem = ({ time, first, second, children }) => (
    <tr>
        <td style={{ width: "40%" }}>{time}</td>
        <td colSpan={second ? 1 : 2}>{first ?? children}</td>
        {second && <td>{second}</td>}
    </tr>
);

const ScheduleWorkshop = ({ title, children, prereqs, grades }) => (
    <div className="popover">
        <a className="popover-trigger">
            {title}
            {prereqs && " *"}
        </a>
        <div className="popover-content content">
            <p>{children}</p>
            {grades && (
                <p>
                    <b>Recommended Grade Levels:</b> {grades}
                </p>
            )}
            {prereqs && (
                <p>
                    <b>Prerequisites:</b> {prereqs}
                </p>
            )}
        </div>
    </div>
);

const Schedule = () => (
    <div className="section" id="schedule">
        <div className="container">
            <p className="title is-3 has-text-centered">Tentative Schedule</p>

            <p className="content">
                * – This workshop has a prerequisite. Hover for more info.
            </p>

            <ScheduleTable title="Friday, January 8 — Kickoff">
                <ScheduleItem time="5:00 – 5:30 PM">
                    Opening Ceremony
                </ScheduleItem>
                <ScheduleItem time="5:30 – 6:00 PM">
                    Talk by Mr. Howie Xu: VP AI/ML Zscalar, Founder VMware
                    Networking
                </ScheduleItem>
                <ScheduleItem time="6:00 – 8:00 PM">
                    <ScheduleWorkshop title="Introduction to Python (prerequisite for many Saturday workshops)">
                        Python is a versatile and powerful programming language
                        used everywhere from websites to machine learning. Known
                        for its English-like syntax, it is also easy for
                        beginners to learn. In this workshop, we'll go over the
                        basics of the language and make some simple programs.
                        <br />
                        <br />
                        This workshop (or an equivalent Python course) is
                        required for some of the workshops on Saturday.
                    </ScheduleWorkshop>
                </ScheduleItem>
            </ScheduleTable>

            <ScheduleTable title="Saturday, January 9 — Workshop day!">
                <ScheduleItem time="9:00 – 9:30 AM">Day 1 Opening</ScheduleItem>
                <ScheduleItem
                    time="10:00 AM – 12:00 PM"
                    first={
                        <ScheduleWorkshop
                            title="Making Discord Bots with Python"
                            grades="7–9"
                            prereqs="Learned Python before the event; know basics like data types, operators, functions, imports; comfortable with working on projects"
                        >
                            Already know Python and want to create something
                            cool? In this workshop, you'll learn how to use the
                            discord.py library to make bots for the chat
                            platform Discord. We'll start with the basics and
                            progress to make a simple game. You’ll also learn
                            how to use the bot to create channels, kick or ban
                            members, and more. Afterwards, our mentors will
                            guide you to make your very own Discord bot that can
                            do whatever you want.
                        </ScheduleWorkshop>
                    }
                    second={
                        <ScheduleWorkshop
                            title="Website Design with HTML and CSS"
                            grades="Any"
                        >
                            Each day, millions of people use the Internet to
                            access all sorts of different websites. All of these
                            websites have a foundation built from HTML. In this
                            workshop, you will learn how to code in HTML to
                            design your own basic webpage! We’ll first guide you
                            through the process of creating a simple website,
                            and provide you with the tools to make your own
                            website totally unique and yours.
                        </ScheduleWorkshop>
                    }
                />
                <ScheduleItem time="12:00 – 1:00 PM">Lunch Break</ScheduleItem>
                <ScheduleItem
                    time="1:00 – 3:00 PM"
                    first={
                        <ScheduleWorkshop
                            title="Making Text-based Games with Python"
                            grades="6-8"
                            prereqs="Knowledge of Python basics (Introduction to Python Workshop or equivalent)"
                        >
                            In this workshop, you will be able to make your own
                            text-based choose-your-own-adventure style game! Our
                            mentors will guide you through the process of making
                            your own text-based games and teach you how to make
                            features such as:
                            <ul>
                                <li>
                                    Allowing the player to make choices to
                                    advance your storyline
                                </li>
                                <li>Keeping track of the player’s health</li>
                                <li>Creating a simple inventory system</li>
                            </ul>
                        </ScheduleWorkshop>
                    }
                    second={
                        <ScheduleWorkshop title="Scratch Games" grades="Any">
                            Have you ever wanted to create your own game with
                            graphics? Scratch is a beginner-friendly block
                            programming language that does not require any
                            typing, making it super easy to learn! During this
                            workshop we will walk you through the creation of an
                            example game and then you will be able to make your
                            own unique game afterwards with the help of our
                            mentors.
                        </ScheduleWorkshop>
                    }
                />
                <ScheduleItem
                    time="3:30 – 5:30 PM"
                    first={
                        <ScheduleWorkshop
                            title="Teachable Machine"
                            grades="7–9"
                            prereqs="Knowledge of Python basics (Introduction to Python Workshop or equivalent)"
                        >
                            These days, lots of companies use buzzwords like
                            "artificial intelligence" and "machine learning" to
                            promote themselves, but have you ever wondered what
                            exactly machine learning is? In this workshop, you
                            will harness the power of machine learning by using{" "}
                            <a href="https://teachablemachine.withgoogle.com/">
                                Teachable Machine
                            </a>{" "}
                            to recognize images, sound, and more! During this
                            workshop, we will walk through an example of an app
                            which can detect when, a user is slouching through
                            their webcam. Afterwards, our mentors will help
                            guide you through making your own unique application
                            of machine learning!
                        </ScheduleWorkshop>
                    }
                    second={
                        <ScheduleWorkshop
                            title="Basic 3D Modeling"
                            grades="7–9"
                        >
                            In this workshop, you will learn how to create your
                            own 3D object using the 3D modeling tool Blender.
                            You will then be able to 3D print your model and
                            have it be shipped to you! These models may also be
                            used in animations or games. During this workshop,
                            we will walk through constructing a basic model that
                            introduces the features of Blender. Afterwards, our
                            mentors will help you through the process of making
                            your own model!
                            <br />
                            <br />
                            Please download Blender at{" "}
                            <a href="https://www.blender.org/">
                                https://www.blender.org/
                            </a>
                            .
                        </ScheduleWorkshop>
                    }
                />
            </ScheduleTable>

            <ScheduleTable title="Sunday, January 10">
                <ScheduleItem time="9:00 – 9:30 AM">Day 2 Opening</ScheduleItem>
                <ScheduleItem time="9:30 AM – 12:00 PM">
                    <ScheduleWorkshop title="Morning Worksession &amp; Mentorship">
                        Time to work on your own project! We'll be there to give
                        you ideas and guidance along the way.
                    </ScheduleWorkshop>
                </ScheduleItem>
                <ScheduleItem time="12:00 – 1:00 PM">Lunch Break</ScheduleItem>
                <ScheduleItem time="1:00 – 3:00 PM">
                    <ScheduleWorkshop title="Afternoon Worksession &amp; Mentorship">
                        Continue working on your own project! We'll be there to
                        give you ideas and guidance along the way.
                    </ScheduleWorkshop>
                </ScheduleItem>
                <ScheduleItem time="3:00 – 5:00 PM">
                    Presentations &amp; Closing Ceremony
                </ScheduleItem>
            </ScheduleTable>
        </div>
    </div>
);

const Sponsors = () => (
    <div className="section" id="sponsors">
        <div className="container has-text-centered">
            <p className="title is-3">Sponsors</p>
            <p className="content mb-6">
                This section will be updated soon with our sponsors.
                <br />
                Want to sponsor us? Send us an email at{" "}
                <a href="mailto:sponsorship@code2k.org">
                    sponsorship@code2k.org
                </a>
                .
            </p>
            <div
                className="mb-6"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <img
                    src={require("../assets/sponsors/balsamiq.svg")}
                    width={300}
                />
                <img src={require("../assets/sponsors/aops.png")} width={300} />
            </div>
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
