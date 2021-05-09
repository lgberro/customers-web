import styled from 'styled-components';

export const Screen = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  max-width: 40rem;
  padding: 1rem;
  margin: 2rem;
  box-shadow: 0 0 0.3rem black;
  border-radius: 0.5rem;
  background-color: white;
`;

export const Avatar = styled.img`
  object-fit: cover;
`;
