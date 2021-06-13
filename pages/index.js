import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { add, startOfDay } from "date-fns";
import { format } from "date-fns-tz";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { workshops } from "../components/workshops";

const Banner = () => (
  <div className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-8-desktop is-offset-2-desktop has-text-centered">
          <p className="title is-2 has-text-centered">Code2K Summer Sessions</p>
          <p className="subtitle is-4 has-text-centered">June–July 2021</p>
          <p className="subtitle is-4 is-family-primary">
            A series of CS discovery workshops for students around the world.
            Dive deep into a variety of topics on computer programming and
            technologies through our sessions held throughout the summer.
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
              href="https://forms.gle/9cZzvemAFS5CwrJy9"
              className="button is-medium is-primary"
            >
              <span>Register</span>
              <span className="icon">
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
            </a>
          </div>
          <a href="https://forms.gle/QW4jUrRdg6HCMyTL9">
            Programming wizard? Sign up to mentor
          </a>
        </div>
      </div>
    </div>
  </div>
);

const WorkshopCard = ({
  icon,
  title,
  dates,
  grades,
  prereqs,
  description,
  instructors,
  openModal,
  timeZone,
}) => (
  <div className="column is-4 is-3-widescreen">
    <div
      className="box has-shadow has-text-centered p-0"
      style={{ height: "100%", cursor: "pointer" }}
      onClick={() =>
        openModal({
          title,
          grades,
          instructors,
          prereqs,
          description,
        })
      }
    >
      <div className="card-content has-text-centered">
        <FontAwesomeIcon icon={icon} size="3x" className="mb-5" />
        <p className="title is-4">{title}</p>

        {dates?.map((x) => (
          <p key={x}>{format(x, "MMMM d, h:mm a", { timeZone })}</p>
        )) ?? <p>TBA</p>}

        {prereqs ? (
          <p>Click to view prerequisites.</p>
        ) : (
          <p>No prerequisites.</p>
        )}
      </div>
    </div>
  </div>
);

const Workshops = ({ openModal, timeZone }) => (
  <div className="section" id="workshops">
    <div className="container has-text-centered">
      <p className="title is-3">Workshops</p>

      <p className="mb-5">
        Showing datetimes in your local timezone,{" "}
        <b>{format(new Date(), "zzz", { timeZone })}</b>. Scroll down for a full
        calendar view. Click on each workshop for a description.
      </p>

      <div className="columns is-multiline is-centered">
        {workshops.map((workshop) => (
          <WorkshopCard
            {...workshop}
            openModal={openModal}
            key={workshop.title}
          />
        ))}
        <WorkshopCard
          icon={faEllipsisH}
          title="More workshops coming soon!"
          dates={[]}
          openModal={() => null}
        />
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
            Any student aged 10-18 is eligible to participate in Code2K.
            Students do not need any prior experience—you can attend our
            Introduction to Python workshop to learn your first steps!
          </Question>

          <Question q="Can I come with a friend?">
            Yes! We encourage you to invite your friends to Code2K and work
            together on your project. However, you can still work alone if you
            would like.
          </Question>

          <Question q="I can't code. Can I come?">
            Of course! The purpose of the event is to learn through our exciting
            workshops, where our instructors will guide you through basic
            programming fundamentals. Check out our schedule for more details.
          </Question>
        </div>
        <div className="tile is-vertical is-parent">
          <Question q="How will the event be held?">
            Each session will be held on a separate Zoom meeting. The link will
            be sent out through email and to our Discord server. Please join our
            Discord server at{" "}
            <a href="https://discord.gg/SgGZrjK4H3">this link</a>.
          </Question>

          <Question q="What if I already know how to code?">
            We've got a couple more advanced workshops! You can also simply join
            the Discord server to chill and talk with mentors.
          </Question>

          <Question q="Can I present my creation?">
            Yes! We will have a first-come-first-serve form link for
            presentations. Due to time constraints, we may need to close off the
            form if too many people sign up, so we encourage you to sign up
            earlier. The link will be sent out via email.
          </Question>
        </div>
      </div>
    </div>
  </div>
);

