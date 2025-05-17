export default function Intro() {
  return (
    <section className="relative bg-gradient-to-b from-black via-neutral-600 to-white py-32">
      <div className="relative mx-auto max-w-3xl space-y-12 px-4">
        <p className="mx-auto max-w-xl text-center font-light leading-relaxed tracking-wide text-neutral-200/90 transition-colors duration-300">
          Texto descriptivo 1 ……………………
        </p>
        <div className="mx-auto h-[1px] w-16 bg-gradient-to-r from-transparent via-neutral-400/30 to-transparent" />
        <p className="mx-auto max-w-xl text-center font-light leading-relaxed tracking-wide text-neutral-700 transition-colors duration-300">
          Texto descriptivo 2 ……………………
        </p>
      </div>
    </section>
  );
}
