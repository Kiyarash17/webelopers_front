import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import React from "react";
// import {usePagination, DOTS} from "./use-pagination";
import usePagination from "@/components/ui/pagination/use-pagination";
import { DOTS } from "@/components/ui/pagination/use-pagination";

type Props = {
  onPageChange: any;
  totalCount: number;
  siblingCount: 1;
  currentPage: number;
  pageSize: number;
  className: any;
  loading: boolean;
};

export default function Pagination(props: Props) {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  // if (currentPage === 0 || paginationRange.length < 2) {
  //   return null;
  // }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  // let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul
      className={`flex justify-center gap-2 ${
        props.loading && "pointer-events-none"
      }`}
      dir="rtl"
    >
      <li
        className={`pagination-item ${
          currentPage === 1 ? "pointer-events-none" : ""
        }`}
        onClick={onPrevious}
      >
        <MdKeyboardArrowRight className="text-2xl" />
      </li>
      {paginationRange?.map((pageNumber: any, index: number) => {
        if (pageNumber === DOTS) {
          return (
            <li key={index} className="pagination-item dots">
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={index}
            className={`pagination-item ${
              pageNumber === currentPage ? "selected" : ""
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={`pagination-item ${
          currentPage === Math.ceil(totalCount / pageSize)
            ? "pointer-events-none"
            : ""
        }`}
        onClick={onNext}
      >
        <MdKeyboardArrowLeft className="text-2xl" />
      </li>
    </ul>
  );
}
