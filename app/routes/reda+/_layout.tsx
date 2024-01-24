import { Outlet } from "@remix-run/react";

export default function Layout() {
  return (
    <div>
      THIS IS THE LAYOUT <Outlet />
    </div>
  );
}
