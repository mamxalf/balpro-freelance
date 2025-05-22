"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { marketingPhrases } from "@/app/lib/data";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Find all headings in the article
    const article = document.querySelector("article");
    if (!article) return;

    const headingElements = article.querySelectorAll("h1, h2, h3, h4, h5, h6");

    const headings: Heading[] = Array.from(headingElements).map((element) => {
      // If heading doesn't have an id, create one based on its text content
      if (!element.id) {
        const id =
          element.textContent
            ?.toLowerCase()
            .replace(/[^\w\s]/g, "")
            .replace(/\s+/g, "-") ||
          `heading-${Math.random().toString(36).substr(2, 9)}`;
        element.id = id;
      }

      return {
        id: element.id,
        text: element.textContent || "",
        level: parseInt(element.tagName.substring(1)),
      };
    });

    setHeadings(headings);

    // Set up intersection observer to highlight active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -80% 0px" }
    );

    headingElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      headingElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  if (headings.length < 3) {
    return null; // Don't show TOC for short articles
  }

  return (
    <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-6rem)] overflow-auto p-6 bg-white rounded-lg shadow-sm">
      <h4 className="text-lg font-semibold mb-4 text-slate-800">
        {marketingPhrases.tableOfContents}
      </h4>
      <nav>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li
              key={heading.id}
              style={{
                paddingLeft: `${(heading.level - 1) * 0.75}rem`,
              }}
            >
              <Link
                href={`#${heading.id}`}
                className={`block py-1 text-sm transition-colors hover:text-primary ${
                  activeId === heading.id
                    ? "text-primary font-medium"
                    : "text-slate-600"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(heading.id)?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                {heading.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
