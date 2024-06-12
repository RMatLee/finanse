"use client";

const routes = [
  {
    href: "/",
    label: "Overview",
  },
  {
    href: "/transactions",
    label: "Transactions",
  },
  {
    href: "/accounts",
    label: "accounts",
  },
  {
    href: "/categories",
    label: "categories",
  },
  {
    href: "/settings",
    label: "settings",
  },
];

export const Navigation = () => {
  return(
    <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
        {routes.map(route) => {
            
        }}
    </nav>
  );
};
