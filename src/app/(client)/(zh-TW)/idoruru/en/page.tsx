import type { Metadata } from "next";
import { BeforeAfterCarousel } from "../_components/before-after-carousel";
import { SnapEnabler } from "../_components/snap-enabler";
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
    <div className="relative min-h-screen font-sans">
      <SnapEnabler />

      {/* Fixed background */}
      <div
        className="fixed inset-0 -z-20"
        style={{ backgroundColor: "#f0ede8" }}
      />

      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-8 py-6 pb-8 flex justify-end gap-8"
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

      {/* Slide 1 — Hero */}
      <section className="snap-start relative z-[2] h-screen flex flex-col items-center justify-end pb-20 overflow-hidden">
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

      {/* Slide 2 — Main video */}
      <section className="snap-start relative z-[2] h-screen flex items-center justify-center px-6 md:px-16">
        <div className="w-full max-w-5xl">
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
        </div>
      </section>

      {/* Slide 3 — Theory */}
      <section className="snap-start relative z-[2] h-screen flex items-center justify-center px-6 md:px-16">
        <div className="w-full max-w-5xl border-l-4 border-neutral-300 px-8 py-4 flex flex-col gap-1">
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

      {/* Slide 4 — Epigraph */}
      <section className="snap-start relative z-[2] h-screen flex items-center justify-center px-6">
        <div className="relative flex items-center justify-center gap-2 max-w-2xl px-4">
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
            {"“"}
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
            {"”"}
          </span>
        </div>
      </section>

      {/* Slide 5 — Artist interviews */}
      <section className="snap-start relative z-[2] h-screen flex items-center justify-center px-6 md:px-16">
        <div className="w-full max-w-5xl">
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
              <div key={v.id} className="flex flex-col h-[30vh] sm:h-auto">
                <div className="relative w-full flex-1 min-h-0 sm:flex-none sm:aspect-video bg-neutral-200">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="flex flex-col gap-1 mt-2 shrink-0">
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
        </div>
      </section>

      {/* Slide 6 — Interview explanation */}
      <section className="snap-start relative z-[2] h-screen flex items-center justify-center px-6 md:px-16">
        <div className="w-full max-w-5xl flex flex-col gap-10">
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
        </div>
      </section>

      {/* Slide 7 — Opening symposium videos */}
      <section className="snap-start relative z-[2] h-screen flex items-center justify-center px-6 md:px-16">
        <div className="w-full max-w-5xl">
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
        </div>
      </section>

      {/* Slide 8 — BeforeAfterCarousel */}
      <section className="snap-start relative z-[2] min-h-screen flex flex-col justify-center py-20 px-6 md:px-16">
        <div className="w-full max-w-5xl mx-auto">
          <BeforeAfterCarousel />
        </div>
      </section>

      {/* Slide 9 — Opening symposium text + work labels */}
      <section className="snap-start relative z-[2] min-h-screen flex flex-col justify-center py-20">
        <div className="px-6 md:px-16 max-w-5xl mx-auto w-full flex flex-col gap-10">
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

        {/* Work labels — absolute bottom */}
        <div className="absolute inset-x-0 bottom-10 z-10 max-w-5xl mx-auto w-full px-6 md:px-16">
          <div className="opacity-40" style={{ color: "rgba(90,40,30,1)" }}>
            <div
              className="w-8 h-px mb-4"
              style={{ background: "rgba(90,40,30,1)" }}
            />
            <p className="text-xs font-bold tracking-widest">
              <i>Interview with Yang Jia-Yun</i>, 2025, Smartphone, Video
              presented via streaming, 02&apos;20&quot;
              <br />
              <i>Interview with Chen lu-you</i>, 2025, Smartphone, Video
              presented via streaming, 02&apos;20&quot;
              <br />
              <i>Interview with Lu Wen-ting</i>, 2025, Smartphone, Video
              presented via streaming, 02&apos;20&quot;
              <br />
              <i>Idoruru Opening Symposium</i>, 2025, Artists/Actors communicate
              in an Opening Symposium, Two-channel video, 10&apos;00&quot;
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
