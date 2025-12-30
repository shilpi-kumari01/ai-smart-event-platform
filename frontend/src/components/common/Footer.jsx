const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-gray-400 flex flex-col md:flex-row justify-between gap-6">
        
        <p>© 2025 AI Smart Event Platform. All rights reserved.</p>

        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer">About</span>
          <span className="hover:text-white cursor-pointer">Contact</span>
          <span className="hover:text-white cursor-pointer">Privacy</span>
          <span className="hover:text-white cursor-pointer">Terms</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
