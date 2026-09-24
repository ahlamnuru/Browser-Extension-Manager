import logoDevLens from "../images/logo-devlens.svg";
import logoStyleSpy from "../images/logo-style-spy.svg";
import logoSpeedBoost from "../images/logo-speed-boost.svg";
import logoJsonWizard from "../images/logo-json-wizard.svg";
import logoTabMasterPro from "../images/logo-tab-master-pro.svg";
import logoViewportBuddy from "../images/logo-viewport-buddy.svg";
import logoMarkupNotes from "../images/logo-markup-notes.svg";
import logoGridGuides from "../images/logo-grid-guides.svg";
import logoPalettePicker from "../images/logo-palette-picker.svg";
import logoLinkChecker from "../images/logo-link-checker.svg";
import logoDomSnapshot from "../images/logo-dom-snapshot.svg";
import logoConsolePlus from "../images/logo-console-plus.svg";

export const initialExtensions = [
  {
    id: 1,
    logo: logoDevLens,
    name: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true,
  },
  {
    id: 2,
    logo: logoStyleSpy,
    name: "StyleSpy",
    description:
      "Instantly analyze and copy CSS from any webpage element.",
    isActive: true,
  },
  {
    id: 3,
    logo: logoSpeedBoost,
    name: "SpeedBoost",
    description:
      "Optimizes browser resource usage to accelerate page loading.",
    isActive: false,
  },
  {
    id: 4,
    logo: logoJsonWizard,
    name: "JSONWizard",
    description:
      "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: true,
  },
  {
    id: 5,
    logo: logoTabMasterPro,
    name: "TabMaster Pro",
    description:
      "Organizes browser tabs into groups and sessions.",
    isActive: true,
  },
  {
    id: 6,
    logo: logoViewportBuddy,
    name: "ViewportBuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    isActive: false,
  },
  {
    id: 7,
    logo: logoMarkupNotes,
    name: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true,
  },
  {
    id: 8,
    logo: logoGridGuides,
    name: "GridGuides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false,
  },
  {
    id: 9,
    logo: logoPalettePicker,
    name: "Palette Picker",
    description:
      "Instantly extracts color palettes from any webpage.",
    isActive: true,
  },
  {
    id: 10,
    logo: logoLinkChecker,
    name: "LinkChecker",
    description:
      "Scans and highlights broken links on any page.",
    isActive: true,
  },
  {
    id: 11,
    logo: logoDomSnapshot,
    name: "DOM Snapshot",
    description:
      "Capture and export DOM structures quickly.",
    isActive: false,
  },
  {
    id: 12,
    logo: logoConsolePlus,
    name: "ConsolePlus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    isActive: true,
  },
];