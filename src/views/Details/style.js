import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 40rem;
  padding: 1rem;
  margin: 2rem;
  box-shadow: 0 0 0.3rem black;
  border-radius: 0.5rem;
  background-color: white;
  @media (max-width: 30rem) {
    flex-direction: column;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.2rem;
`;

export const Text = styled.p`
  padding: 0.2rem;
`;
