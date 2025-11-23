export default function AboutSection() {
  return (
    <section className="container grid gap-8 md:grid-cols-2 items-center">
      <div>
        <div className="text-3xl font-bold">About Ceylon Choice</div>
        <p className="mt-4 text-gray-700">We bring authentic Sri Lankan flavors to your table with quality snacks and groceries sourced and crafted with care.</p>
      </div>
      <div>
        <img src="/vite.svg" alt="About" className="w-full h-64 object-contain" />
      </div>
    </section>
  );
}