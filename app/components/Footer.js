export default function Footer() {
  return (
    <footer className="relative bottom-0 left-0 w-full text-white p-6 mt-0"
    style={{ backgroundColor: "var(--secondary-bg)" }} // Tambahkan style inline
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Copyright */}
        <p className="text-sm ml-24">&copy; {new Date().getFullYear()} Rifqi Cahyono. All rights reserved.</p>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 mr-24 md:mt-0">
          <a href="https://github.com/RifqiCah" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">GitHub</a>
          <a href="https://www.linkedin.com/in/rifqicahyono" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">LinkedIn</a>
          <a href="https://www.instagram.com/rif_qifiki/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Instagram</a>
        </div>

       
      </div>
    </footer>
  );
}
