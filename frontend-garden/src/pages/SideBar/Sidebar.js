import { useRef } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Sidebar.css";
import { toast, ToastContainer } from "react-toastify";

function Sidebar({ isOpen, onClose }) {
  const sidebarRef = useRef(null);
  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`} ref={sidebarRef}>
      <Link to="/dashboard">
        <button>Dashboard</button>
      </Link>
        <Link to="/guides">
          <button>Growing Guides</button>
        </Link>
        <Link to="/prepare">
          <button>Prepare Your Garden</button>
        </Link>
        <Link to="/structure">
          <button>Garden Design</button>
        </Link>
        <Link to="/season">
          <button>Resource</button>
        </Link>
        <Link to="/maintain">
          <button>Maintain Garden</button>
        </Link>
        <Link to="/journal">
          <button>Plant Care Calendar</button>
        </Link>
        <Link to="/faq">
          <button>FAQ</button>
        </Link>
        
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default Sidebar;