import { useState } from "react";
import { initialExtensions } from "./extension";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import ExtensionCard from "../components/ExtensionCard";

function App() {
  // the full list of extensions, this is the "source of truth"
  const [extensions, setExtensions] = useState(initialExtensions);

  // which filter button is currently selected
  const [filter, setFilter] = useState<Filter>("all");

  // whether dark mode is on
  const [isDark, setIsDark] = useState(false);

  // flip one extension's isActive value on/off
  function handleToggleActive(id: number) {
    setExtensions((prev) =>
      prev.map((ext) =>
        ext.id === id ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  }

  // remove one extension from the list completely
  function handleRemove(id: number) {
    setExtensions((prev) => prev.filter((ext) => ext.id !== id));
  }

  // only show the extensions that match the current filter
  const visibleExtensions = extensions.filter((ext) => {
    if (filter === "active") return ext.isActive;
    if (filter === "inactive") return !ext.isActive;
    return true;
  });

  return (
    <div
      className={isDark ? "dark" : ""}
    >
      <div className="min-h-screen bg-light-gradient dark:bg-dark-gradient">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:py-10">
          <Header isDark={isDark} onToggleTheme={() => setIsDark((d) => !d)} />

          <div className="mt-10 flex flex-col gap-6">
            <FilterBar activeFilter={filter} onFilterChange={setFilter} />

            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visibleExtensions.map((extension) => (
                <ExtensionCard
                  key={extension.id}
                  extension={extension}
                  onToggleActive={handleToggleActive}
                  onRemove={handleRemove}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
