import Link from "next/link";
import Gallery from "@/components/gallery";
import Video from "@/components/video";
import SponsorBand from "@/components/sponsor-band";
import { gallery, photo } from "@/data/site";
import { asset } from "@/lib/asset";

export default function Home() {
  const hero = photo("robot4");
  return (
    <>
      <section className="hero">
        <div className="hero__media">
          <img
            src={asset(hero.src)}
            srcSet={hero.srcSet.replace(/\/img\//g, asset("/img/"))}
            sizes="100vw"
            alt="TUBer, our tracked rescue robot, inside the plywood test arena"
            width={1600}
            height={1200}
            {...{ fetchPriority: "high" as const }}
          />
        </div>
        <div className="container hero__content">
          <h1 className="display hero__title">Rescue robots, built by students at TU&nbsp;Berlin.</h1>
          <p className="lead hero__lead">
            We are FUSE. We design and build tracked robots for the RoboCup Rescue League, where robots are tested on
            the tasks emergency responders need help with.
          </p>
          <div className="button-row">
            <Link href="/robot" className="button button--primary">
              Meet the robots
            </Link>
            <Link href="/sponsors" className="button button--ghost">
              Become a sponsor
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="section-head">
            <h2 className="h2">What is RoboCup Rescue?</h2>
          </div>
          <div>
            <div className="prose">
              <p>
                The RoboCup Rescue Robot League runs rigorous, fair competitions built around the tasks that matter to
                emergency responders. It also tracks how robotic systems improve over time, so responders can see which
                capabilities are ready for real use.
              </p>
              <p>
                Robots are scored on standard test methods for mobility, manipulation, operator skill and autonomy. A
                capability shown in ten or more successful trials counts as reliable. The best scores from the
                preliminary round qualify for harder, combined scenarios in the finals.
              </p>
            </div>
            <dl className="facts" style={{ marginTop: 32 }}>
              <div>
                <dt>Preliminaries</dt>
                <dd>Standard and draft test methods check function, reliability, operator skill and autonomy.</dd>
              </div>
              <div>
                <dt>Finals</dt>
                <dd>Harder, combined scenarios where several robots are tested at the same time.</dd>
              </div>
              <div>
                <dt>Learn more</dt>
                <dd>
                  <a className="text-link" href="https://rrl.robocup.org/league-overview/" target="_blank" rel="noopener noreferrer">
                    League overview at rrl.robocup.org
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section section--panel">
        <div className="container">
          <div className="section-head">
            <h2 className="h2">German Open 2026, Cologne</h2>
            <p className="lead">
              We finished our first prototype just in time for the competition. Despite plenty of problems, the robot
              performed better than we expected. We learned a lot from this run and are already building a second
              version.
            </p>
          </div>

          <div className="videos">
            <Video id="VJRG4qPT850" title="Avoid holes test" poster="/img/robot1-800.webp" />
            <Video id="ut5msmKrLlE" start={15750} title="Pallets and pipes test" poster="/img/robot3-800.webp" />
          </div>
          <p className="video-note">Videos play from YouTube when you start them.</p>

          <div style={{ marginTop: 48 }}>
            <h3 className="h3" style={{ marginBottom: 20 }}>
              From the arena
            </h3>
            <Gallery items={gallery} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split split--even">
          <div className="frame frame--43">
            <img
              src={asset("/img/team-pic-800.webp")}
              srcSet={`${asset("/img/team-pic-800.webp")} 800w, ${asset("/img/team-pic-1600.webp")} 1600w`}
              sizes="(min-width: 900px) 50vw, 100vw"
              alt="The FUSE team standing behind TUBer in the lab"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="section-head" style={{ marginBottom: 0 }}>
            <h2 className="h2">Who we are</h2>
            <div className="prose">
              <p>
                FUSE is a team of students, mostly from the Technical University of Berlin, working across mechanical
                design, electronics and software. Together we are building a robot for the RoboCup Rescue competition.
              </p>
            </div>
            <div className="button-row" style={{ marginTop: 12 }}>
              <Link href="/team" className="button button--ghost">
                Meet the team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SponsorBand />
    </>
  );
}
