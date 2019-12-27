import styled from 'styled-components';

const ButtonLink = styled.button`
  background: none !important;
  color: inherit;
  border: none;
  padding: 0 !important;
  font: inherit;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
`;

export default ButtonLink;
