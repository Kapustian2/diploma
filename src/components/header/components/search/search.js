import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../../../hooks/seacrh-provider";

const SearchContainer = ({ className }) => {
  const { searchPhrase, setSearchPhrase } = useSearch();

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/");
    let newSearchPhrase = searchPhrase;
    setSearchPhrase(newSearchPhrase);
  };

  const handleChange = (e) => {
    setSearchPhrase(e.target.value);
  };

  return (
    <div className={className}>
      <input
        type="search"
        placeholder="Поиск на GOZON"
        onChange={handleChange}
        value={searchPhrase}
      />
      <img
        src="/search-button.svg"
        alt="search-button"
        onClick={handleSearch}
      />
    </div>
  );
};

export const Search = styled(SearchContainer)`
  display: flex;
  input {
    width: 100%;
    height: 58px;
    border-radius: 20px;
    border: 0px;
    padding: 0 26px;
    outline: none;
  }
  img {
    margin-left: -126px;
    &:hover {
      cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
    }
  }
`;
