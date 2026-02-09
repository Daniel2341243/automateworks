"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Footer from "./Footer";

interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <>
      {/* Minimal nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">AW</span>
              </div>
              <span className="font-bold text-lg text-neutral-800">
                Automate<span className="text-primary">Works</span>
              </span>
            </a>
            <a
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-600 hover:text-primary transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Zur Startseite
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-800 mb-10">
            {title}
          </h1>
          <div className="prose prose-neutral max-w-none prose-headings:font-bold prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3 prose-p:leading-relaxed prose-li:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
