import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Repositories from "./Repositories";

function RepositoriesTable({ items, itemsPerPage }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="repositories-box">
      <h2 className="repositories-box__title">Repositories ({items.length})</h2>
      <Repositories currentItems={currentItems} />
      <div className="pagination-box">
        {document.documentElement.clientWidth >= 720 && (
          <p>
            {itemOffset + 1} - {itemOffset + 4} of {items.length} items
          </p>
        )}
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          containerClassName="pagination"
          pageClassName="pagination__item"
          breakClassName="pagination__item"
          activeClassName="pagination__item_active"
          previousClassName="pagination__btn"
          disabledClassName="pagination__btn_disabled"
          nextClassName="pagination__btn"
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
          onPageChange={handlePageClick}
          pageCount={pageCount}
          previousLabel={"<"}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}

export default RepositoriesTable;
