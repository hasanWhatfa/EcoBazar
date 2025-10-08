import React from "react";

type Level = 1 | 2 | 3 | 4 | 5 | 6;
type Size = "h72" | "h56" | "h48" | "h40" | "h36" | "h32" ;
type Weight = "normal" | "medium" | "semibold" ;

interface Props {
  children: React.ReactNode;
  level?: Level;
  size?: Size;
  className?: string;
  weight?: Weight
}

export default function Heading({ children, level = 2, size = "h32", className = "", weight = "medium" }: Props) {
  const Tag = `h${level}` as any;
  const sizeClass = {
    h72: "text-[9.23vw] md:text-[6vw] lg:text-[4.1667vw] xl:text-[3.75vw]",
    h56: "text-[6.6667vw] md:text-[4vw] lg:text-[3.0555vw] xl:text-[2.9166vw]",
    h48: "text-[6.1538vw] md:text-[3.75vw] lg:text-[2.5vw]",
    h40: "text-[5.641vw] md:text-[3.25vw] lg:text-[2.3612vw] xl:text-[2.0834vw]",
    h36: "text-[5.1282vw] md:text-[3vw] lg:text-[2.0833vw] xl:text-[1.875vw]",
    h32: "text-[4.61538vw] md:text-[2.75vw] lg:text-[1.8056vw] xl:text-[1.667vw]",
  }[size];
  const weightClass = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
  }[weight];
 
  return <Tag className={`${sizeClass} ${weightClass} leading-[120%] ${className}`}>{children}</Tag>;
}
