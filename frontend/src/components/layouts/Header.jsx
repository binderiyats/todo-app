import "../../styles/components/Header.css";
import { FiMenu, FiBell, FiMoon, FiSun } from "react-icons/fi";
import { BiUser } from "react-icons/bi";

export const Header = () => {
  return (
    <header className="header">
      <button>
        <FiMenu size={31} />
      </button>
      <div className="header-right-side-wrapper">
        <button>
          <FiBell size={31} />
        </button>
        <button>
          <FiMoon size={31} />
        </button>
        <button>
          <BiUser size={31} />
        </button>
      </div>
    </header>
  );
};
