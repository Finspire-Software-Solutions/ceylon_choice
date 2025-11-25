type Props = {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
};

export default function HeroSlide(props: Props) {
  return (
    <div className="relative h-[420px] md:h-[520px] rounded overflow-hidden">
      <img src={props.image} alt={props.title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative z-10 h-full container flex items-center justify-end">
        <div className="max-w-xl text-white text-center md:text-right pr-6 md:pr-12">
          <div className="text-3xl md:text-4xl font-bold">{props.title}</div>
          <div className="mt-2 text-lg">{props.subtitle}</div>
          <div className="mt-4">{props.description}</div>
          <a href={props.ctaLink} className="mt-6 inline-block px-5 py-2 rounded bg-[color:var(--color-primary)]">{props.ctaText}</a>
        </div>
      </div>
    </div>
  );
}