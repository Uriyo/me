"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { navItems } from "@/public/constants";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 z-50 p-4 md:p-8">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 bg-black/20 backdrop-blur-lg rounded-full border border-white/10 text-white"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation Links */}
      <div
        className={cn(
          "absolute right-4 top-16 md:relative md:right-0 md:top-0",
          "flex md:flex",
          isOpen ? "flex" : "hidden md:flex",
          "flex-col md:flex-row",
          "items-start md:items-center",
          "gap-2 md:gap-6",
          "p-4 bg-black/20 backdrop-blur-lg rounded-2xl md:rounded-full",
          "border border-white/10",
          "min-w-[200px] md:min-w-0"
        )}
      >
        {navItems.map(({ path, name, icon: Icon }) => {
          const isActive = pathname === path;
          return (
            <Link
              key={path}
              href={path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "relative px-4 py-2 rounded-full text-sm font-medium transition-colors w-full md:w-auto",
                isActive ? "text-white" : "text-white/60 hover:text-white"
              )}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Icon size={16} />
                {name}
              </span>
              {isActive && (
                <motion.div
                  layoutId="navbar-active"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}