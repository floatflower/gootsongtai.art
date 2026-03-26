export function Block02() {
  return (
    <section
      className="h-[calc(100vh-3.5rem)] snap-start shrink-0 relative overflow-hidden flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/images/home/block-02/cover.avif')" }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <img
        src="/images/home/block-02/title.avif"
        alt="title"
        className="relative z-10 max-w-xs sm:max-w-sm md:max-w-md w-full"
      />
    </section>
  );
}
