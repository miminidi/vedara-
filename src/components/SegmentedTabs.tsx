type TabOption<T extends string> = {
  id: T;
  label: string;
};

type SegmentedTabsProps<T extends string> = {
  label: string;
  options: TabOption<T>[];
  value: T;
  onChange: (value: T) => void;
  variant?: "pill" | "underline";
};

export function SegmentedTabs<T extends string>({
  label,
  options,
  value,
  onChange,
  variant = "pill",
}: SegmentedTabsProps<T>) {
  return (
    <div className={`segmented-tabs segmented-tabs-${variant}`} role="tablist" aria-label={label}>
      {options.map((option) => (
        <button
          type="button"
          key={option.id}
          className={value === option.id ? "active" : ""}
          onClick={() => onChange(option.id)}
          role="tab"
          aria-selected={value === option.id}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
