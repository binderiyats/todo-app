import "../../styles/components/Sidebar.css";
import { Link } from "react-router-dom";
import { HiCheckCircle } from "react-icons/hi";
import { IoMdAddCircle } from "react-icons/io";
import { FaRegSquare, FaBorderAll } from "react-icons/fa";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Link to="/">
        <FaBorderAll size={20} />
        All Tasks
      </Link>
      <Link to="/running-task">
        <FaRegSquare size={19} />
        Running Tasks
      </Link>
      <Link to="/completed-task">
        <HiCheckCircle size={20} />
        Completed Tasks
      </Link>
      <Link to="/add-task">
        <IoMdAddCircle size={20} />
        Add A Task
      </Link>
    </aside>
  );
};
