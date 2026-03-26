import { Hurricane } from "next/font/google";

const hurricane = Hurricane({ weight: "400", subsets: ["latin"] });

export function Block01() {
  return (
    <section
      className="h-[calc(100vh-3.5rem)] snap-start shrink-0 relative overflow-hidden flex flex-col items-center justify-center text-center px-8 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/images/profile/cover.avif')" }}
    >
      <div className="absolute inset-0 bg-black/55" />
      <a href="/profile" className="relative z-10 flex flex-col items-center">
        <h1
          className={`${hurricane.className} text-7xl sm:text-8xl md:text-9xl text-white tracking-tight leading-none`}
        >
          Gôo tsong-tāi
        </h1>
        <p className="text-sm sm:text-base font-semibold text-white/50 mt-6 tracking-widest">
          Gôo tsong-tāi
        </p>
      </a>
    </section>
  );
}
