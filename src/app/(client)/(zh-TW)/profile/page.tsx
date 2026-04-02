import type { Metadata } from "next";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "個人簡介 | Gôo tsong-tāi",
  description:
    "吳宗岱（WU, TSUNG-TAI），1997年生，臺中。當代藝術家，以Ｚ世代語境滑動性別與身分的結構，創作游牧於觀念、裝置與社會實踐。",
  openGraph: {
    title: "吳宗岱 · 個人簡介 | Gôo tsong-tāi",
    description:
      "吳宗岱（WU, TSUNG-TAI），1997年生，臺中。當代藝術家，以Ｚ世代語境滑動性別與身分的結構，創作游牧於觀念、裝置與社會實踐。",
    url: "https://gootsongtai.art/profile",
    siteName: "Gôo tsong-tāi",
    locale: "zh_TW",
    type: "profile",
    images: [
      {
        url: "https://gootsongtai.art/images/profile/cover.avif",
        width: 1600,
        alt: "吳宗岱 Gôo tsong-tāi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "吳宗岱 · 個人簡介 | Gôo tsong-tāi",
    description:
      "吳宗岱（WU, TSUNG-TAI），1997年生，臺中。當代藝術家，以Ｚ世代語境滑動性別與身分的結構，創作游牧於觀念、裝置與社會實踐。",
    images: ["https://gootsongtai.art/images/profile/cover.avif"],
  },
  alternates: {
    canonical: "https://gootsongtai.art/profile",
  },
};

const navRoutes = routes.filter((r) => r.id !== "profile");

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "吳宗岱",
  alternateName: ["WU, TSUNG-TAI", "Gôo tsong-tāi"],
  birthDate: "1997",
  birthPlace: { "@type": "Place", name: "臺中，臺灣" },
  nationality: "Taiwanese",
  jobTitle: "當代藝術家",
  url: "https://gootsongtai.art/",
  sameAs: ["https://gootsongtai.art/", "https://www.instagram.com/wutsongtai/"],
  email: "1100116@itd.tnnua.edu.tw",
  address: {
    "@type": "PostalAddress",
    addressLocality: "臺中",
    addressCountry: "TW",
  },
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "國立臺南藝術大學",
      department: "造形藝術研究所",
    },
    {
      "@type": "EducationalOrganization",
      name: "國立東華大學",
      department: "藝術與設計學系",
    },
  ],
  award: [
    "藝術未來獎 第一屆亞洲優秀畢業生獎 入圍，香港，2023",
    "陳啟川先生南藝造形藝術獎，2023",
  ],
  description:
    "1997年生，現居臺中。以Ｚ世代語境滑動性別與身分的結構。創作游牧於觀念、裝置與社會實踐，以社群平臺、ACG同人與Ｚ世代價值觀等媒介，模糊藝術家做為創作者的輪廓。",
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
          href="/profile/en"
          className="text-xs font-black tracking-[0.25em] uppercase text-white/40 hover:text-white transition-colors"
        >
          EN
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
              <h1 className="text-5xl font-black text-white leading-tight">
                吳宗岱
              </h1>
              <p className="text-sm font-bold text-white/50 mt-2 tracking-widest">
                WU, TSUNG-TAI
              </p>
              <p className="text-sm font-bold text-white/50 tracking-widest">
                Gôo tsong-tāi
              </p>
            </div>

            {/* Title */}
            <div>
              <p className="text-white/70 text-base font-bold leading-relaxed">
                當代藝術家
              </p>
              <p className="text-white/40 text-sm font-semibold mt-1">
                臺中，臺灣
              </p>
            </div>

            {/* Keywords */}
            <div className="flex flex-col gap-2">
              {["現象學", "酷兒理論", "Z世代", "社會實踐"].map((kw) => (
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
              b. 1997 · 臺中
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
                吳宗岱
              </h1>
              <p className="text-sm font-bold text-white/50 tracking-widest">
                WU, TSUNG-TAI · Gôo tsong-tāi
              </p>
              <p className="text-white/60 text-base font-semibold">
                當代藝術家，臺中，臺灣
              </p>
            </div>

            {/* Keywords */}
            <div className="flex flex-wrap gap-2">
              {["現象學", "酷兒理論", "Z世代", "社會實踐"].map((kw) => (
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
              生於1997年，現居臺中。其創作關注Z世代語境中性別與身分的流動性，作品游走於觀念藝術、裝置與社會實踐之間，並以社群媒體、ACG同人文化與Z世代價值觀等元素作為創作媒介，模糊藝術家作為單一創作者的界線。
            </p>
            <p className="text-white/80 text-base leading-[2] font-semibold mt-4 max-w-xl">
              2023年，以作品 <i>Bàn-tāi</i>{" "}
              進入國際視野，入選首屆香港「藝術未來獎」亞洲優秀畢業生獎30位入圍者之一。創作足跡遍及臺灣、中國、荷蘭、澳洲與日本。
            </p>
            <p className="text-white/40 text-sm font-bold mt-6 tracking-widest">
              臺灣 · 中國 · 荷蘭 · 澳洲 · 日本
            </p>
          </section>

          {/* Education */}
          <section>
            <SectionLabel>Education</SectionLabel>
            <div className="mt-6 space-y-8">
              <EducationItem
                school="造形藝術研究所"
                institution="國立臺南藝術大學"
                years="2021–2025"
              />
              <EducationItem
                school="藝術與設計學系"
                institution="國立東華大學"
                years="2015–2020"
              />
              <EducationItem
                school="美術班"
                institution="國立臺中第一高級中學"
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
                title="藝術未來獎"
                desc="第一屆亞洲優秀畢業生獎 30名入圍者，香港"
              />
              <AwardItem
                year="2023"
                title="陳啟川先生南藝造形藝術獎"
                desc={
                  <>
                    <i>縣道171</i>，南藝大造形所期末展演，臺灣
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
                    location="臺中，臺灣"
                  />
                  <ExhibitionItem
                    year="2022"
                    title="Bàn-tāi"
                    location="臺南，臺灣"
                  />
                  <ExhibitionItem
                    year="2022"
                    title="幻日"
                    location="花蓮、臺南，臺灣"
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
                      title: "亞洲三年展曼徹斯特 2025 研究研討會",
                      subtitle: "第六屆曼徹斯特亞洲三年展",
                      location: "Manchester, United Kingdom",
                      titleIsItalic: false,
                    },
                    {
                      year: "2025",
                      title: "偶像轉生計劃 Idoruru",
                      subtitle: "臺中一中美術班研究所返校聯展",
                      location: "臺中，臺灣",
                    },
                    {
                      year: "2024",
                      title: "反覆演練Re-her-sal：觀眾入場",
                      subtitle: "國藝會常態補助",
                      location: "臺北，臺灣",
                    },
                    {
                      year: "2024",
                      title: "Gemini ζ",
                      subtitle: "南藝大造形所啟川獎",
                      location: "高雄，臺灣",
                    },
                    {
                      year: "2023",
                      title: "橫渡後，指向",
                      subtitle: "南藝大造形所110級畢業聯展",
                      location: "臺南，臺灣",
                    },
                    {
                      year: "2023",
                      title: "讓故事永遠呈焦糖白霜",
                      subtitle: "南藝大造形所期末展演",
                      location: "臺南，臺灣",
                    },
                    {
                      year: "2023",
                      title: "熟路si̍k-lōo",
                      subtitle: "社仔廟埕影展",
                      location: "臺南，臺灣",
                    },
                    {
                      year: "2023",
                      title: "縣道171",
                      subtitle: "南藝大造形所期末展演",
                      location: "臺南，臺灣",
                    },
                    {
                      year: "2022",
                      title: "不由自主健康管理",
                      subtitle: "南藝大造形所期末展演",
                      location: "臺南，臺灣",
                    },
                    {
                      year: "2021",
                      title: "水秀山莊",
                      subtitle: "南藝大造形所期末展演",
                      location: "臺南，臺灣",
                    },
                    {
                      year: "2021",
                      title: "連結怎麼打不開",
                      subtitle: "南藝大造形所新生展演",
                      location: "臺南，臺灣",
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
                    href="https://indiepublisher.tw/zh-hant/book/2178 "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    《Bàn-tāi》
                  </a>
                </p>
                <p className="text-white/45 text-sm font-semibold mt-1">
                  新北市：島座放送，2025.09 ／ ISBN 978-626-99354-6-8
                </p>
              </div>
              <div>
                <p className="text-white/85 text-base font-bold leading-relaxed">
                  <a
                    href="https://hdl.handle.net/11296/7bs82w"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    〈自我媒介化〉 <i>Self-Mediatization</i>
                  </a>
                </p>
                <p className="text-white/45 text-sm font-semibold mt-1">
                  碩士論文，國立臺南藝術大學造形藝術研究所，2025.04
                </p>
              </div>
            </div>
          </section>

          {/* Residency */}
          <section>
            <SectionLabel>Residency</SectionLabel>
            <div className="mt-6">
              <p className="text-white/85 text-base font-bold">
                荷蘭藝宿計畫 Art residency in the Netherlands
              </p>
              <p className="text-white/40 text-sm font-semibold mt-1">
                荷蘭，2024.06.22 – 2024.07.17
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
                    <>當弔詭不再是弔詭：來自「{<i>Gemini Z</i>}」的延伸思考</>
                  ),
                  pub: "張碩尹/AOFA.TW",
                  date: "2025.01",
                  href: "https://aofa.tw/?p=6161",
                },
                {
                  title: (
                    <>
                      「外星球」降落台南火車站？原來是藝術創作品「
                      {<i>泌乳媽</i>}」
                    </>
                  ),
                  pub: "自由時報",
                  date: "2023.10",
                  href: "https://news.ltn.com.tw/news/life/breakingnews/4458870",
                },
                {
                  title: (
                    <>
                      酷不酷盡在不言中：關於吳宗岱《{<i>Bàn-tāi</i>}
                      》與藝術「政確」的問題
                    </>
                  ),
                  pub: "張文豪/ArtTouch",
                  date: "2023.02",
                  href: "https://artouch.com/art-views/content-96414.html",
                },
                {
                  title:
                    "清涼照被臉書錯BAN？人類、AI都錯亂？台南藝術看板挑戰真實審查",
                  pub: "公視 P#新聞實驗室",
                  date: "2023.02",
                  href: "https://youtu.be/7Pd-RONl2MA",
                },
                {
                  title: "「裸露照」高掛農村路口！藝術創作遭檢舉2/5提前拆",
                  pub: "TVBS",
                  date: "2023.01",
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
                title="偶像轉生計劃 Idoruru"
                org="臺中一中 2025 計畫補助"
              />
              <GrantItem
                year="2024"
                title="《project愛國婦人會》創作計畫"
                org="國藝會 2024 常態補助"
              />
              <GrantItem
                year="2024"
                title="偶像轉生計劃 Idoruru"
                org="凱昇藝術中心 2024 計畫徵件"
              />
              <GrantItem
                year="2021"
                title="私人 2021 助學計畫"
                org="私人企業 助學計畫"
              />
            </div>
          </section>

          {/* Talks */}
          <section className="pb-20">
            <SectionLabel>Talks & Events</SectionLabel>
            <div className="mt-6 space-y-5">
              {[
                {
                  date: "2026.02",
                  title: "《Bàn-tāi》吳宗岱粉絲見面簽書會",
                  venue: "第34屆台北國際書展",
                  location: "臺北",
                },
                {
                  date: "2025.12",
                  title: "《Bàn-tāi》系列座談第三彈 吳宗岱寫真新書發表會",
                  venue: "臺北田園城市生活風格書店",
                  location: "臺北",
                },
                {
                  date: "2025.11",
                  title: "《Bàn-tāi》系列座談第二彈 吳宗岱寫真新書發表會",
                  venue: "莫伊 voi ch. · YouTube串流直播",
                  url: "https://www.youtube.com/live/4jHS5zaZ-7c?si=fpwe4OJeSiY2OI_p",
                },
                {
                  date: "2025.11",
                  title: "《Bàn-tāi》系列座談第一彈 吳宗岱寫真新書發表會",
                  venue: "臺北田園城市生活風格書店",
                  location: "臺北",
                },
                {
                  date: "2024.11",
                  title: "《Bàn-tāi》吳宗岱藝術家講座",
                  venue: "國立彰化師範大學美術學系",
                },
                {
                  date: "2023.10",
                  title:
                    "《我變性故我在》X誰跟你變性，我是性別確認！但，然後呢？",
                  venue: "YouTube串流節目 · 公視：主題之夜SHOW",
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
    <div className="flex items-start justify-between gap-4">
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
      <span className="text-sm font-bold text-white/30 shrink-0">{year}</span>
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
  title: string;
  org: string;
}) {
  return (
    <div className="flex gap-6">
      <div>
        <p className="text-white/80 text-base font-bold">{title}</p>
        <p className="text-white/35 text-sm font-semibold mt-0.5">
          {org}
          {year ? `· ${year}` : ""}
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
    <>
      <div>
        <div className="text-white/80 text-base font-bold leading-relaxed italic">
          {title}
        </div>
        <p className="text-white/35 text-sm font-semibold mt-0.5">
          {venue}
          {location ? ` · ${location}` : ""} · {date}
        </p>
      </div>
    </>
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
