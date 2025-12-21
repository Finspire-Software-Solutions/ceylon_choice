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
    <div className="relative h-[300px] sm:h-[400px] md:h-[480px] lg:h-[520px] rounded overflow-hidden">
      <img 
        src={props.image} 
        alt={props.title} 
        className="absolute inset-0 w-full h-full object-cover object-center" 
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20" />
      <div className="relative z-10 h-full container flex items-center justify-center md:justify-end px-4 sm:px-6">
        <div className="max-w-xl text-white text-center md:text-right w-full md:pr-8 lg:pr-12">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            {props.title}
          </div>
          <div className="mt-2 text-base sm:text-lg md:text-xl">{props.subtitle}</div>
          <div className="mt-2 sm:mt-4 text-sm sm:text-base">{props.description}</div>
          <a 
            href={props.ctaLink} 
            className="mt-4 sm:mt-6 inline-block px-4 sm:px-5 py-2 sm:py-2.5 rounded bg-[color:var(--color-primary)] hover:opacity-90 transition-opacity text-sm sm:text-base font-medium"
          >
            {props.ctaText}
          </a>
        </div>
      </div>
    </div>
  );
}