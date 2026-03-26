import { BeforeAfterCarousel } from "./_components/before-after-carousel";
import { routes } from "@/lib/routes";

const navRoutes = routes.filter((r) => r.id !== "idoruru");

export default function IdoruruPage() {
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

      {/* Main video */}
      <section className="px-6 md:px-16 py-20 max-w-5xl mx-auto">
        <p className="text-[10px] font-black tracking-[0.35em] text-neutral-400 uppercase mb-6">
          導覽影片
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
      </section>

      {/* Text — theory */}
      <section className="px-6 md:px-16 py-10 max-w-3xl mx-auto">
        <div className="w-8 h-px bg-neutral-300 mb-12" />
        <p className="text-base sm:text-lg font-semibold leading-[2] text-neutral-700">
          1956年唐納德．霍頓（Horton Donald）與理查德．沃爾（Richard
          Wohl）在精神病學文獻《大眾傳播和準社會交往：對遠距離親密行為的考察》（Mass
          communication and para-social interaction: Observations on intimacy at
          a distance）提出擬社會互動（Parasocial Interaction／PSI）。
        </p>
        <p className="text-base sm:text-lg font-semibold leading-[2] text-neutral-500 mt-8">
          不僅近70年前的霍頓與沃爾發現電媒體帶來人際關係的轉變，在1960年代提出「媒介即訊息」的麥克魯漢（McLuhan,
          1911~1980）觀察迅速發展的科技，預言了愈發蓬勃發展的媒介將改變了人類的一切。
        </p>
      </section>

      {/* Artist interviews */}
      <section className="px-6 md:px-16 py-20 max-w-5xl mx-auto">
        <p className="text-[10px] font-black tracking-[0.35em] text-neutral-400 uppercase mb-6">
          藝術家訪談
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { id: "720Nl6ZYuO8", title: "藝術家楊家芸訪談" },
            { id: "icwgHSugnfA", title: "藝術家陳律佑訪談" },
            { id: "taLoHrD2cjs", title: "藝術家呂文婷訪談" },
          ].map((v) => (
            <div key={v.id} className="flex flex-col gap-3">
              <div className="relative w-full aspect-video bg-neutral-200">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={`《${v.title}》4K中英字幕完整版`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <p className="text-xs font-bold text-neutral-400 tracking-wide">
                《{v.title}》
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Opening symposium — dual channel */}
      <section className="px-6 md:px-16 py-10 pb-10 max-w-5xl mx-auto">
        <p className="text-[10px] font-black tracking-[0.35em] text-neutral-400 uppercase mb-6">
          開幕座談會 · 雙頻道
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { id: "F040XGNBjio", label: "雙頻道 01" },
            { id: "hoOyoMiDE0A", label: "雙頻道 02" },
          ].map((v) => (
            <div key={v.id} className="flex flex-col gap-3">
              <div className="relative w-full aspect-video bg-neutral-200">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={`《偶像轉生計畫 Idoruru 聯展開幕座談會》${v.label} 4K中英字幕完整版`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <p className="text-xs font-bold text-neutral-400 tracking-wide">
                {v.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Text — body */}
      <section className="px-6 md:px-16 py-10 max-w-5xl mx-auto">
        {/* First two paragraphs — 2 column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
          <p className="text-base font-semibold leading-[2] text-neutral-600">
            此錄像分為兩部影片錄製，第一部由展覽藝術家於凱昇藝術中心內拍攝，形式以常見開幕座談會之畫面結構錄製，內容為三位展覽藝術家對此次展覽中全新作品的介紹、交互問答與創作分享，該影片於開幕前完成與播出；開幕當天則由三位演員藝術家進行相同畫面、相同位置與相同座談方向的開幕座談會，惟不同之處會用演員藝術家理解展覽藝術家的方式進行開幕座談會。第一部影片會在第二部開幕當天錄製過程於背景同步播放，第二部影片於開幕結束始剪輯後製後以雙頻道的形式完整展出。
          </p>
          <p className="text-base font-semibold leading-[2] text-neutral-600">
            作品鎖定三位展覽藝術家共同高中母校，於開幕座談邀請學弟妹蒞臨參訪。學校是為工業革命服務而派生的機構，建立工人去個人而標準化的技術能力，以用於服務工廠劃一的機械設備。參訪一舉作為教育機構的社會實踐其目的之一，為建立在學學生對職涯規劃有標準的模型概念，開幕座談的形式讓他們對藝術品的形式與對藝術家的身分想像，是否就此建立一定的模型？學弟妹是否將會投射座談會上的藝術家，就是自己未來成為藝術家的樣子呢？
          </p>
        </div>

        {/* Before / After carousel */}
        <section className="py-16 max-w-5xl mx-auto">
          <BeforeAfterCarousel />
        </section>

        {/* Last two paragraphs — 2 column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <p className="text-base font-semibold leading-[2] text-neutral-500">
            開幕座談是多數藝術家公開展示其成果的展演方式，該活動補足了藝術品背後的始作俑者－藝術家的現身，同時也滿足了觀眾慾望，確認藝術品與藝術家之間的創造證據，與機構認定好的當代藝術與藝術家的個人關係產生矛盾。而導覽解說切入藝術品與藝術家的關係，隨著機構派遣導覽員進行作品導覽，導覽員對該藝術品的理解透過轉換口述的方式改變觀眾對藝術品的觀看方式，似乎此時的藝術家是該導覽員而非原藝術家。
          </p>
          <p className="text-base font-semibold leading-[2] text-neutral-500">
            此創作試圖在結構中試圖鬆動機構從中引入的開幕座談與導覽解說，不同程度翻轉了藝術、藝術品與藝術家的關係，前者矛盾了藝術家在藝術它者的位置，後者讓導覽員取代藝術家的位置。透過開幕座談現場的演員藝術家重新詮釋展覽藝術家的論述，是否可以滿足觀眾對演員藝術家的投射？又可以滿足展覽藝術家避開身分暴露以面對不必要的證據問題呢？
          </p>
        </div>

        <div className="w-8 h-px bg-neutral-300 mt-16 mb-6" />
        <p className="text-xs font-bold text-neutral-300 tracking-widest pb-20">
          吳宗岱 · 2025
        </p>
      </section>
    </div>
  );
}
