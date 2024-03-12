export default function Hero() {
  return (
    <header className="full-bleed relative z-10 flex h-screen items-center justify-end bg-cover bg-center pb-20 max-sm:h-full">
      <video muted loop autoPlay>
        <source src="/img/hero.mov" />
      </video>
    </header>
  );
}
