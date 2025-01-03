"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Earth,Images , FolderGit2, FileText,NotebookText, Mail } from "lucide-react";

const navItems = [
  {
    path: "/",
    name: "Home",
    icon: Earth,
  },
  {
    path: "/projects",
    name: "Projects",
    icon: FolderGit2,
  },
  {
    path: "/resume",
    name: "Resume",
    icon: FileText,
  },
  {
    path: "/blog",
    name: "Blog",
    icon: NotebookText,
  },
  {
    path: "/contact",
    name: "Contact",
    icon: Mail,
  },
  {
    path: "/muse",
    name: "Muse",
    icon: Images ,
  }
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 right-0 z-50 p-8">
      <div className="flex items-center gap-6 p-4 bg-black/20 backdrop-blur-lg rounded-full border border-white/10">
        {navItems.map(({ path, name, icon: Icon }) => {
          const isActive = pathname === path;
          return (
            <Link
              key={path}
              href={path}
              className={cn(
                "relative px-4 py-2 rounded-full text-sm font-medium transition-colors",
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