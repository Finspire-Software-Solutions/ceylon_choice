import { useState } from 'react';

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
    alert('Submitted');
  };

  return (
    <form onSubmit={submit} className="space-y-3">
      {error && <div className="text-red-600 text-sm">{error}</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} placeholder="First name" className="px-3 py-2 border rounded" />
        <input value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} placeholder="Last name" className="px-3 py-2 border rounded" />
      </div>
      <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" type="email" className="w-full px-3 py-2 border rounded" />
      <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Message" className="w-full px-3 py-2 border rounded h-32" />
      <button type="submit" className="px-4 py-2 rounded bg-[color:var(--color-primary)] text-white">Submit</button>
    </form>
  );
}