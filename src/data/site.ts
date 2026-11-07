// All site content lives here. Replace the placeholders with your own.

export const me = {
  name: "Torben Clasen",
  handle: "Angr1st",
  role: "Software Engineer",
  location: "Hamburg",
  timeZone: "Europe/Berlin",
  bio: "Software engineer in Hamburg. Mostly .NET (C# and F#), with some Rust on the side.",
  now: "Focussing on finding the appropriate application for AI.",
  links: [
    { label: "GitHub", url: "https://github.com/Angr1st" },
    { label: "X", url: "https://x.com/Cl4s3nTorben" },
    { label: "Bluesky", url: "https://bsky.app/profile/cl4s3ntorben.bsky.social" },
  ],
};

// The four largest non-fork repos on github.com/Angr1st.
export const projects = [
  { name: "TetrisStuff", url: "https://github.com/Angr1st/-CSharp-TetrisStuff", blurb: "A Tetris clone in C# with .NET and Windows Forms.", year: "2016" },
  { name: "Snake", url: "https://github.com/Angr1st/Snake", blurb: "Snake as an F# console game on .NET 5.", year: "2020" },
  { name: "TinyCsvToElasticsearch", url: "https://github.com/Angr1st/TinyCsvToElasticsearch", blurb: "A NuGet package for parsing CSV files and importing them into Elasticsearch, as a lightweight alternative to Logstash.", year: "2018" },
  { name: "OCFF", url: "https://github.com/Angr1st/OCFF", blurb: "Reference implementation of OCFF, the Omnipotent ConfigurationFile Format.", year: "2018" },
];

// Not shown yet: the Writing panel is commented out in `sections` below.
export const posts = [
  { title: "First post title", date: "2026-10-12", url: "#", teaser: "The first paragraph of the post would show up here as a teaser." },
  { title: "Notes on something interesting", date: "2026-08-03", url: "#", teaser: "The first paragraph of the post would show up here as a teaser." },
  { title: "A longer essay about a hobby", date: "2026-05-21", url: "#", teaser: "The first paragraph of the post would show up here as a teaser." },
];

type Item = { label: string; tag?: string; title: string; meta: string; body: string; url?: string };

// The panels on the home page, in order. Each item shows in the list and in the preview.
export const sections: { title: string; items: Item[] }[] = [
  {
    title: "About",
    items: [
      { label: "whoami", title: me.name, meta: `${me.role} · ${me.location}`, body: me.bio },
      { label: "now", title: "Now", meta: "what I'm focused on", body: me.now },
    ],
  },
  {
    title: "Projects",
    items: projects.map((p) => ({ label: p.name, tag: p.year, title: p.name, meta: p.year, body: p.blurb, url: p.url })),
  },
  // Writing is hidden until there are real posts. To show it, add this back here:
  // { title: "Writing", items: posts.map((p) => ({ label: p.title, tag: p.date, title: p.title, meta: p.date, body: p.teaser, url: p.url })) },
  {
    title: "Links",
    items: me.links.map((l) => ({ label: l.label, title: l.label, meta: l.url, body: `Find me on ${l.label}.`, url: l.url })),
  },
];
