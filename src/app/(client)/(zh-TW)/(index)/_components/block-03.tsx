export function Block03() {
  return (
    <section
      className="h-[calc(100vh-3.5rem)] snap-start shrink-0 relative overflow-hidden flex items-center justify-center bg-cover bg-bottom bg-fixed"
      style={{ backgroundImage: "url('/images/home/block-03/cover.avif')" }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <img
        src="/images/home/block-03/title.avif"
        alt="title"
        className="relative z-10 max-w-[120px] w-full"
      />
    </section>
  );
}
