import type { Metadata } from "next";
import { routes } from "@/lib/routes";
import { MouseGlow } from "../_components/mouse-glow";
import { TaiwanMap } from "../_components/taiwan-map";
import { SphereGallery } from "../_components/sphere-gallery";
import { SnapController } from "../_components/snap-controller";
import { ScatteredGallery } from "../_components/scattered-gallery";
import { FanGallery } from "../_components/fan-gallery";

export const metadata: Metadata = {
  title: "Parhelion | Gôo tsong-tāi",
  description:
    "Parhelion — Gôo tsong-tāi, 2022. Process-based work structured by the movement of a cement-painted board from Hualien to Tainan, 180×180cm. A day's round trip: sunrise meets sunset.",
  openGraph: {
    title: "Parhelion | Gôo tsong-tāi",
    description:
      "Parhelion — Gôo tsong-tāi, 2022. Process-based work structured by the movement of a cement-painted board from Hualien to Tainan, 180×180cm.",
    url: "https://gootsongtai.art/parhelion/en",
    siteName: "Gôo tsong-tāi",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://gootsongtai.art/parhelion/en",
  },
};

const navRoutes = routes.filter((r) => r.id !== "parhelion");

export default function ParhelionEnPage() {
  return (
    <div className="relative min-h-screen font-sans">
      <MouseGlow />
      <SnapController targetId="parhelion-map-en" />
      <style>{`
        @keyframes parhelion-breathe {
          0%, 100% { opacity: 0.08; transform: translate(-50%, -50%) scale(0.92); }
          50% { opacity: 0.45; transform: translate(-50%, -50%) scale(1.05); }
        }
        .parhelion-gradient {
          animation: parhelion-breathe 8s ease-in-out infinite;
        }
      `}</style>

      {/* Fixed background image */}
      <div
        className="fixed inset-0 -z-20"
        style={{
          backgroundImage: "url('/images/parhelion/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Gradient SVG */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <img
          src="/images/parhelion/gradient.svg"
          alt=""
          aria-hidden="true"
          className="parhelion-gradient absolute"
          style={{ maxHeight: "90vh", width: "auto", top: "50%", left: "50%" }}
        />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-[10] px-8 py-6 flex justify-end gap-8">
        <a
          href="/parhelion"
          className="text-xs font-black tracking-[0.25em] uppercase transition-opacity opacity-60 hover:opacity-100"
          style={{ color: "rgba(90,40,30,1)" }}
        >
          中文
        </a>
        {navRoutes.map((r) => (
          <a
            key={r.id}
            href={r.path}
            className="text-xs font-black tracking-[0.25em] uppercase transition-opacity opacity-60 hover:opacity-100"
            style={{ color: "rgba(90,40,30,1)" }}
          >
            {r.name}
          </a>
        ))}
      </nav>

      {/* Slide 1 — Logo */}
      <section className="snap-start relative z-[2] h-screen flex flex-col items-center justify-center px-6">
        <img
          src="/images/parhelion/title.webp"
          alt="Parhelion"
          className="w-auto max-w-lg"
          style={{ maxHeight: "55vh" }}
        />
      </section>

      {/* Slide 2 — Epigraph */}
      <section className="snap-start relative z-[2] h-screen flex items-center justify-center px-6">
        <div className="flex items-center justify-center gap-2 max-w-5xl px-4">
          <span
            className="select-none text-white/30 shrink-0"
            style={{
              fontSize: "10rem",
              lineHeight: 0.4,
              fontFamily: "var(--font-parisienne)",
              transform: "translate(-2rem, 3rem)",
            }}
            aria-hidden="true"
          >
            {"“"}
          </span>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-[2.2] relative text-center italic">
            In Hualien, I lived with the sunrise, but never the sunset. In
            Tainan, the reverse unfolded. The same sun, across shifting spaces
            and times, returns in quiet recurrence.
          </p>
          <span
            className="select-none text-white/30 shrink-0"
            style={{
              fontSize: "10rem",
              lineHeight: 0.4,
              fontFamily: "var(--font-parisienne)",
              transform: "translate(-1rem, 3rem)",
            }}
            aria-hidden="true"
          >
            {"”"}
          </span>
        </div>
      </section>

      {/* Slide 3 — Map */}
      <div id="parhelion-map-en" className="snap-start">
        <TaiwanMap locale="en" />
      </div>

      {/* Slide 4 — Trigger */}
      <section className="snap-start relative z-[2] h-screen flex items-center justify-center">
        <SphereGallery locale="en" />
      </section>

      {/* Slide 5 — Quote */}
      <section className="snap-start relative z-[2] h-screen flex items-center justify-center px-6 md:px-16">
        <div className="border-l-4 border-white/40 px-8 py-4 max-w-5xl">
          <p className="text-base sm:text-lg font-semibold leading-[2] text-white">
            In a day&rsquo;s round trip, I bring Tainan&rsquo;s sunset to meet
            the sunrise in Hualien, and then bring Hualien&rsquo;s sunrise to
            meet the sunset in Tainan.
          </p>
        </div>
      </section>

      {/* Slide 6 — Scattered color-ticket photos (202112) */}
      <section className="snap-start relative z-[2] h-screen overflow-hidden">
        <ScatteredGallery locale="en" />
      </section>

      {/* Slide 7 — Fan color-ticket photos (202201) */}
      <section className="snap-start relative z-[2] h-screen overflow-hidden">
        <FanGallery locale="en" />
      </section>

      {/* Slide 8 — Body text */}
      <section className="snap-start relative z-[2] min-h-screen flex flex-col justify-center py-20">
        <div className="px-6 md:px-16 pb-4 max-w-5xl mx-auto w-full pt-12">
          <p className="text-base font-semibold leading-[2.2] text-white mb-6">
            To distinguish between two identical suns, I began to let the sun
            respond to my position.
          </p>
          <p className="text-base font-semibold leading-[2.2] text-white mb-6">
            Throughout December evenings, I collected the colours of sunsets at
            TNNUA: on the rooftop of the Graduate Institute, along the hillside
            beside the dormitory, at the workshop, by the Wushantou Reservoir,
            and along the road towards Shanhua. Moving along my daily route, I
            translated each sunset, under shifting weather and fading light,
            into hand-mixed colour studies.
          </p>
          <p className="text-base font-semibold leading-[2.2] text-white mb-6">
            Over the course of a month, guided by imprecise time and unstable
            conditions, I relied on my own perception and pigments to register
            these changes. The act of measurement remained knowingly inaccurate.
          </p>
          <p className="text-base font-semibold leading-[2.2] text-white">
            This persistent deviation forms a mirage between myself and the real
            sun, <strong>a relation held without articulation</strong>.
          </p>
        </div>

        {/* Work labels */}
        <div className="absolute inset-x-0 bottom-10 z-10 max-w-5xl mx-auto w-full px-6 md:px-16">
          <div className="opacity-40" style={{ color: "rgba(90,40,30,1)" }}>
            <div
              className="w-8 h-px mb-4"
              style={{ background: "rgba(90,40,30,1)" }}
            />
            <p className="text-xs font-bold tracking-widest">
              <i>Parhelion</i>, 2022, Process-based work structured by the
              movement of a cement-painted board from Hualien to Tainan,
              180&times;180cm
              <br />
              <i>Sketching in December 2021</i>, 2021, Poster Colour on Arches,
              75&times;50mm, 15 in total
              <br />
              <i>The first sunset in 2022</i>, 2022, Poster Colour on Arches,
              75&times;50mm, 9 in total
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
