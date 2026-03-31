import type { Metadata } from "next";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Profile | Gôo tsong-tāi",
  description:
    "Gôo tsong-tāi (WU, TSUNG-TAI), b. 1997, Taichung. Contemporary artist navigating gender and identity through Generation Z language; works traverse conceptual art, installation, and social practice.",
  openGraph: {
    title: "Gôo tsong-tāi · Profile",
    description:
      "Gôo tsong-tāi (WU, TSUNG-TAI), b. 1997, Taichung. Contemporary artist navigating gender and identity through Generation Z language; works traverse conceptual art, installation, and social practice.",
    url: "https://gootsongtai.art/profile/en",
    siteName: "Gôo tsong-tāi",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "https://gootsongtai.art/images/profile/cover.avif",
        width: 1600,
        alt: "Gôo tsong-tāi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gôo tsong-tāi · Profile",
    description:
      "Gôo tsong-tāi (WU, TSUNG-TAI), b. 1997, Taichung. Contemporary artist navigating gender and identity through Generation Z language; works traverse conceptual art, installation, and social practice.",
    images: ["https://gootsongtai.art/images/profile/cover.avif"],
  },
  alternates: {
    canonical: "https://gootsongtai.art/profile/en",
  },
};

const navRoutes = routes.filter((r) => r.id !== "profile");

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "WU, TSUNG-TAI",
  alternateName: ["吳宗岱", "Gôo tsong-tāi"],
  birthDate: "1997",
  birthPlace: { "@type": "Place", name: "Taichung, Taiwan" },
  nationality: "Taiwanese",
  jobTitle: "Contemporary Artist",
  url: "https://gootsongtai.art/",
  sameAs: ["https://gootsongtai.art/", "https://www.instagram.com/wutsongtai/"],
  email: "1100116@itd.tnnua.edu.tw",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Taichung",
    addressCountry: "TW",
  },
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Tainan National University of the Arts",
      department: "Graduate Institute of Plastic Arts",
    },
    {
      "@type": "EducationalOrganization",
      name: "National Dong Hwa University",
      department: "Department of Art and Design",
    },
  ],
  award: [
    "Art Futures Awards, Outstanding Graduate Award (Asia), Finalist, Hong Kong, 2023",
    "Mr. Chen Chi-Chuan TNNUA Plastic Arts Award, 2023",
  ],
  description:
    "Born in 1997, currently resides in Taichung. Hir artworks focus on the fluidity of gender and identity in the language of Generation Z; pieces often toe the line between conceptual art, installation art, and social practices, using creative mediums such as social media, ACG doujin culture, and Gen Z values.",
};

