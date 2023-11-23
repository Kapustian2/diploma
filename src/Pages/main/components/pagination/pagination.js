import styled from "styled-components";

const PaginationContainer = ({ className, page, lastPage, setPage }) => {
  return (
    <div className={className}>
      <div>{page}</div>
      <button disabled={page === 1} onClick={() => setPage(1)}>
        1
      </button>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        {"<"}
      </button>
      <button disabled={page === lastPage} onClick={() => setPage(page + 1)}>
        {">"}
      </button>
    </div>
  );
};

export const Pagination = styled(PaginationContainer)``;
