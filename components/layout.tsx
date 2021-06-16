import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`;

function Layout({ children }) {
  return <Container>{children}</Container>;
}

export default Layout;
