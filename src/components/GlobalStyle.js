import styled, { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
}

button {
  cursor: pointer;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

export const Container = styled.div`
  text-align: center;
  margin: 20px auto 0 auto;
  max-width: 500px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f8f8f8;
`;
