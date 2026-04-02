import type { Metadata } from "next";
import { BeforeAfterCarousel } from "../_components/before-after-carousel";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Idoruru | Gôo tsong-tāi",
  description:
    "Idoruru — a joint exhibition by Gôo tsong-tāi, exploring Parasocial Interaction and the influence of media on contemporary identity. 2025, Taichung.",
  openGraph: {
    title: "Idoruru | Gôo tsong-tāi",
    description:
      "Idoruru — a joint exhibition by Gôo tsong-tāi, exploring Parasocial Interaction and the influence of media on contemporary identity. 2025, Taichung.",
    url: "https://gootsongtai.art/idoruru/en",
    siteName: "Gôo tsong-tāi",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://gootsongtai.art/images/idoruru/cover.avif",
        width: 1600,
        alt: "Idoruru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Idoruru | Gôo tsong-tāi",
    description:
      "Idoruru — a joint exhibition by Gôo tsong-tāi, exploring Parasocial Interaction and the influence of media on contemporary identity. 2025, Taichung.",
    images: ["https://gootsongtai.art/images/idoruru/cover.avif"],
  },
  alternates: {
    canonical: "https://gootsongtai.art/idoruru/en",
  },
};

const navRoutes = routes.filter((r) => r.id !== "idoruru");

