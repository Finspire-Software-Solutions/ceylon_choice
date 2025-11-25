import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { contact } from '@/data/content';

type Form = { firstName: string; lastName: string; email: string; message: string };

export default function ContactForm() {
  const [form, setForm] = useState<Form>({ firstName: '', lastName: '', email: '', message: '' });
  const [error, setError] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.message) {
      setError('All fields are required');
      return;
    }
    setError('');
    const text = `Contact request from ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nMessage: ${form.message}`;
    const url = `${contact.whatsappLink}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      {error && <div className="text-red-600 text-sm">{error}</div>}

      <div>
        <div className="mb-2 text-base font-semibold">Contact me</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <label className="flex flex-col">
            <span className="text-xs text-text-light mb-1">First name</span>
            <input
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              placeholder="Jane"
              className="w-full px-4 py-2 border border-gray-200 rounded-md text-sm bg-white"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-xs text-text-light mb-1">Last name</span>
            <input
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              placeholder="Smitherton"
              className="w-full px-4 py-2 border border-gray-200 rounded-md text-sm bg-white"
            />
          </label>
        </div>
      </div>

      <label className="flex flex-col">
        <span className="text-xs text-text-light mb-1">Email address</span>
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="email@domain.com"
          type="email"
          className="w-full px-4 py-2 border border-gray-200 rounded-md text-sm bg-white"
        />
      </label>

      <label className="flex flex-col">
        <span className="text-xs text-text-light mb-1">Your message</span>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Enter your question or message"
          className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm bg-white h-36 resize-none"
        />
      </label>

      <Button type="submit" className="w-full" variant="default">
        Submit
      </Button>
    </form>
  );
}