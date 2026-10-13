export const contactEmail = "robotechfuse@gmail.com";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/robot", label: "Robots" },
  { href: "/team", label: "Team" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/contact", label: "Contact" },
] as const;

export type Member = {
  name: string;
  role: string;
  study: string;
  photo: string;
  email?: string;
};

export const team: Member[] = [
  {
    name: "Woraphon Choaywong",
    role: "Team leader",
    study: "B.Sc. Computer Engineering",
    photo: "/img/phoo.webp",
    email: "w.choaywong@campus.tu-berlin.de",
  },
  {
    name: "Denis Shcherba",
    role: "Programming",
    study: "PhD Computer Engineering",
    photo: "/img/denis.webp",
    email: "d.shcherba@campus.tu-berlin.de",
  },
  {
    name: "Eckart Cobo Briesewitz",
    role: "Programming",
    study: "M.Sc. Computer Science",
    photo: "/img/eckart.webp",
    email: "cobo-briesewitz@campus.tu-berlin.de",
  },
  {
    name: "Harry Bason",
    role: "Mechanical design",
    study: "B.Sc. Mechanical Engineering",
    photo: "/img/harry.webp",
    email: "h.bason@campus.tu-berlin.de",
  },
  {
    name: "Phumin Lertpredanan",
    role: "Electronics design",
    study: "B.Sc. Electrical Engineering",
    photo: "/img/phumin.webp",
    email: "p.lertpredanan@campus.tu-berlin.de",
  },
  {
    name: "Manassawin Vessugunmanugul",
    role: "Mechanical design and programming",
    study: "B.Sc. Computer Science (SRH University)",
    photo: "/img/manassawin.webp",
  },
  {
    name: "Savita Tangvituvanich",
    role: "Organisation",
    study: "Ausbildung Fachinformatiker (ekvip Automation)",
    photo: "/img/savita.webp",
    email: contactEmail,
  },
];

export const sponsors = [
  { name: "Learning & Intelligent Systems Lab, TU Berlin", short: "LIS", logo: "/img/lis-logo.webp", url: "https://argmin.lis.tu-berlin.de/" },
  { name: "Technische Universität Berlin", short: "TU Berlin", logo: "/img/tub-logo.webp", url: "https://www.tu.berlin/" },
  { name: "maxon", short: "maxon", logo: "/img/maxon-logo.webp", url: "https://www.maxongroup.com/de-de" },
  { name: "Mädler", short: "Mädler", logo: "/img/maedler-logo.webp", url: "https://www.maedler.de/" },
];

/** Photo variants are generated at 800px and 1600px wide. */
export const photo = (base: string) => ({
  src: `/img/${base}-1600.webp`,
  srcSet: `/img/${base}-800.webp 800w, /img/${base}-1600.webp 1600w`,
});

export const gallery = [
  { base: "robot1", alt: "TUBer on the pallet course in the competition arena" },
  { base: "robot2", alt: "Two team members working on TUBer's electronics in the arena" },
  { base: "robot3", alt: "The team preparing TUBer at the start of a test lane" },
  { base: "robot4", alt: "TUBer with its flippers raised inside the plywood test arena" },
];
