import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import Map from '../components/contact/Map';
import SocialLinks from '../components/contact/SocialLinks';

export default function Contact() {
  return (
    <main className="container mt-6">
      <div className="grid gap-10 md:grid-cols-2 items-start">
        <div>
          <div className="text-4xl font-bold">Contact Us</div>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>

        <div className="flex flex-col">
          <div>
            <div className="text-3xl font-bold">Get In Touch</div>
          </div>

          <div className="mt-6">
            <ContactInfo />
          </div>

          <div className="mt-8">
            <div className="text-xl font-semibold">Follow Us</div>
            <div className="mt-3">
              <SocialLinks />
            </div>
          </div>

          <div className="mt-8">
            <Map />
          </div>
        </div>
      </div>
    </main>
  );
}