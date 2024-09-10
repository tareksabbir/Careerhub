import { Link } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li>
        <Link
          className="inline-block font-bold text-transparent bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text"
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link className="text-purple-500" to="/statistics">
          Statistics
        </Link>
      </li>
      <li>
        <Link className="text-purple-500" to="/applied">
          Applied JOB
        </Link>
      </li>
      <li>
        <Link className="text-purple-500" to="/blog">
          Blog
        </Link>
      </li>
    </>
  );

  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 ">
      <div className="container mx-auto navbar ">
        <div className="navbar-start md:mt-10 md:mb-10">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="md:text-3xl btn btn-ghost">CareerHub</a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link
        className="text-[13px] font-bold px-3 py-1 border bg-gradient-to-r from-purple-400 to-blue-400 text-white rounded">Start Applying
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
