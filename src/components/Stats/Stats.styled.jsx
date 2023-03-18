import styled from '@emotion/styled';
export const StatsList = styled.div`
  margin: 0 auto;
  padding-top: 5px;
  width: 200px;
  line-height: 2;
  & ul {
    list-style: none;
    padding-left: 0;
  }
  & li {
    position: relative;
  }
  & span {
    position: absolute;
    right: 0;
    font-weight: 500;
    color: #77529e;
  }
`;
