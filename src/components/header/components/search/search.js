import styled from "styled-components";

const SearchContainer = ({ className }) => {
  return (
    <div className={className}>
      <input type="search" placeholder="Поиск на GOZON" />
    </div>
  );
};

export const Search = styled(SearchContainer)`
  input {
    width: 100%;
    height: 58px;
    border-radius: 20px;
    border: 0px;
    padding: 0 26px;
    outline: none;
  }
`;
