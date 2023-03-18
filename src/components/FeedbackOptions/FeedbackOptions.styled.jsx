import styled from '@emotion/styled';
export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  & button {
    padding: 8px 15px;
    background-color: #dcb5ff;
    color: black;
    text-transform: capitalize;
    border: 1px solid #77529e;
    color: #77529e;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    transition: transform 200ms ease-in-out, background-color 200ms ease-in;
  }
  & button:hover {
    background-color: #77529e;
    color: #d9f2ff;
  }
`;
