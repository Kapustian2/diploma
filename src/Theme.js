import { createGlobalStyle } from "styled-components";

export const theme = {
  primary: "#005BFF",
  secondary: "#F91155",
  fg: "#001A34",
  bg: "#F2F5F7",
};

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.fg};
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;   
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
  }
`;
