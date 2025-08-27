import React from 'react';
import { Shield, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative mt-16 sm:mt-20 border-t border-zinc-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
          <div>
            <h4 className="font-semibold">Product</h4>
            <ul className="mt-3 space-y-2 text-zinc-600 dark:text-zinc-400">
              <li><a href="#features" className="hover:text-zinc-900 dark:hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-zinc-900 dark:hover:text-white">Pricing</a></li>
              <li><a href="#integrations" className="hover:text-zinc-900 dark:hover:text-white">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-zinc-600 dark:text-zinc-400">
              <li><a href="#about" className="hover:text-zinc-900 dark:hover:text-white">About</a></li>
              <li><a href="#contact" className="hover:text-zinc-900 dark:hover:text-white">Contact</a></li>
              <li><a href="#faq" className="hover:text-zinc-900 dark:hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Resources</h4>
            <ul className="mt-3 space-y-2 text-zinc-600 dark:text-zinc-400">
              <li><a href="#blog" className="hover:text-zinc-900 dark:hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-zinc-900 dark:hover:text-white">Guides</a></li>
              <li><a href="#" className="hover:text-zinc-900 dark:hover:text-white">Status</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Legal</h4>
            <ul className="mt-3 space-y-2 text-zinc-600 dark:text-zinc-400">
              <li><a href="#" className="hover:text-zinc-900 dark:hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-zinc-900 dark:hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-zinc-900 dark:hover:text-white">DPA</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600">
              <Shield className="text-white h-3.5 w-3.5" />
            </span>
            <span>© {new Date().getFullYear()} Assesium, Inc.</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Twitter" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-zinc-200 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-white/10">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-zinc-200 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-white/10">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


