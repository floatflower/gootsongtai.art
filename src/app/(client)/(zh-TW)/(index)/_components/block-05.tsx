export function Block05() {
  return (
    <a
      href="/parhelion"
      className="h-screen snap-start shrink-0 relative overflow-hidden flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/images/home/block-05/cover.avif')" }}
    >
      <div className="relative z-10 max-w-sm sm:max-w-lg md:max-w-2xl w-full">
        <img
          src="/images/home/block-05/title.avif"
          alt="title"
          className="w-full max-h-[60vh] object-contain"
        />
      </div>
    </a>
  );
}
