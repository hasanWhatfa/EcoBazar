import React from "react";


type Size = "p24" | "p20" | "p18" | "p16" | "p14" | "p12" ;
type Weight = "normal" | "medium" | "semibold" ;

interface Props {
  children: React.ReactNode;
  size?: Size;
  className?: string;
  weight?: Weight
}

export default function Paragraph({ children, size = "p18", className = "", weight = "medium" }: Props) {
  const sizeClass = {
    p24: "text-[4.10256vw] md:text-[2.25vw] lg:text-[1.3888vw] xl:text-[1.25vw]",
    p20: "text-[3.5897vw] md:text-[2vw] lg:text-[1.25vw] xl:text-[1.04166vw]",
    p18: "text-[3.0769vw] md:text-[1.75vw] lg:text-[1.1111vw] xl:text-[0.9375vw]",
    p16: "text-[3.0769vw] md:text-[1.5vw] lg:text-[0.9722vw] xl:text-[0.8333vw]",
    p14: "text-[3.0769vw] md:text-[1.5vw] lg:text-[0.9722vw] xl:text-[0.729166vw]",
    p12: "text-[3.0769vw] md:text-[1.5vw] lg:text-[0.8333vw] xl:text-[0.625vw]",
  }[size];
  const weightClass = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
  }[weight];
 
  return <p className={`${sizeClass} ${weightClass} leading-[150%] ${className}`}>{children}</p>;
}
