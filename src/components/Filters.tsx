import { categories, priceRanges } from "@/lib/data";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface FiltersProps {
  selectedCategories: string[];
  selectedPriceRange: number[];
  onCategoryChange: (categoryId: string, checked: boolean) => void;
  onPriceRangeChange: (minPrice: number, maxPrice: number) => void;
}

export function Filters({
  selectedCategories,
  selectedPriceRange,
  onCategoryChange,
  onPriceRangeChange,
}: FiltersProps) {
  return (
    <div className="space-y-6 rounded-lg bg-lilac-50 p-6">
      {/* Categories */}
      <div>
        <h3 className="mb-4 font-serif text-lg font-bold text-purple-900">
          Categorias
        </h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center gap-2">
              <Checkbox
                id={category.id}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={(checked) =>
                  onCategoryChange(category.id, checked as boolean)
                }
                className="border-purple-300 text-purple-600"
              />
              <Label
                htmlFor={category.id}
                className="cursor-pointer text-gray-700 hover:text-purple-700 transition-colors"
              >
                {category.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator className="bg-purple-200" />

      {/* Price Range */}
      <div>
        <h3 className="mb-4 font-serif text-lg font-bold text-purple-900">
          Faixa de Preço
        </h3>
        <div className="space-y-3">
          {priceRanges.map((range) => (
            <div key={range.label} className="flex items-center gap-2">
              <Checkbox
                id={`price-${range.label}`}
                checked={
                  selectedPriceRange[0] === range.min &&
                  selectedPriceRange[1] === range.max
                }
                onCheckedChange={(checked) => {
                  if (checked) {
                    onPriceRangeChange(range.min, range.max);
                  } else {
                    onPriceRangeChange(0, Infinity);
                  }
                }}
                className="border-purple-300 text-purple-600"
              />
              <Label
                htmlFor={`price-${range.label}`}
                className="cursor-pointer text-gray-700 hover:text-purple-700 transition-colors"
              >
                {range.label}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
