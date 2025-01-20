"use client";

import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-jsx";

interface CodeSnippetProps {
  code: string | undefined;
  language: string | undefined;
}

export default function CodeSnippet({ code, language }: CodeSnippetProps) {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <pre className="rounded-lg overflow-x-auto bg-gray-800 p-4">
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
}
