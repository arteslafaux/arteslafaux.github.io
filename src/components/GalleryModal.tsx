import { useNavigate, useParams } from "react-router-dom";
import SeedData from "./seedData";
import { useState } from "react";

export default function GalleryModal() {
  const navigate = useNavigate();
  const { id } = useParams();
  const item = SeedData.find((x) => x.id === Number(id));
  const [isVertical, setIsVertical] = useState<boolean | null>(null);

  if (!item) return null;

  return (
    <div
      className="
        fixed inset-0 z-50 flex items-center justify-center
        bg-black/70 backdrop-blur-sm
      "
      onClick={() => navigate("/collection")}>
      <div
        className={`
          bg-[#2b2f38] p-6 rounded-xl text-white shadow-2xl
          ${isVertical ? "max-w-md" : "w-11/12 max-w-4xl"}
        `}
        onClick={(e) => e.stopPropagation()}>
        {/* Imagen o galería */}
        <div
          className={`
            mb-4 flex 
            ${
              Array.isArray(item.image)
                ? "flex-row gap-4 justify-center"
                : "flex-col"
            }
          `}>
          {Array.isArray(item.image) ? (
            <div className="flex flex-row gap-4 justify-center w-full">
              {item.image.map((src, i) => (
                <div
                  key={i}
                  className="w-1/2 flex justify-center items-center max-h-[70vh]">
                  <img
                    src={src}
                    alt={`${item.title}-${i}`}
                    className="h-full w-auto object-contain rounded-lg"
                  />
                </div>
              ))}
            </div>
          ) : (
            <img
              src={item.image}
              alt={item.title}
              onLoad={(e) => {
                const img = e.currentTarget;
                setIsVertical(img.naturalHeight > img.naturalWidth);
              }}
              className={`
                rounded-lg
                ${isVertical ? "w-72 mx-auto" : "w-full"}
              `}
            />
          )}
        </div>

        <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
        <p className="text-orange-300">{item.technique}</p>
        <p className="text-gray-300 mt-4">{item.description}</p>

        <button
          onClick={() => navigate("/collection")}
          className="mt-6 cursor-pointer text-orange-500 hover:text-orange-400 font-bold uppercase tracking-widest">
          Cerrar
        </button>
      </div>
    </div>
  );
}
