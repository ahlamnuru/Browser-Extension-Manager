import type { Filter } from "../types";

type FilterBarProps = {
  activeFilter: Filter;
  onFilterChange: (filter: Filter) => void;
};

// just the three buttons, each one tells the parent which filter to switch to
const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
];

function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <h1 className="mr-auto text-2xl font-bold text-neutral-900 dark:text-neutral-0">
        Extensions List
      </h1>

      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700 ${
            activeFilter === filter.value
              ? "bg-red-700 text-neutral-0"
              : "bg-neutral-0 text-neutral-900 hover:bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-0 dark:hover:bg-neutral-600"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
