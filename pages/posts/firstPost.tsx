import Link from "next/link";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  color: red;
`;

export default function FirstPost() {
  return (
    <>
      <StyledDiv>Red</StyledDiv>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
