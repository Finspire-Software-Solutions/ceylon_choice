export default function AboutSection() {
  return (
    <section className="container grid gap-8 md:grid-cols-2 items-center">
      <div>
        <div className="text-3xl font-bold">About Ceylon Choice</div>
        <p className="mt-4 text-gray-700">
          Ceylon Choice is an online specialty grocer delivering authentic Sri Lankan snacks, spices, 
          and pantry staples. We are producing andd source high-quality, 
          handcrafted products made from natural ingredients and traditional recipes. 
        </p>

        <p className="mt-4 text-gray-700">
          With operations serving customers in Sri Lanka, the United Kingdom, and France, 
          we offer secure international shipping, responsive customer support, 
          and carefully packaged orders so you can enjoy genuine Sri Lankan flavors anywhere in the world.
        </p>
      </div>
      <div>
        <img src="/images/5.webp" alt="About" className="w-auto  h-auto object-contain" />
      </div>
    </section>
  );
}