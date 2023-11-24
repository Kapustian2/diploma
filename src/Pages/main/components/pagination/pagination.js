import styled from "styled-components";
import { Button, Input } from "../../../../components";

const PaginationContainer = ({ className, page, lastPage, setPage }) => {
  const handleChange = (e) => {
    const newPage = parseInt(e.target.value);
    if (newPage < lastPage) {
      setPage(newPage);
    }
    setPage(lastPage);
  };

  return (
    <div className={className}>
      <div className="buttons">
        <Button disabled={page === 1} onClick={() => setPage(1)}>
          {"<<"}
        </Button>
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
          {"<"}
        </Button>
        <Input
          type="number"
          className="current-page"
          onChange={handleChange}
          value={page}
          borderRadius="10px"
          width="80px"
          height="40px"
        />
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
  input {
    text-align: center;
    background-color: #f91155;
    color: #f2f5f7;
  }
`;
