export default function Navbar() {
  const links = [
    { href: "#/", label: "home" },
    { href: "#/projects", label: "projects" },
    { href: "#/about-me", label: "about me" },
    { href: "#/contact", label: "contact" },
  ];

  return (
    <ul className="flex justify-start items-center h-20 pl-6 md:pl-0 space-x-4 md:space-x-7">
      {links.map((link) => (
        <li key={link.href}>
          <a className="opacity-75 hover:opacity-100" href={link.href}>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}