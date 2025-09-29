import { Outlet } from "react-router";
import { Button } from "antd";
import { Link } from "react-router";

function Layout() {
  return (
    <div>
      <main className="flex h-screen">
        <div className="flex-1 flex flex-col items-center justify-center">
          <Outlet />
        </div>
        <div className="bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 flex-1 relative">
          <div className="absolute top-4 right-4 flex gap-2">
            <Link to="/sign-in">
              <Button ghost>
                Sign In
              </Button>
            </Link>
            <Link to="/sign-up">
              <Button ghost>
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Layout;
