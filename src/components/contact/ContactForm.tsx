import { useState } from 'react';
import { Button } from '@/components/ui/button';

type Form = { firstName: string; lastName: string; email: string; message: string };

export default function ContactForm() {
  const [form, setForm] = useState<Form>({ firstName: '', lastName: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset messages
    setError('');
    setSuccess('');
    
    // Validate
    if (!form.firstName || !form.lastName || !form.email || !form.message) {
      setError('All fields are required');
      return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);

    try {
      // Using Web3Forms API - Replace with your access key
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY', // Get free key from https://web3forms.com
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          message: form.message,
          subject: `New Contact Form Submission from ${form.firstName} ${form.lastName}`,
          from_name: 'Ceylon Choice Website',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess('Thank you! Your message has been sent successfully. We will get back to you soon.');
        setForm({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        setError('Something went wrong. Please try again or contact us directly.');
      }
    } catch (err) {
      setError('Failed to send message. Please check your internet connection and try again.');
      console.error('Form submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      {error && <div className="text-red-600 text-sm bg-red-50 p-3 rounded-md border border-red-200">{error}</div>}
      {success && <div className="text-green-600 text-sm bg-green-50 p-3 rounded-md border border-green-200">{success}</div>}

      <div>
        <div className="mb-2 text-base font-semibold"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <label className="flex flex-col">
            <span className="text-md  mb-1">First name</span>
            <input
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              placeholder=""
              className="w-full px-4 py-2 border border-gray-200 rounded-md text-sm bg-white"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-md mb-1">Last name</span>
            <input
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              placeholder=""
              className="w-full px-4 py-2 border border-gray-200 rounded-md text-sm bg-white"
            />
          </label>
        </div>
      </div>

      <label className="flex flex-col">
        <span className="text-md mb-1">Email address</span>
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="email@domain.com"
          type="email"
          className="w-full px-4 py-2 border border-gray-200 rounded-md text-sm bg-white"
        />
      </label>

      <label className="flex flex-col">
        <span className="text-m mb-1">Your message</span>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Enter your question or message"
          className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm bg-white h-36 resize-none"
        />
      </label>

      <Button type="submit" className="w-full" variant="default" disabled={loading}>
        {loading ? 'Sending...' : 'Submit'}
      </Button>
    </form>
  );
}