import { styled, withTheme } from "styled-components";
import { theme } from "../../Theme";
import { Logo, Search, ControlPanel } from "./components";
import { Link } from "react-router-dom";
const HeaderContainer = ({ className }) => {
  return (
    <div className={className}>
      <header className="block">
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="search">
          <Search />
        </div>
        <div className="control-panel">
          <ControlPanel />
        </div>
      </header>
    </div>
  );
};

export const Header = styled(withTheme(HeaderContainer))`
  .block {
    background: ${theme.primary};
    position: fixed;
    top: 0;
    padding: 0px;
    width: 100%;
    height: 90px;
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
  }
  .search {
    width: 766px;
    padding-inline: 10px;
    margin-top: 16px;
  }

  .logo,
  .control-panel {
    width: 300px;
  }
  .logo {
    display: grid;
    place-content: center;
  }
  z-index: 10;
`;
