export default function Footer() {
  return (
    <footer className="relative bottom-0 left-0 w-full text-white p-6 mt-0"
    style={{ backgroundColor: "var(--secondary-bg)" }} // Tambahkan style inline
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Copyright */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Rifqi Cahyono. All rights reserved.</p>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Twitter</a>
        </div>

       
      </div>
    </footer>
  );
}
