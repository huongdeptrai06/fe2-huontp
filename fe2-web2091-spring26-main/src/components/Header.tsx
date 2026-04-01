import { Link } from "react-router-dom";
import { Button } from "antd";
import { useAuthStore } from "../stores/useAuthStore";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { user, logout } = useAuthStore();

  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;
  const { theme, toggleTheme } = themeContext;

  return (
    <nav className="bg-blue-600 text-white shadow">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold">
          <strong>WEB2091 App</strong>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-gray-200">
            Trang chủ
          </Link>
          <Link to="/list" className="hover:text-gray-200">
            Danh sách
          </Link>
          <Link to="/add" className="hover:text-gray-200">
            Thêm mới
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {user ? (
            <>
              <img
                src={user.avatar}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span>{user.name}</span>
              <span>Đã đăng nhập</span>

              <Button onClick={logout}>Logout</Button>
            </>
          ) : (
            <>
              <span>Chưa đăng nhập</span>
              <Link to="/login">
                <Button>Đăng nhập</Button>
              </Link>
              <Link to="/register">
                <Button>Đăng kí</Button>
              </Link>
            </>
          )}

          <Button onClick={toggleTheme}>
            {theme === "light" ? "☼" : "☽"}
          </Button>
        </div>
      </div>
    </nav>
  );
}