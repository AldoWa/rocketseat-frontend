// Total Pages = 20
// Current Page = 1
import Image from "next/image";
import Arrow from "../../public/arrow.svg";
import { useEffect, useState } from "react";

const btn = (isActive: boolean) =>
  `w-8 h-8 ${isActive ? "border border-[#FFA585] bg-white text-[#FFA585]" : "bg-[#E9E9F0] text-[#41414D]"} rounded-lg text-base ${isActive ? "font-semibold" : "font-normal"}  cursor-pointer`;

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  const [actualPage, setActualPage] = useState(currentPage);

  useEffect(() => {
    setActualPage(currentPage);
  }, [currentPage])

  const generatePages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  const changePage = (page: number) => {
    if (page === actualPage || page > totalPages || page < 1) return;

    onPageChange(page);

    setActualPage(page)
  }

  return (
    <div className="flex items-center gap-2">
      {generatePages().map(page => (
        <button type="button" className={btn(page === actualPage)} key={page} onClick={() => changePage(page)}>
          { page }
        </button>
      ))}
      
      <button
        type="button"
        className={`${btn(false)} flex items-center justify-center`}
        onClick={() => changePage(actualPage - 1)}
      >
        <Image
          alt="Open dropdown menu"
          src={Arrow as string}
          width={24}
          height={24}
          className="rotate-90"
        />
      </button>
      <button
        type="button"
        className={`${btn(false)} flex items-center justify-center`}
      >
        <Image
          alt="Open dropdown menu"
          src={Arrow as string}
          width={24}
          height={24}
          className="-rotate-90"
          onClick={() => changePage(actualPage + 1)}
        />
      </button>
    </div>
  );
};
