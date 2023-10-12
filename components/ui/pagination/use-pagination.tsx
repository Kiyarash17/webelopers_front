import { useMemo } from "react";

export const DOTS = "...";

const range = (start: any, end: any) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

type Props = {
  totalCount: number;
  pageSize: number;
  siblingCount: 1;
  currentPage: number;
};

export default function usePagination(props: Props) {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(props.totalCount / props.pageSize);

    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = props.siblingCount + 5;

    /*
          If the number of pages is less than the page numbers we want to show in our
          paginationComponent, we return the range [1..totalPageCount]
        */
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(
      props.currentPage - props.siblingCount,
      1
    );
    const rightSiblingIndex = Math.min(
      props.currentPage + props.siblingCount,
      totalPageCount
    );

    /*
          We do not want to show dots if there is only one position left 
          after/before the left/right page count as that would lead to a change if our Pagination
          component size which we do not want
        */
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * props.siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * props.siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [props.totalCount, props.pageSize, props.siblingCount, props.currentPage]);

  return paginationRange;
}
