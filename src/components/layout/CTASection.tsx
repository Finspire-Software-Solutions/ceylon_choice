import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <div className="bg-[color:var(--color-accent-lightest)]">
      <div className="container py-10 flex flex-col items-center gap-4 text-center">
        <div className="text-xl font-semibold text-[color:var(--color-text-dark)]">Need help finding the right products</div>
        <div className="text-sm text-[color:var(--color-text-light)]">Contact our wholesale experts for personalized assistance.</div>
        <Link to="/contact" className="inline-flex items-center px-5 py-2 rounded bg-[color:var(--color-primary)] text-white hover:bg-[color:var(--color-primary)]/90 transition">Contact Us</Link>
      </div>
    </div>
  )
}