type ToggleSwitchProps = {
  checked: boolean;
  onChange: () => void;
  label: string;
};

// this is just a checkbox dressed up to look like an on/off switch
// "peer" lets the div next to the input react to the input's checked state
function ToggleSwitch({ checked, onChange, label }: ToggleSwitchProps) {
  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
        aria-label={label}
      />
      <div className="h-6 w-10 rounded-full bg-neutral-300 transition-colors peer-checked:bg-red-700 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-red-700 dark:bg-neutral-600"></div>
      <div className="absolute left-1 h-4 w-4 rounded-full bg-neutral-0 transition-transform peer-checked:translate-x-4"></div>
    </label>
  );
}

export default ToggleSwitch;
