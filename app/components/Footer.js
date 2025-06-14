export default function Footer() {
  return (
    <footer 
      className="relative bottom-0 left-0 w-full text-white p-4 sm:p-6 mt-0"
      style={{ backgroundColor: "var(--secondary-bg)" }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        {/* Copyright - Responsive positioning */}
        <p className="text-sm text-center md:text-left ml-0 sm:ml-4 md:ml-8 lg:ml-16 xl:ml-24 order-2 md:order-1">
          &copy; {new Date().getFullYear()} Rifqi Cahyono. All rights reserved.
        </p>

        {/* Social Media Links - Responsive positioning */}
        <div className="flex flex-wrap justify-center md:justify-end space-x-3 sm:space-x-4 mr-0 sm:mr-4 md:mr-8 lg:mr-16 xl:mr-24 order-1 md:order-2">
          <a 
            href="https://github.com/RifqiCah" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-400 transition-colors duration-300 whitespace-nowrap"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/rifqicahyono" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-400 transition-colors duration-300 whitespace-nowrap"
          >
            LinkedIn
          </a>
          <a 
            href="https://www.instagram.com/rif_qifiki/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-400 transition-colors duration-300 whitespace-nowrap"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}