type Props = {
  value: 'all' | 'grocery' | 'snacks';
  onChange: (v: 'all' | 'grocery' | 'snacks') => void;
};

export default function ProductFilter({ value, onChange }: Props) {
  const base = 'px-4 py-2 rounded';
  return (
    <div className="flex items-center justify-center gap-2">
      <button onClick={() => onChange('all')} className={`${base} ${value === 'all' ? 'bg-[color:var(--color-primary)] text-white' : 'bg-gray-100'}`}>All</button>
      <button onClick={() => onChange('grocery')} className={`${base} ${value === 'grocery' ? 'bg-[color:var(--color-primary)] text-white' : 'bg-gray-100'}`}>Grocery Items</button>
      <button onClick={() => onChange('snacks')} className={`${base} ${value === 'snacks' ? 'bg-[color:var(--color-primary)] text-white' : 'bg-gray-100'}`}>Chips Items</button>
    </div>
  );
}