export default function ProfilePage() {
  return (
    <div className="relative min-h-screen font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Fixed background */}
      <div
        className="fixed inset-0 bg-cover bg-no-repeat bg-[90%_50%] md:bg-right lg:bg-center"
        style={{ backgroundImage: "url('/images/profile/cover.avif')" }}
      />
      {/* Dark overlay for readability */}
      <div className="fixed inset-0 bg-black/65" />

      {/* Navbar */}
      <nav className="fixed top-0 right-0 z-50 px-8 py-6 flex gap-8">
        <a
          href="/profile"
          className="text-xs font-black tracking-[0.25em] uppercase text-white/40 hover:text-white transition-colors"
        >
          中文
        </a>
        {navRoutes.map((r) => (
          <a
            key={r.id}
            href={r.path}
            className="text-xs font-black tracking-[0.25em] uppercase text-white/40 hover:text-white transition-colors"
          >
            {r.name}
          </a>
        ))}
      </nav>

      {/* Layout */}
      <div className="relative flex min-h-screen">
        {/* Left: sticky identity panel */}
        <aside className="hidden md:flex w-[360px] shrink-0 sticky top-0 h-screen flex-col justify-between px-10 py-14 border-r border-white/10">
          {/* Identity */}
          <div className="space-y-8">
            {/* Name cluster */}
            <div>
              <p className="text-xs font-bold tracking-[0.3em] text-white/40 uppercase mb-3">
                Artist
              </p>
              <h1 className="text-4xl font-black text-white leading-tight">
                Gôo tsong-tāi
              </h1>
              <p className="text-sm font-bold text-white/50 mt-2 tracking-widest">
                WU, TSUNG-TAI
              </p>
              <p className="text-sm font-bold text-white/50 tracking-widest">
                吳宗岱
              </p>
            </div>

            {/* Title */}
            <div>
              <p className="text-white/70 text-base font-bold leading-relaxed">
                Contemporary Artist
              </p>
              <p className="text-white/40 text-sm font-semibold mt-1">
                Taichung, Taiwan
              </p>
            </div>

            {/* Keywords */}
            <div className="flex flex-col gap-2">
              {[
                "Phenomenology",
                "Queer Theory",
                "Generation Z",
                "Social Practice",
              ].map((kw) => (
                <span
                  key={kw}
                  className="text-xs font-bold tracking-wider text-white/50 border border-white/15 px-2.5 py-1 self-start"
                >
                  {kw}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div className="w-8 h-px bg-white/20" />

            {/* Contact */}
            <div className="space-y-2">
              <p className="text-xs font-black tracking-[0.25em] text-white/30 uppercase mb-3">
                Contact
              </p>
              <a
                href="mailto:1100116@itd.tnnua.edu.tw"
                className="block text-sm font-semibold text-white/50 hover:text-white/80 transition-colors"
              >
                1100116@itd.tnnua.edu.tw
              </a>
            </div>

            {/* Social */}
            <div className="space-y-2">
              <p className="text-xs font-black tracking-[0.25em] text-white/30 uppercase mb-3">
                Social
              </p>
              <div className="flex gap-4 pt-1">
                <a
                  href="https://www.facebook.com/wutsongtai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white/80 transition-colors"
                  aria-label="Facebook"
                >
                  <i className="fa-brands fa-facebook text-lg" />
                </a>
                <a
                  href="https://www.instagram.com/wutsongtai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white/80 transition-colors"
                  aria-label="Instagram"
                >
                  <i className="fa-brands fa-instagram text-lg" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom: year */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-white/20">
              b. 1997 · Taichung
            </p>
          </div>
        </aside>

        {/* Right: scrollable content */}
        <main className="flex-1 px-6 md:px-16 py-14 space-y-20 max-w-3xl">
          {/* Mobile identity header */}
          <div className="md:hidden space-y-6 border-b border-white/10 pb-10">
            <div className="space-y-3">
              <p className="text-xs font-black tracking-[0.3em] text-white/40 uppercase">
                Artist
              </p>
              <h1 className="text-5xl font-black text-white leading-tight">
                Gôo tsong-tāi
              </h1>
              <p className="text-sm font-bold text-white/50 tracking-widest">
                WU, TSUNG-TAI · 吳宗岱
              </p>
              <p className="text-white/60 text-base font-semibold">
                Contemporary Artist, Taichung, Taiwan
              </p>
            </div>

            {/* Keywords */}
            <div className="flex flex-wrap gap-2">
              {[
                "Phenomenology",
                "Queer Theory",
                "Generation Z",
                "Social Practice",
              ].map((kw) => (
                <span
                  key={kw}
                  className="text-xs font-bold tracking-wider text-white/50 border border-white/15 px-2.5 py-1"
                >
                  {kw}
                </span>
              ))}
            </div>

            <div className="w-8 h-px bg-white/20" />

            {/* Contact */}
            <div className="space-y-2">
              <p className="text-xs font-black tracking-[0.25em] text-white/30 uppercase mb-3">
                Contact
              </p>
              <a
                href="mailto:1100116@itd.tnnua.edu.tw"
                className="block text-sm font-semibold text-white/50"
              >
                1100116@itd.tnnua.edu.tw
              </a>
            </div>

            {/* Social */}
            <div className="space-y-2">
              <p className="text-xs font-black tracking-[0.25em] text-white/30 uppercase mb-3">
                Social
              </p>
              <div className="flex gap-4 pt-1">
                <a
                  href="https://www.instagram.com/wutsongtai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50"
                  aria-label="Instagram"
                >
                  <i className="fa-brands fa-instagram text-lg" />
                </a>
                <a
                  href="https://www.facebook.com/wutsongtai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50"
                  aria-label="Facebook"
                >
                  <i className="fa-brands fa-facebook text-lg" />
                </a>
              </div>
            </div>
          </div>

          {/* Bio */}
          <section>
            <SectionLabel>Biography</SectionLabel>
            <p className="text-white/80 text-base leading-[2] font-semibold mt-6 max-w-xl">
              Born in 1997, currently resides in Taichung. Hir artworks focus on
              the fluidity of gender and identity in the language of Generation
              Z; Gôo Tsong-tāi&apos;s pieces often toe the line between
              conceptual art, installation art, and social practices, using
              creative mediums such as social media, ACG doujin culture, and Gen
              Z values. Ze blurs the boundaries of the artist, being viewed as a
              one-dimensional creator, is their goal.
            </p>
            <p className="text-white/80 text-base leading-[2] font-semibold mt-4 max-w-xl">
              In 2023, Gôo Tsong-tāi gained international recognition through
              hir piece <i>Bàn-tāi</i>, which was nominated as one of the 30
              exceptional Asian graduate candidates of the inaugural Hong Kong
              Art Future Awards. Gôo Tsong-tāi&apos;s works can be found in
              Taiwan, China, the Netherlands, Australia, and Japan.
            </p>
            <p className="text-white/40 text-sm font-bold mt-6 tracking-widest">
              Taiwan · China · Netherlands · Australia · Japan
            </p>
          </section>

          {/* Education */}
          <section>
            <SectionLabel>Education</SectionLabel>
            <div className="mt-6 space-y-8">
              <EducationItem
                school="MFA in Plastic Arts"
                institution="Tainan National University of the Arts"
                years="2021–2025"
              />
              <EducationItem
                school="BFA in Art and Design"
                institution="National Dong Hwa University"
                years="2015–2020"
              />
              <EducationItem
                school="Fine Arts Program"
                institution="National Taichung First Senior High School"
                years="2012–2015"
              />
            </div>
          </section>

          {/* Awards */}
          <section>
            <SectionLabel>Awards</SectionLabel>
            <div className="mt-6 space-y-6">
              <AwardItem
                year="2023"
                title="Art Futures Awards"
                desc="Outstanding Graduate Award (Asia), Finalist · Hong Kong"
              />
              <AwardItem
                year="2023"
                title="Mr. Chen Chi-Chuan TNNUA Plastic Arts Award"
                desc={
                  <>
                    for <i>County Road 171</i>, Final Exhibition, Graduate
                    Institute of Plastic Arts, TNNUA · Taiwan
                  </>
                }
              />
            </div>
          </section>

          {/* Exhibitions */}
          <section>
            <SectionLabel>Exhibitions</SectionLabel>
            <div className="mt-6 space-y-12">
              <div>
                <p className="text-xs font-black tracking-[0.25em] text-white/30 uppercase mb-5">
                  Solo
                </p>
                <div className="space-y-5">
                  <ExhibitionItem
                    year="2025"
                    title="𝄆3"
                    location="Taichung, Taiwan"
                  />
                  <ExhibitionItem
                    year="2022"
                    title="Bàn-tāi"
                    location="Tainan, Taiwan"
                  />
                  <ExhibitionItem
                    year="2022"
                    title="Parhelion"
                    location="Hualien & Tainan, Taiwan"
                  />
                </div>
              </div>
              <div>
                <p className="text-xs font-black tracking-[0.25em] text-white/30 uppercase mb-5">
                  Group
                </p>
                <div className="space-y-5">
                  {[
                    {
                      year: "2025",
                      title: "Research Jam, Asia Triennial Manchester 2025",
                      subtitle: "Asia Triennial Manchester (ATM6)",
                      location: "Manchester, United Kingdom",
                      titleIsItalic: false,
                    },
                    {
                      year: "2025",
                      title: "Idoruru",
                      subtitle:
                        "Alumni Exhibition of Fine Arts Program, National Taichung First Senior High School",
                      location: "Taichung, Taiwan",
                    },
                    {
                      year: "2024",
                      title: "Re-her-sal: Audience Entry",
                      subtitle:
                        "National Culture and Arts Foundation Regular Grant",
                      location: "Taipei, Taiwan",
                    },
                    {
                      year: "2024",
                      title: "Gemini ζ",
                      subtitle: "Chi-Chuan TNNUA Plastic Arts Award",
                      location: "Kaohsiung, Taiwan",
                    },
                    {
                      year: "2023",
                      title: "After Navigated—— Indicating",
                      subtitle:
                        "Graduation Exhibition, Class of 2021, Graduate Institute of Plastic Arts, TNNUA",
                      location: "Tainan, Taiwan",
                    },
                    {
                      year: "2023",
                      title:
                        "Jang Ku-shih Yung-yuan Ch'eng Chiao-t'ang Pai-shuang",
                      subtitle:
                        "Final Exhibition, Graduate Institute of Plastic Arts, TNNUA",
                      location: "Tainan, Taiwan",
                    },
                    {
                      year: "2023",
                      title: "Sı̍k-lōo",
                      subtitle: "Shezi Film Festival",
                      location: "Tainan, Taiwan",
                    },
                    {
                      year: "2023",
                      title: "County Road 171",
                      subtitle:
                        "Final Exhibition, Graduate Institute of Plastic Arts, TNNUA",
                      location: "Tainan, Taiwan",
                    },
                    {
                      year: "2022",
                      title: "Involuntary Health Management",
                      subtitle:
                        "Final Exhibition, Graduate Institute of Plastic Arts, TNNUA",
                      location: "Tainan, Taiwan",
                    },
                    {
                      year: "2021",
                      title: "Shui-hsiu Villa",
                      subtitle:
                        "Final Exhibition, Graduate Institute of Plastic Arts, TNNUA",
                      location: "Tainan, Taiwan",
                    },
                    {
                      year: "2021",
                      title: "Why Can't the Link Be Opened",
                      subtitle:
                        "First-Year Graduate Exhibition, Graduate Institute of Plastic Arts, TNNUA",
                      location: "Tainan, Taiwan",
                    },
                  ].map((item) => (
                    <ExhibitionItem key={item.title} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Publications */}
          <section>
            <SectionLabel>Publications</SectionLabel>
            <div className="mt-6 space-y-8">
              <div>
                <p className="text-white/85 text-base font-bold leading-relaxed">
                  <a
                    href="https://isbn.ncl.edu.tw/NEW_ISBNNet/main_DisplayRecord.php?&Pact=Display&Pstart=1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i>Bàn-tāi</i>
                  </a>
                </p>
                <p className="text-white/45 text-sm font-semibold mt-1">
                  New Taipei City: Dao Zuo Publishing, September 2025 / ISBN
                  978-626-99354-6-8
                </p>
              </div>
              <div>
                <p className="text-white/85 text-base font-bold leading-relaxed">
                  <a
                    href="https://hdl.handle.net/11296/7bs82w"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i>Self-Mediatization</i>
                  </a>
                </p>
                <p className="text-white/45 text-sm font-semibold mt-1">
                  MFA thesis, Graduate Institute of Plastic Arts, Tainan
                  National University of the Arts, April 2025
                </p>
              </div>
            </div>
          </section>

          {/* Residency */}
          <section>
            <SectionLabel>Residency</SectionLabel>
            <div className="mt-6">
              <p className="text-white/85 text-base font-bold">
                Art residency in the Netherlands
              </p>
              <p className="text-white/40 text-sm font-semibold mt-1">
                The Netherlands, 22 June 2024 – 17 July 2024
              </p>
            </div>
          </section>

          {/* Press */}
          <section>
            <SectionLabel>Press</SectionLabel>
            <div className="mt-6 space-y-6">
              {[
                {
                  title: (
                    <>
                      When Paradoxes Are No More Paradoxes: Extended Thoughts
                      from <i>Gemini Z</i>,&rdquo;
                    </>
                  ),
                  pub: "Zhang, Shuo-yin/AOFA.TW",
                  date: "January 2025",
                  href: "https://aofa.tw/?p=6161",
                },
                {
                  title: (
                    <>
                      &ldquo;Alien planet&rdquo; landing at Tainan Railway
                      Station? It turned out to be the artistic creation &ldquo;
                      <i>Ma. lactation</i>&rdquo;
                    </>
                  ),
                  pub: "Liberty Times",
                  date: "October 2023",
                  href: "https://news.ltn.com.tw/news/life/breakingnews/4458870",
                },
                {
                  title: (
                    <>
                      Queer or Not is Beyond Words: Gôo Tsong-tāi&apos;s &ldquo;
                      <i>Bàn-tāi</i>&rdquo; and Issues with Art&apos;s Political
                      Correctness
                    </>
                  ),
                  pub: "Zhang, Wen-hao/ArtTouch",
                  date: "February 2023",
                  href: "https://artouch.com/art-views/content-96414.html",
                },
                {
                  title:
                    "Cool photo was wrongly banned by Facebook? Are humans and AI confused? Tainan art billboard challenges real censorship",
                  pub: "PTV P# News Lab",
                  date: "February 2023",
                  href: "https://youtu.be/7Pd-RONl2MA",
                },
                {
                  title: (
                    <>
                      &ldquo;Naked photos&rdquo; hang high at rural
                      intersections! Art creation was reported and dismantled
                      early on 2/5
                    </>
                  ),
                  pub: "TVBS",
                  date: "January 2023",
                  href: "https://news.tvbs.com.tw/life/2010783",
                },
              ].map((item, i) => (
                <PressItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* Grants */}
          <section>
            <SectionLabel>Grants</SectionLabel>
            <div className="mt-6 space-y-6">
              <GrantItem
                year="2025"
                title="Idoruru"
                org="Taichung First Senior High School Educational Program · 2025"
              />
              <GrantItem
                year="2024"
                title=<>
                  Project <i>Patriotic Women's Association</i>
                </>
                org="National Culture and Arts Foundation Regular Funding · 2024"
              />
              <GrantItem
                year="2024"
                title="Idoruru"
                org="Open Call, Kaiser Art Gallery · 2024"
              />
              <GrantItem
                year="2021"
                title="Full Creative Grant for Graduate Practice"
                org="Private Scholarship · 2021"
              />
            </div>
          </section>

          {/* Talks */}
          <section className="pb-20">
            <SectionLabel>Talks & Events</SectionLabel>
            <div className="mt-6 space-y-5">
              {[
                {
                  date: "February 2026",
                  title: (
                    <>
                      <i>Bàn-tāi</i>: Book Signing and Meet-and-Greet with Gôo
                      tsong-tāi
                    </>
                  ),
                  venue: "Taipei International Book Exhibition (34th Edition)",
                  location: "Taipei",
                },
                {
                  date: "December 2025",
                  title: (
                    <>
                      <i>Bàn-tāi</i>: Photobook Launch Series, Third Round with
                      Gôo tsong-tāi
                    </>
                  ),
                  venue: "Garden City Publishers Bookstore",
                  location: "Taipei",
                },
                {
                  date: "November 2025",
                  title: (
                    <>
                      <i>Bàn-tāi</i>: Photobook Launch Series, Second Round with
                      Gôo tsong-tāi
                    </>
                  ),
                  venue: "voi ch. · YouTube Live Stream",
                  url: "https://www.youtube.com/live/4jHS5zaZ-7c?si=fpwe4OJeSiY2OI_p",
                },
                {
                  date: "November 2025",
                  title: (
                    <>
                      <i>Bàn-tāi</i>: Photobook Launch Series, First Round with
                      Gôo tsong-tāi
                    </>
                  ),
                  venue: "Garden City Publishers Bookstore",
                  location: "Taipei",
                },
                {
                  date: "November 2024",
                  title: (
                    <>
                      <i>Bàn-tāi</i>: Artist Talk with Gôo tsong-tāi
                    </>
                  ),
                  venue:
                    "Department of Fine Arts, National Changhua University of Education",
                },
                {
                  date: "October 2023",
                  title: (
                    <>
                      &ldquo;I am transgender, therefore I am&rdquo; × Who is
                      transgender with you? I am gender confirmed! But, then
                      what?
                    </>
                  ),
                  venue: "YouTube Streaming · Theme Night SHOW, PTS",
                  url: "https://www.youtube.com/live/f5RnJ8Vn1KU?si=UYpoaSPn_o2Pv8nG",
                },
              ].map((item, i) => (
                <TalkItem key={i} {...item} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-xs font-black tracking-[0.35em] text-white/35 uppercase">
        {children}
      </span>
      <div className="flex-1 h-px bg-white/10" />
    </div>
  );
}

function EducationItem({
  school,
  institution,
  years,
}: {
  school: string;
  institution: string;
  years: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-white/85 text-base font-bold">{school}</p>
        <p className="text-white/45 text-sm font-semibold mt-0.5">
          {institution}
        </p>
      </div>
      <span className="text-sm font-bold text-white/30 shrink-0">{years}</span>
    </div>
  );
}

function AwardItem({
  year,
  title,
  desc,
}: {
  year: string;
  title: string;
  desc: React.ReactNode;
}) {
  return (
    <div className="flex gap-6">
      <span className="text-sm font-bold text-white/30 shrink-0 pt-0.5">
        {year}
      </span>
      <div>
        <p className="text-white/85 text-base font-bold">{title}</p>
        <div className="text-white/45 text-sm font-semibold mt-0.5 leading-relaxed">
          {desc}
        </div>
      </div>
    </div>
  );
}

function ExhibitionItem({
  year,
  title,
  subtitle,
  location,
  titleIsItalic = true,
}: {
  year: string;
  title: React.ReactNode;
  subtitle?: string;
  location: string;
  titleIsItalic?: boolean;
}) {
  return (
    <div className="flex gap-6">
      <span className="text-sm font-bold text-white/30 shrink-0 pt-0.5">
        {year}
      </span>
      <div>
        <p
          className={`text-white/80 text-base font-bold ${titleIsItalic ? "italic" : ""}`}
        >
          {title}
        </p>
        {subtitle && (
          <p className="text-white/45 text-sm font-semibold mt-0.5">
            {subtitle}
          </p>
        )}
        <p className="text-white/35 text-sm font-semibold mt-0.5">{location}</p>
      </div>
    </div>
  );
}

function PressItem({
  title,
  pub,
  date,
  href,
}: {
  title: React.ReactNode;
  pub: string;
  date: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="text-white/75 text-base font-bold group-hover:text-white transition-colors leading-relaxed">
        {title}
      </div>
      <p className="text-sm font-semibold text-white/30 mt-1">
        {pub} · {date}
      </p>
    </a>
  );
}

function GrantItem({
  year,
  title,
  org,
}: {
  year: string;
  title: React.ReactNode;
  org: string;
}) {
  return (
    <div className="flex gap-6">
      <div>
        <p className="text-white/80 text-base font-bold">{title}</p>
        <p className="text-white/35 text-sm font-semibold mt-0.5">
          {org}
          {year ? ` · ${year}` : ""}
        </p>
      </div>
    </div>
  );
}

function TalkItem({
  date,
  title,
  venue,
  url,
  location,
}: {
  date: string;
  title: React.ReactNode;
  venue: string;
  url?: string;
  location?: string;
}) {
  const element = (
    <div>
      <div className="text-white/80 text-base font-bold leading-relaxed italic">
        {title}
      </div>
      <p className="text-white/35 text-sm font-semibold mt-0.5">
        {venue}
        {location ? ` · ${location}` : ""} · {date}
      </p>
    </div>
  );

  return url ? (
    <div className="flex gap-6">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {element}
      </a>
    </div>
  ) : (
    element
  );
}
