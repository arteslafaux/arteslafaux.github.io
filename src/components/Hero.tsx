export default function Hero() {
  return (
    <section
      className="hero min-h-[50vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/5611.jpg')" }}>
      <div className="hero-overlay bg-opacity-70" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-2 text-5xl font-bold">TÍTULO</h1>
          <h2 className="mb-4 text-2xl font-medium">SUBTÍTULO</h2>
          <p className="mb-4">
            Breve descripción inspiradora que introduce el sitio.
          </p>
          <button className="btn btn-primary">Empieza ahora</button>
        </div>
      </div>
    </section>
  );
}
