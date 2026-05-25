import type { Metadata } from "next";
import { routes } from "@/lib/routes";
import { MouseGlow } from "./_components/mouse-glow";
import { TaiwanMap } from "./_components/taiwan-map";
import { SphereGallery } from "./_components/sphere-gallery";
import { SnapController } from "./_components/snap-controller";
import { ScatteredGallery } from "./_components/scattered-gallery";
import { FanGallery } from "./_components/fan-gallery";

export const metadata: Metadata = {
  title: "幻日 Parhelion | Gôo tsong-tāi",
  description:
    "《幻日 Parhelion》——吳宗岱，2022。以水泥漆木板自花蓮至臺南的移動過程，180×180cm。一日的往返，日出與日落相見。",
  openGraph: {
    title: "幻日 Parhelion | Gôo tsong-tāi",
    description:
      "《幻日 Parhelion》——吳宗岱，2022。以水泥漆木板自花蓮至臺南的移動過程，180×180cm。",
    url: "https://gootsongtai.art/parhelion",
    siteName: "Gôo tsong-tāi",
    locale: "zh_TW",
    type: "website",
  },
  alternates: {
    canonical: "https://gootsongtai.art/parhelion",
  },
};

const navRoutes = routes.filter((r) => r.id !== "parhelion");

export default function ParhelionPage() {
  return (
    <div className="relative min-h-screen font-sans">
      <MouseGlow />
      <SnapController targetId="parhelion-map" />
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

      {/* Gradient SVG — top-right to bottom-left, fixed */}
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
          alt="幻日 Parhelion"
          className="w-auto max-w-lg"
          style={{ maxHeight: "55vh" }}
        />
      </section>

      {/* Slide 2 — Slogan */}
      <section className="snap-start relative z-[2] h-screen flex items-center justify-center px-6">
        <div className="flex items-center justify-center gap-2 max-w-2xl px-4">
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
            過去在花蓮讀書是能看見日出而看不見日落，在南藝大剛好相反。
            同樣的太陽在不同的空間與時間，卻如輪迴般出現。
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

      {/* Slide 3 — Map (300vh internal scroll preserved) */}
      <div id="parhelion-map" className="snap-start">
        <TaiwanMap />
      </div>

      {/* Slide 4 — Trigger (SphereGallery centered) */}
      <section className="snap-start relative z-[2] h-screen flex items-center justify-center">
        <SphereGallery />
      </section>

      {/* Slide 5 — Scattered color-ticket photos (202112) */}
      <section className="snap-start relative z-[2] h-screen overflow-hidden">
        <ScatteredGallery />
      </section>

      {/* Slide 6 — Fan color-ticket photos (202201) */}
      <section className="snap-start relative z-[2] h-screen overflow-hidden">
        <FanGallery />
      </section>

      {/* Slide 7 — Rest */}
      <section className="snap-start relative z-[2] min-h-screen flex flex-col justify-center py-20">
        {/* 作品牌 */}
        <div className="px-6 md:px-16 py-4 max-w-3xl mx-auto w-full">
          <p className="text-sm font-bold leading-[1.9] text-white italic">
            幻日
          </p>
          <p className="text-xs font-semibold leading-[1.9] text-white">
            2022，以水泥漆木板自花蓮至臺南的移動過程，180×180cm
          </p>
        </div>

        {/* 內容 */}
        <div className="px-6 md:px-16 py-4 max-w-3xl mx-auto w-full">
          <div className="border-l-4 border-white/20 pl-6 px-4">
            <p className="text-lg sm:text-xl font-semibold leading-[2.2] text-white">
              一日的往返，我把臺南的日落帶到花蓮與日出相見，再把花蓮的日出帶到臺南與日落相見。
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-3xl mx-auto w-full px-6 md:px-16 py-10">
          <div className="w-full h-px bg-white/20" />
        </div>

        {/* 作品牌 2 & 3 */}
        <div className="px-6 md:px-16 py-4 max-w-3xl mx-auto w-full flex flex-col gap-6">
          <p className="text-sm font-bold leading-[1.9] text-white">
            <i>2021年的12月份寫生</i>
            ，2021，以廣告顏料繪於法國水彩紙，75×50mm，共15張
          </p>
          <div className="w-full h-px bg-white/20" />
          <p className="text-sm font-bold leading-[1.9] text-white">
            <i>2022年公轉後的第一個日落</i>
            ，2022，以廣告顏料繪於法國水彩紙，75×50mm，共9張
          </p>
        </div>

        {/* 內容 2 */}
        <div className="px-6 md:px-16 py-4 max-w-3xl mx-auto w-full">
          <p className="text-base font-semibold leading-[2.2] text-white mb-6">
            我為了區分兩顆一樣的太陽，嘗試透過太陽回應我的位置：
          </p>
          <p className="text-base font-semibold leading-[2.2] text-white mb-6">
            我在12月份的傍晚時刻收集南藝大日落的顏色，與造形所頂樓、五宿旁山坡、3D
            工廠、烏山頭水庫湖畔與臺一線往善化方向的沿途日落，在放學路徑的不同地點與不同天氣的日落風貌進行色票寫生。
          </p>
          <p className="text-base font-semibold leading-[2.2] text-white">
            經過一個月依該日天氣與不精準的傍晚時間，透過當下的眼睛與色料，以明知不精準的丈量方式描繪時刻變化的色光，始終存在的誤差，提供我與真實太陽之間的海市蜃樓，保留想像而彼此心領的關係。
          </p>
        </div>
      </section>
    </div>
  );
}
