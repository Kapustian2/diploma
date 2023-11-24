import styled from "styled-components";
import { Button } from "../../../../components";

const PaginationContainer = ({ className, page, lastPage, setPage }) => {
  return (
    <div className={className}>
      <div className="current-page">{page}</div>
      <div className="buttons">
        <Button disabled={page === 1} onClick={() => setPage(1)}>
          1
        </Button>
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
          {"<"}
        </Button>
        <Button disabled={page === lastPage} onClick={() => setPage(page + 1)}>
          {">"}
        </Button>
        <Button disabled={page === lastPage} onClick={() => setPage(lastPage)}>
          {">>"}
        </Button>
      </div>
    </div>
  );
};

export const Pagination = styled(PaginationContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .buttons {
    display: flex;
    gap: 10px;
  }
  .current-page {
  }
`;
