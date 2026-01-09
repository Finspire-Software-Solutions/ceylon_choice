import { Button } from '@/components/ui/button';
import type { ImageOnlyCategory } from '@/types';

type FilterValue = 'all' | 'grocery' | 'snacks' | ImageOnlyCategory;

type Props = {
  value: FilterValue;
  onChange: (v: FilterValue) => void;
};

export default function ProductFilter({ value, onChange }: Props) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Button onClick={() => onChange('all')} variant={value === 'all' ? 'default' : 'outline'}>All</Button>
      <Button onClick={() => onChange('snacks')} variant={value === 'snacks' ? 'default' : 'outline'}>Snacks</Button>
      <Button onClick={() => onChange('grocery')} variant={value === 'grocery' ? 'default' : 'outline'}>Grocery Items</Button>
      <Button onClick={() => onChange('spice')} variant={value === 'spice' ? 'default' : 'outline'}>Spice</Button>
      <Button onClick={() => onChange('vegetable')} variant={value === 'vegetable' ? 'default' : 'outline'}>Vegetable</Button>
      <Button onClick={() => onChange('fruits')} variant={value === 'fruits' ? 'default' : 'outline'}>Fruits</Button>
      <Button onClick={() => onChange('dryFish')} variant={value === 'dryFish' ? 'default' : 'outline'}>Dry Fish</Button>
      <Button onClick={() => onChange('fish')} variant={value === 'fish' ? 'default' : 'outline'}>Fish</Button>
      <Button onClick={() => onChange('meat')} variant={value === 'meat' ? 'default' : 'outline'}>Meat</Button>
      
    </div>
  );
}

export type { FilterValue };