export default function IdoruruEnPage() {
  return (
    <div
      className="font-sans min-h-screen"
      style={{ backgroundColor: "#f0ede8" }}
    >
      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-8 py-6 pb-8 flex justify-end gap-8 "
        style={{
          background:
            "linear-gradient(to bottom, #f0ede8cc 0%, transparent 100%)",
        }}
      >
        <a
          href="/idoruru"
          className="text-xs font-black tracking-[0.25em] uppercase text-stone-400 hover:text-stone-600 transition-colors"
        >
          中文
        </a>
        {navRoutes.map((r) => (
          <a
            key={r.id}
            href={r.path}
            className="text-xs font-black tracking-[0.25em] uppercase text-stone-700 hover:text-stone-800 transition-colors"
          >
            {r.name}
          </a>
        ))}
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex flex-col items-center justify-end pb-20 overflow-hidden">
        <img
          src="/images/idoruru/cover.avif"
          alt="Idoruru"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #f0ede8 0%, rgba(240,237,232,0.3) 50%, transparent 100%)",
          }}
        />
        <div className="relative z-10 text-center px-6 w-full max-w-3xl">
          <img
            src="/images/idoruru/title.avif"
            alt="Idoruru"
            className="w-full"
          />
        </div>
      </section>

      {/* Main video */}
      <section className="px-6 md:px-16 py-12 max-w-5xl mx-auto">
        <p className="text-[10px] font-black tracking-[0.35em] text-neutral-400 uppercase mb-6">
          Idoruru Guided Tour Video
        </p>
        <div className="relative w-full aspect-video bg-neutral-200">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/jy5bu8IQJWI"
            title="Idoruru Guided Tour Video 4K"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>

      {/* Text — theory */}
      <section className="px-6 md:px-16 py-12 max-w-5xl mx-auto">
        <div className="flex flex-col gap-1 border-l-4 border-neutral-300 px-8 py-4">
          <p className="text-base sm:text-lg font-semibold leading-[2] text-neutral-700">
            In 1956, Donald Horton and Richard Wohl introduced the concept of
            parasocial interaction (PSI) in their psychiatric literature{" "}
            <em>
              Mass Communication and Para-Social Interaction: Observations on
              Intimacy at a Distance
            </em>
            .
          </p>
          <p className="text-base sm:text-lg font-semibold leading-[2] text-neutral-700 mt-8">
            Nearly 70 years ago, Horton and Wohl identified the transformative
            impact of electronic media on interpersonal relationships.
            Similarly, in the 1960s, Marshall McLuhan (1911&ndash;1980), who
            famously proposed the notion that &ldquo;the medium is the
            message,&rdquo; observed the rapid advancement of technology and
            foresaw how an ever-expanding media landscape would have a profound
            effect on human perception and experience.
          </p>
        </div>
      </section>

      {/* Epigraph */}
      <div className="relative mt-24 flex items-center justify-center gap-2 px-4 max-w-2xl mx-auto">
        <span
          className="select-none text-neutral-300 shrink-0"
          style={{
            fontSize: "10rem",
            lineHeight: 0.4,
            fontFamily: "var(--font-parisienne)",
            transform: "translateX(-2rem)",
          }}
          aria-hidden="true"
        >
          {"\u201C"}
        </span>
        <p
          className="text-xl sm:text-2xl font-bold text-neutral-700 leading-[2] relative italic"
          style={{ transform: "translateY(-4rem)" }}
        >
          Can an artist interview be a work of art?
        </p>
        <span
          className="select-none text-neutral-300 shrink-0"
          style={{
            fontSize: "10rem",
            lineHeight: 0.4,
            fontFamily: "var(--font-parisienne)",
            transform: "translateX(-1rem)",
          }}
          aria-hidden="true"
        >
          {"\u201D"}
        </span>
      </div>

      {/* Artist interviews */}
      <section className="px-6 md:px-16 py-12 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              id: "720Nl6ZYuO8",
              title: "Interview with Yang Jia-Yun",
              year: "2025",
              type: "Smartphone, Video presented via streaming, 02'20\"",
            },
            {
              id: "icwgHSugnfA",
              title: "Interview with Chen lu-you",
              year: "2025",
              type: "Smartphone, Video presented via streaming, 02'20\"",
            },
            {
              id: "taLoHrD2cjs",
              title: "Interview with Lu Wen-ting",
              year: "2025",
              type: "Smartphone, Video presented via streaming, 02'20\"",
            },
          ].map((v) => (
            <div key={v.id} className="flex flex-col">
              <div className="relative w-full aspect-video bg-neutral-200">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="flex flex-col gap-1 mt-2">
                <p className="text-sm font-bold text-black tracking-wide italic">
                  {v.title}
                </p>
                <p className="text-xs font-semibold text-neutral-400 tracking-wide">
                  {v.year}, {v.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-16 py-12 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-10 mb-10">
          <p className="text-base font-semibold leading-[2] text-black">
            In this video series, the three artists presented in the exhibition
            are in fact performed by other artists. The work adopts the modular
            language of media interviews&mdash;framing the subject, their
            gestures, working process, spoken narrative, and editorial
            construction. Displayed alongside each exhibited work, the video
            appears to introduce the artist and their practice. Yet while the
            footage remains real, the roles are displaced: artist-actors
            articulate the exhibited artists&rsquo; statements, while
            simultaneously exposing their own actual processes of making.
          </p>
          <p className="text-base font-semibold leading-[2] text-black">
            Contemporary institutions, through streaming media, construct a
            public imagination of the artist&mdash;establishing a dual structure
            of <b>how an artist is expected to be seen</b>, and{" "}
            <b>how one learns to become such a figure</b>.
          </p>
          <p className="text-base font-semibold leading-[2] text-black">
            As these expectations consolidate into criteria for what is
            recognised as &ldquo;good&rdquo; contemporary art, the
            artist&rsquo;s identity becomes entangled with institutionally
            designed rules of the game. Like the absence of mirrors in
            Disneyland restrooms, or the coloured transition screens in
            role-playing games that prevent players from catching their own
            reflection, these mechanisms suspend self-awareness. Whether in
            themed environments or virtual worlds, such systems enable the
            adoption of identities detached from the self. In this sense,
            contemporary art no longer operates solely as an expression of
            personal experience, but as a calibrated production of
            affect&mdash;one that seeks resonance and generates specific
            responses.
          </p>
        </div>
      </section>

      {/* Opening symposium — dual channel */}
      <section className="px-6 md:px-16 py-12 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[{ id: "F040XGNBjio" }, { id: "hoOyoMiDE0A" }].map((v) => (
            <div key={v.id} className="flex flex-col gap-3">
              <div className="relative w-full aspect-video bg-neutral-200">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title="Idoruru Opening Symposium"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 flex flex-col gap-1">
          <p className="text-sm font-bold text-black tracking-wide italic">
            Idoruru Opening Symposium
          </p>
          <p className="text-xs font-semibold text-neutral-400 tracking-wide">
            2025, Artists/Actors communicate in an Opening Symposium,
            Two-channel video, 10&apos;00&quot;
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-10 mt-12">
          <p className="text-base font-semibold leading-[2] text-black">
            The opening symposium is a common format through which artists
            publicly present their work, bringing the artist into view while
            satisfying the audience&rsquo;s desire to verify the link between
            artwork and author. This produces a tension between institutional
            definitions of &ldquo;good&rdquo; contemporary art and the presumed
            authenticity of the artist.
          </p>
          <p className="text-base font-semibold leading-[2] text-black">
            Guided tours further mediate this relation. As docents interpret the
            work through speech, their narration reshapes its reception, at
            times displacing the artist&rsquo;s position.
          </p>
          <p className="text-base font-semibold leading-[2] text-black">
            Within this structure, does the audience begin to project the artist
            on stage as the figure society expects them to be?
          </p>
        </div>
      </section>

      {/* Text — body */}
      <section className="px-6 md:px-16 py-12 max-w-5xl mx-auto">
        {/* Before / After carousel */}
        <section className="max-w-5xl mx-auto">
          <BeforeAfterCarousel />
        </section>

        {/* Last paragraph */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-1 gap-10">
          <p className="text-base font-semibold leading-[2] text-black">
            This work loosens these mechanisms by reconfiguring the relations
            between art, artwork, and artist. Through actor-artists reenacting
            the exhibited artists&rsquo; statements, it asks whether such
            projections can be sustained, and whether authorship can evade the
            demand for evidential authenticity.
          </p>
        </div>

        <div className="w-8 h-px bg-neutral-300 mt-16 mb-6" />
        <p className="text-xs font-bold text-neutral-300 tracking-widest pb-20">
          <i>Interview with Yang Jia-Yun</i>, 2025, Smartphone, Video presented
          via streaming, 02&apos;20&quot;
          <br />
          <i>Interview with Chen lu-you</i>, 2025, Smartphone, Video presented
          via streaming, 02&apos;20&quot;
          <br />
          <i>Interview with Lu Wen-ting</i>, 2025, Smartphone, Video presented
          via streaming, 02&apos;20&quot;
          <br />
          <i>Idoruru Opening Symposium</i>, 2025, Artists/Actors communicate in
          an Opening Symposium, Two-channel video, 10&apos;00&quot;
        </p>
      </section>
    </div>
  );
}
