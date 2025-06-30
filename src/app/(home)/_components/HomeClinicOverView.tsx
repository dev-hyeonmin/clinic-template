export default function HomeClinicOverView() {
  return (
    <div className="px-4 py-12 md:p-20">
      <div className="text-xl leading-relaxed font-medium tracking-tight md:text-4xl">
        Discover a Space of <br /> Beauty and Trust
      </div>

      <div className="relative mt-4 grid grid-cols-12 gap-3 md:mt-8 md:gap-8">
        <div className="col-span-6 aspect-square rounded-xl bg-zinc-200 md:col-span-3" />
        <div className="col-span-6 aspect-square rounded-xl bg-zinc-200 md:col-span-3" />
        <div className="col-span-12 aspect-square rounded-xl bg-zinc-200 md:col-span-6" />

        <div className="col-span-12 px-1 text-sm md:absolute md:top-1/2 md:left-0 md:px-0 md:pt-4 md:text-xl md:leading-relaxed">
          <p className="enter-line">Our facilities reflect our commitment to excellence.</p>
          <p className="enter-line">Clean, modern, and thoughtfully designed spaces.</p>
          <p className="enter-line">Experience premium care in every detail.</p>
        </div>
      </div>
    </div>
  );
}
