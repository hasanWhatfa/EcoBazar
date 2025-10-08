'use client'


import useClickOutside from "@/hooks/useClickOutside";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react"

interface DropDownMenuProps{
    options:{linkText:string;linkTo:string;icon:ReactNode}[];
    title:string;
    className?:string;
    menuFromTop?:number;
}

const DropDownMenu = ({ options, title, className, menuFromTop}: DropDownMenuProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropDownRef = useRef<null | HTMLDivElement>(null)
    useClickOutside(dropDownRef, setIsOpen);

  return (
    <div className={`relative ${className}`} ref={dropDownRef} >
        <div 
        className="flex items-center justify-between gap-1 cursor-pointer bg-Grey-800 p-4 relative" 
        onClick={() => setIsOpen(prev => !prev)}
        >
            <p className="capitalize font-medium text-sm text-white p">
                {title}     
            </p>
            <Image
            src={'/icons/Chevron Down.svg'}
            alt="open menu icon"
            loading="eager"
            width={20}
            height={20}
            />
        </div>
        {isOpen && 
        <div className={`bg-white border-[1px] border-gray-100 absolute left-0 w-[150%]
            flex flex-col items-start ${menuFromTop ? `top-[calc(100%+${menuFromTop}px)]` : 'top-[calc(100%+24px)]'} 
        `}>
            {
                options?.map((option,idx)=>(
                        <Link href={option.linkTo} key={idx} className="flex items-center gap-3 py-4 px-5 w-full">
                            {option.icon}
                            <p className="text-gray-900">{option.linkText}</p>
                        </Link>
                ))
            }
        </div>
        }
    </div>
  )
}

export default DropDownMenu
