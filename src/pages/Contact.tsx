import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import Map from '../components/contact/Map';
import SocialLinks from '../components/contact/SocialLinks';

export default function Contact() {
  return (
    <main className="container mt-6 space-y-8">
      <div className="text-3xl font-bold">Contact Us</div>
      <ContactForm />
      <ContactInfo />
      <div className="flex items-center justify-between">
        <div className="text-xl font-semibold">Find us</div>
        <SocialLinks />
      </div>
      <Map />
    </main>
  );
}