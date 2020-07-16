import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
  margin-top: 10px;
  padding: 11px 0 15px;
  text-align: center;

  font-weight: bold;
  font-size: 15px;

  outline: 0;
  cursor: pointer;

  color: var(--twitter);
  border-bottom: solid 2px var(--twitter);

  &:hover {
    background: var(--twitter-dark-hover);
  }
`;

export const Tweets = styled.div`
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
`;
