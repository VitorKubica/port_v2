export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <img src="/logo.svg" alt="Logo" className="h-12 w-12" />
        <h1 className="ml-4 text-2xl font-bold">Portfolio VK</h1>
      </div>
      <nav className="flex items-center space-x-4">
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#projects" className="hover:underline">
          Projects
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </nav>
    </header>
  )
}
