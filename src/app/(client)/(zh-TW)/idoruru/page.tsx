import type { Metadata } from "next";
import { BeforeAfterCarousel } from "./_components/before-after-carousel";
import { SnapEnabler } from "./_components/snap-enabler";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "偶像轉生計劃 Idoruru | Gôo tsong-tāi",
  description:
    "《偶像轉生計劃 Idoruru》——吳宗岱聯合展覽，探討擬社會互動（Parasocial Interaction）與媒介對當代身分認同的影響。2025，臺中。",
  openGraph: {
    title: "偶像轉生計劃 Idoruru | Gôo tsong-tāi",
    description:
      "《偶像轉生計劃 Idoruru》——吳宗岱聯合展覽，探討擬社會互動（Parasocial Interaction）與媒介對當代身分認同的影響。2025，臺中。",
    url: "https://gootsongtai.art/idoruru",
    siteName: "Gôo tsong-tāi",
    locale: "zh_TW",
    type: "website",
    images: [
      {
        url: "https://gootsongtai.art/images/idoruru/cover.avif",
        width: 1600,
        alt: "偶像轉生計劃 Idoruru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "偶像轉生計劃 Idoruru | Gôo tsong-tāi",
    description:
      "《偶像轉生計劃 Idoruru》——吳宗岱聯合展覽，探討擬社會互動（Parasocial Interaction）與媒介對當代身分認同的影響。2025，臺中。",
    images: ["https://gootsongtai.art/images/idoruru/cover.avif"],
  },
  alternates: {
    canonical: "https://gootsongtai.art/idoruru",
  },
};

const navRoutes = routes.filter((r) => r.id !== "idoruru");

export default function IdoruruPage() {
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
          href="/idoruru/en"
          className="text-xs font-black tracking-[0.25em] uppercase text-stone-400 hover:text-stone-600 transition-colors"
        >
          EN
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
          alt="偶像轉生計劃 Idoruru"
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
            alt="偶像轉生計劃 Idoruru"
            className="w-full"
          />
        </div>
      </section>

      {/* Slide 2 — 主影片 */}
      <section className="snap-start relative z-[2] h-screen flex items-center justify-center px-6 md:px-16">
        <div className="w-full max-w-5xl">
          <p className="text-[10px] font-black tracking-[0.35em] text-neutral-400 uppercase mb-6">
            偶像轉生計劃 Idoruru 導覽影片
          </p>
          <div className="relative w-full aspect-video bg-neutral-200">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/jy5bu8IQJWI"
              title="【導覽影片】偶像轉生計劃 Idoruru 4K臺英字幕完整版"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Slide 3 — 理論引言 */}
      <section className="snap-start relative z-[2] h-screen flex items-center justify-center px-6 md:px-16">
        <div className="w-full max-w-5xl border-l-4 border-neutral-300 px-8 py-4 flex flex-col gap-1">
          <p className="text-base sm:text-lg font-semibold leading-[2] text-neutral-700">
            1956年唐納德．霍頓（Horton Donald）與理查德．沃爾（Richard
            Wohl）在精神病學文獻《大眾傳播和準社會交往：對遠距離親密行為的考察》（Mass
            communication and para-social interaction: Observations on intimacy
            at a distance）提出擬社會互動（Parasocial Interaction／PSI）。
          </p>
          <p className="text-base sm:text-lg font-semibold leading-[2] text-neutral-700 mt-8">
            不僅近70年前的霍頓與沃爾發現電媒體帶來人際關係的轉變，在1960年代提出「媒介即訊息」的麥克魯漢（McLuhan,
            1911~1980）觀察迅速發展的科技，預言了愈發蓬勃發展的媒介將改變了人類的一切。
          </p>
        </div>
      </section>

      {/* Slide 4 — 楔子 */}
      <section className="snap-start relative z-[2] h-screen flex items-center justify-center px-6">
        <div className="relative flex items-center justify-center gap-2 max-w-xl px-4">
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
            藝術家訪談是否可以是一件藝術品？
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

      {/* Slide 5 — 藝術家訪談影片 */}
      <section className="snap-start relative z-[2] h-screen flex items-center justify-center px-6 md:px-16">
        <div className="w-full max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                id: "720Nl6ZYuO8",
                title: "藝術家楊家芸訪談",
                year: "2025",
                type: "智慧型手機、串流，02'20\"",
              },
              {
                id: "icwgHSugnfA",
                title: "藝術家陳律佑訪談",
                year: "2025",
                type: "智慧型手機、串流，02'20\"",
              },
              {
                id: "taLoHrD2cjs",
                title: "藝術家呂文婷訪談",
                year: "2025",
                type: "智慧型手機、串流，02'20\"",
              },
            ].map((v) => (
              <div key={v.id} className="flex flex-col h-[30vh] sm:h-auto">
                <div className="relative w-full flex-1 min-h-0 sm:flex-none sm:aspect-video bg-neutral-200">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={`《${v.title}》4K中英字幕完整版`}
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
                    {v.year}，{v.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 6 — 訪談說明文字 */}
      <section className="snap-start relative z-[2] h-screen flex items-center justify-center px-6 md:px-16">
        <div className="w-full max-w-5xl flex flex-col gap-10">
          <p className="text-base font-semibold leading-[2] text-black">
            此系列錄像於展覽出鏡的三位藝術家，實際上是由其他藝術家扮演，該系列模仿媒體於採訪時模組化的畫面：受訪者、其創作時的姿態、狀態、口述與剪輯技術，播放設備設置於該藝術家作品旁介紹該作品與藝術家的自述，然而拍攝的內容是真實的，演員藝術家飾演展覽藝術家於錄像中闡述展覽藝術家的創作論述，同時拍攝演員藝術家真實的創作狀態。
          </p>
          <p className="text-base font-semibold leading-[2] text-black">
            當代機構透過串流媒體塑造大眾對藝術家的想像，建立「
            <b>藝術家應該如何被社會期待</b>」以及「
            <b>如何學習成為一位被社會期待的藝術家</b>」的雙向結構。
          </p>
        </div>
      </section>

      {/* Slide 7 — 開幕座談影片 */}
      <section className="snap-start relative z-[2] h-screen flex items-center justify-center px-6 md:px-16">
        <div className="w-full max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[{ id: "F040XGNBjio" }, { id: "hoOyoMiDE0A" }].map((v) => (
              <div key={v.id} className="flex flex-col gap-3">
                <div className="relative w-full aspect-video bg-neutral-200">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title="《偶像轉生計畫 Idoruru 聯展開幕座談會》偶像轉生計畫 Idoruru 4K中英字幕完整版"
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
              偶像轉生計畫 Idoruru聯展開幕座談會
            </p>
            <p className="text-xs font-semibold text-neutral-400 tracking-wide">
              2025，以藝術家／演員身分於開幕座談會交流的過程、雙頻道，10&apos;00&quot;
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

      {/* Slide 9 — 開幕座談文字 + 作品牌 */}
      <section className="snap-start relative z-[2] min-h-screen flex flex-col justify-center py-20">
        <div className="px-6 md:px-16 max-w-5xl mx-auto w-full flex flex-col gap-10">
          <p className="text-base font-semibold leading-[2] text-black">
            開幕座談是多數藝術家公開展示其成果的展演方式，該活動補足了藝術品背後的始作俑者－藝術家的現身，同時也滿足了觀眾慾望，確認藝術品與藝術家之間的創造證據，與機構認定好的當代藝術與藝術家的個人關係產生矛盾。而導覽解說切入藝術品與藝術家的關係，隨著機構派遣導覽員進行作品導覽，導覽員對該藝術品的理解透過轉換口述的方式改變觀眾對藝術品的觀看方式，似乎此時的藝術家是該導覽員而非原藝術家。
          </p>
          <p className="text-base font-semibold leading-[2] text-black">
            開幕座談的形式讓觀眾是否將會投射座談會上的藝術家，就是社會要求藝術家應成為的樣子呢？
          </p>
        </div>

        {/* 作品牌彙整 — 絕對定位於 slide 底部 */}
        <div className="absolute inset-x-0 bottom-10 z-10 max-w-5xl mx-auto w-full px-6 md:px-16">
          <div className="opacity-40" style={{ color: "rgba(90,40,30,1)" }}>
            <div
              className="w-8 h-px mb-4"
              style={{ background: "rgba(90,40,30,1)" }}
            />
            <p className="text-xs font-bold tracking-widest">
              <i>藝術家楊家芸訪談</i>，2025，智慧型手機、串流，02&apos;20&quot;
              <br />
              <i>藝術家陳律佑訪談</i>，2025，智慧型手機、串流，02&apos;20&quot;
              <br />
              <i>藝術家呂文婷訪談</i>，2025，智慧型手機、串流，02&apos;20&quot;
              <br />
              <i>偶像轉生計畫 Idoruru聯展開幕座談會</i>
              ，2025，以藝術家／演員身分於開幕座談會交流的過程、雙頻道，10&apos;00&quot;
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
