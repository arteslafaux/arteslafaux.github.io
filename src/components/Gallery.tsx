import { useNavigate } from "react-router-dom";

export default function Gallery() {
  const navigate = useNavigate();

  return (
    <main
      className="relative flex-1 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?painting,studio')",
      }}>
      <div className="absolute inset-0 bg-gradient-to-t from-base-100/80 to-base-100/60" />
      <div className="relative mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(9)].map((_, idx) => (
          <article key={idx} className="card image-full shadow-xl">
            <figure>
              <img src="/5611.jpg" alt="obra" />
            </figure>
            <div className="card-body justify-end">
              <h2 className="card-title text-base-100">Obra #{idx + 1}</h2>
              <div className="card-actions justify-end">
                <div
                  onClick={() => navigate(`/gallery/${idx + 1}`)}
                  className="badge badge-accent cursor-pointer">
                  Nuevo
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
