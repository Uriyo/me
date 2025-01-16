"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { cn } from "@/lib/utils";

interface ContentBlock {
  type: "text" | "image" | "code";
  content: string;
  position: number;
  metadata?: any;
}

interface ArticleContentProps {
  content: string;
  images: {
    id: string;
    imageUrl: string;
    position: number;
    altText?: string | null;
  }[];
  codeSnippets: {
    id: string;
    language: string;
    content: string;
    position: number;
  }[];
}

export default function ArticleContent({
  content,
  images,
  codeSnippets,
}: ArticleContentProps) {
  const [blocks, setBlocks] = useState<ContentBlock[]>([]);

  useEffect(() => {
    // Combine text content with images and code snippets
    const contentBlocks: ContentBlock[] = content
      .split("\n\n")
      .map((text, index) => ({
        type: "text",
        content: text,
        position: index * 3, // Multiply by 3 to leave space for potential images/code
      }));

    const imageBlocks: ContentBlock[] = images.map((img) => ({
      type: "image",
      content: img.imageUrl,
      position: img.position,
      metadata: {
        altText: img.altText,
      },
    }));

    const codeBlocks: ContentBlock[] = codeSnippets.map((snippet) => ({
      type: "code",
      content: snippet.content,
      position: snippet.position,
      metadata: {
        language: snippet.language,
      },
    }));

    const allBlocks = [...contentBlocks, ...imageBlocks, ...codeBlocks].sort(
      (a, b) => a.position - b.position
    );

    setBlocks(allBlocks);
  }, [content, images, codeSnippets]);

  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "text":
            return (
              <p
                key={index}
                className="mb-6 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: block.content }}
              />
            );
          case "image":
            return (
              <figure key={index} className="my-8">
                <div className="relative aspect-video w-full">
                  <Image
                    src={block.content}
                    alt={block.metadata?.altText || ""}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                {block.metadata?.altText && (
                  <figcaption className="text-center text-sm text-muted-foreground mt-2">
                    {block.metadata.altText}
                  </figcaption>
                )}
              </figure>
            );
          case "code":
            return (
              <div key={index} className="my-8">
                <SyntaxHighlighter
                  language={block.metadata?.language || "javascript"}
                  style={atomDark}
                  className="rounded-lg !bg-secondary"
                >
                  {block.content}
                </SyntaxHighlighter>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}