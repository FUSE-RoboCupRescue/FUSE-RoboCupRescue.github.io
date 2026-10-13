import Link from "next/link";
import { contactEmail, navItems } from "@/data/site";
import { asset } from "@/lib/asset";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <img src={asset("/img/fuse-logo.webp")} alt="FUSE" width={362} height={120} loading="lazy" />
            <p>A student team from TU Berlin building robots for the RoboCup Rescue League.</p>
            <div className="site-footer__partners">
              <img
                src={asset("/img/lis-tub-logos.webp")}
                alt="Learning & Intelligent Systems Lab and Technische Universität Berlin"
                width={173}
                height={140}
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <h2>Pages</h2>
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Visit or write</h2>
            <address>
              Marchstr. 23, MAR 4-4
              <br />
              Room 4.025
              <br />
              10587 Berlin
            </address>
            <p style={{ marginTop: 12 }}>
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </p>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© {year} FUSE RoboCupRescue Team</span>
          <Link href="/legal">Legal notice</Link>
        </div>
      </div>
    </footer>
  );
}
