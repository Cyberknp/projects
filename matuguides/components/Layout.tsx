
import React from 'react';
import { ICONS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-matu-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div 
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => setActiveTab('home')}
            >
              <div className="bg-matu-sage p-2 rounded-xl text-white">
                <ICONS.Feather className="w-6 h-6" />
              </div>
              <span className="text-2xl font-serif font-bold text-matu-deep">Matuguides</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {['home', 'find', 'guides', 'about'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-sm font-medium transition-colors hover:text-matu-terracotta ${
                    activeTab === tab ? 'text-matu-terracotta underline decoration-2 underline-offset-8' : 'text-matu-deep'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>

            <button className="bg-matu-sage text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-matu-deep transition-all shadow-sm">
              Sign In
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-matu-deep text-matu-cream py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center space-x-2 mb-4 justify-center md:justify-start">
              <ICONS.Feather className="w-5 h-5" />
              <span className="text-xl font-serif font-bold">Matuguides</span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed italic">
              "Healing is a shared journey. We believe in the power of experience to light the way for others."
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <h4 className="font-bold mb-2">Resources</h4>
            <a href="#" className="text-sm hover:underline opacity-80">Crisis Support</a>
            <a href="#" className="text-sm hover:underline opacity-80">Community Guidelines</a>
            <a href="#" className="text-sm hover:underline opacity-80">Safety Center</a>
          </div>
          <div>
            <h4 className="font-bold mb-2">Connect</h4>
            <p className="text-sm opacity-80">Join our newsletter for weekly wisdom and stories of healing.</p>
            <div className="mt-4 flex space-x-2">
              <input 
                type="email" 
                placeholder="email@address.com" 
                className="bg-white/10 rounded-full px-4 py-2 text-sm flex-grow border border-white/20"
              />
              <button className="bg-matu-terracotta px-4 py-2 rounded-full text-sm font-bold">Join</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center mt-12 pt-8 border-t border-white/10 text-xs opacity-50">
          © {new Date().getFullYear()} Matuguides. Built with empathy for a better path.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
