import Link from "next/link";

export default function SponsorBand() {
  return (
    <section className="cta-band" aria-labelledby="sponsor-band-title">
      <div className="container cta-band__inner">
        <div>
          <h2 id="sponsor-band-title" className="h2">
            Help us build the next robot.
          </h2>
          <p className="lead">
            Sponsors see their products at work in our robot, get their logo on our jerseys and the robot, and can book
            a live demo at their own events.
          </p>
        </div>
        <div className="button-row">
          <Link href="/sponsors#support" className="button button--primary">
            Become a sponsor
          </Link>
        </div>
      </div>
    </section>
  );
}
