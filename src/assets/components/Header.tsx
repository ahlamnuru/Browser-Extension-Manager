import logo from "../assets/images/logo.svg";
import iconSun from "../assets/images/icon-sun.svg";
import iconMoon from "../assets/images/icon-moon.svg";

type HeaderProps = {
  isDark: boolean;
  onToggleTheme: () => void;
};

function Header({ isDark, onToggleTheme }: HeaderProps) {
  return (
    <header className="flex items-center justify-between rounded-2xl bg-neutral-0 p-4 shadow-sm dark:bg-neutral-800">
      <div className="flex items-center gap-3">
        <img src={logo} alt="" className="h-8 w-8" />
        <span className="text-lg font-bold text-neutral-900 dark:text-neutral-0">
          Extensions
        </span>
      </div>

      <button
        onClick={onToggleTheme}
        aria-label="Toggle color theme"
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700 dark:bg-neutral-700 dark:hover:bg-neutral-600"
      >
        <img src={isDark ? iconSun : iconMoon} alt="" className="h-5 w-5" />
      </button>
    </header>
  );
}

export default Header;
