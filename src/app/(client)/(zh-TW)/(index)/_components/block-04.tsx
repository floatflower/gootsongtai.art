export function Block04() {
  return (
    <section
      className="h-[calc(100vh-3.5rem)] snap-start shrink-0 relative overflow-hidden flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/images/home/block-04/cover.avif')" }}
    >
      <a
        href="/idoruru"
        className="relative z-10 max-w-sm sm:max-w-lg md:max-w-2xl w-full"
      >
        <img
          src="/images/home/block-04/title.avif"
          alt="title"
          className="w-full cursor-pointer"
        />
      </a>
    </section>
  );
}
