import { Button } from '@/components/ui/button';

type Props = {
  value: 'all' | 'grocery' | 'snacks';
  onChange: (v: 'all' | 'grocery' | 'snacks') => void;
};

export default function ProductFilter({ value, onChange }: Props) {
  return (
    <div className="flex items-center justify-center gap-2">
      <Button onClick={() => onChange('all')} variant={value === 'all' ? 'default' : 'outline'}>All</Button>
      <Button onClick={() => onChange('snacks')} variant={value === 'snacks' ? 'default' : 'outline'}>Snacks</Button>
      <Button onClick={() => onChange('grocery')} variant={value === 'grocery' ? 'default' : 'outline'}>Grocery Items</Button>
    </div>
  );
}