const ScheduleItem = ({ time, first, second, children }) => (
  <tr>
    <td style={{ width: "40%" }}>{time}</td>
    <td colSpan={second ? 1 : 2}>{first ?? children}</td>
    {second && <td>{second}</td>}
  </tr>
);

const Schedule = ({ openModal, timeZone }) => {
  const workshopsByDay = new Map();
  for (const workshop of workshops) {
    for (const date of workshop.dates ?? []) {
      const day = startOfDay(date);
      if (!workshopsByDay.has(day)) workshopsByDay.set(day, []);
      workshopsByDay.get(day).push({ ...workshop, date });
    }
  }

  return (
    <div className="section" id="schedule">
      <div className="container">
        <p className="title is-3 has-text-centered">Schedule</p>

        <table className="table is-bordered is-fullwidth is-transparent">
          <tbody>
            {[...workshopsByDay.entries()].map(([, workshops]) =>
              workshops.map((x) => (
                <ScheduleItem
                  time={`${format(x.date, "MMMM d, y, h:mm a", {
                    timeZone,
                  })} – ${format(add(x.date, { hours: 1 }), "h:mm a zzz", {
                    timeZone,
                  })}`}
                >
                  <a onClick={() => openModal(x)}>
                    {x.title}
                    {x.prereqs && " (has prerequisites)"}
                  </a>
                </ScheduleItem>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Sponsors = () => (
  <div className="section" id="sponsors">
    <div className="container has-text-centered">
      <p className="title is-3">Sponsors</p>
      <p className="content mb-6">
        This section will be updated soon with our sponsors.
        <br />
        Want to sponsor us? Send us an email at{" "}
        <a href="mailto:sponsorship@code2k.org">sponsorship@code2k.org</a>.
      </p>
      <div
        className="mb-6"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src="/assets/sponsors/balsamiq.svg" width={300} />
        <img src="/assets/sponsors/aops.png" width={300} />
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
        <a href="https://project-code.org">Project Code Foundation</a>, a
        501(c)(3) nonprofit.
      </p>
      <img src="/assets/pcf_logo.png" width="200" />
    </div>
  </div>
);

const WorkshopModal = ({
  title,
  description,
  instructors,
  grades,
  prereqs,
  setModal,
}) => {
  const desc = typeof description === "string" ? [description] : description;

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={() => setModal(null)}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete" onClick={() => setModal(null)} />
        </header>
        <section className="modal-card-body">
          <div className="content">
            {desc.map((x) => (
              <p>{x}</p>
            ))}
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

            <p className="title is-5 mt-5">Instructors</p>
            <ul>
              {instructors.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </section>
        <footer
          className="modal-card-foot"
          style={{ justifyContent: "flex-end" }}
        >
          <button className="button" onClick={() => setModal(null)}>
            OK
          </button>
        </footer>
      </div>
    </div>
  );
};

const Content = () => {
  const [modal, setModal] = useState(null);
  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

  return (
    <>
      <Banner />
      <Workshops openModal={setModal} timeZone={timeZone} />
      <FAQ />
      <Schedule openModal={setModal} timeZone={timeZone} />
      <Sponsors />
      <Footer />

      {modal !== null && <WorkshopModal {...modal} setModal={setModal} />}
    </>
  );
};

const Index = () => {
  return (
    <div className="main">
      <Navbar
        className="is-transparent"
        style={{ backgroundColor: "transparent" }}
        brand={
          <Navbar.Item href="/" active={false}>
            <img src="/assets/code2k_logo.png" className="mr-2" />
          </Navbar.Item>
        }
      >
        <Navbar.Item href="#workshops">Workshops</Navbar.Item>
        <Navbar.Item href="#faq">FAQ</Navbar.Item>
        <Navbar.Item href="#schedule">Schedule</Navbar.Item>
        <Navbar.Item href="#sponsors">Sponsors</Navbar.Item>
      </Navbar>

      <Content />
    </div>
  );
};

export default Index;
