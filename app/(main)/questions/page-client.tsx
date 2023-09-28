"use client";

import Pagination from "@/components/ui/pagination";
import { useState } from "react";

export default function PageClient() {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      <Pagination
        className="pagination-bar"
        currentPage={1}
        pageSize={12}
        totalCount={100}
        // onPageChange={(page: number) => getSimcards({ ...query, page })}
        onPageChange={() => console.log("changed")}
        siblingCount={1}
        loading={loading}
      />
    </>
  );
}
