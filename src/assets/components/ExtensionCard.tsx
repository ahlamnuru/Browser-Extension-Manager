import type { Extension } from "../type";
import ToggleSwitch from "./ToggleSwitch";

type ExtensionCardProps = {
  extension: Extension;
  onToggleActive: (id: number) => void;
  onRemove: (id: number) => void;
};

function ExtensionCard({ extension, onToggleActive, onRemove }: ExtensionCardProps) {
  const { id, logo, name, description, isActive } = extension;

  return (
    <li className="flex flex-col gap-4 rounded-xl border border-neutral-200 bg-neutral-0 p-4 dark:border-neutral-700 dark:bg-neutral-800">
      <div className="flex gap-3">
        <img src={logo} alt="" className="h-10 w-10 shrink-0 rounded-lg" />
        <div>
          <h2 className="font-bold text-neutral-900 dark:text-neutral-0">
            {name}
          </h2>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between">
        <button
          onClick={() => onRemove(id)}
          className="rounded-full border border-neutral-300 px-3 py-1.5 text-sm font-medium text-neutral-900 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700 dark:border-neutral-600 dark:text-neutral-0 dark:hover:bg-neutral-700"
        >
          Remove
        </button>

        <ToggleSwitch
          checked={isActive}
          onChange={() => onToggleActive(id)}
          label={`Toggle ${name} ${isActive ? "off" : "on"}`}
        />
      </div>
    </li>
  );
}

export default ExtensionCard;
