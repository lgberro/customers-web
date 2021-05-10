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

export const Search = styled.input`
  width: 100%;
  padding: 0.8rem;
  border-radius: 0.5rem;
  border-width: 0.1rem;
  border-color: #aaa;
  border-style: solid;
  margin-bottom: 0.5rem;
`;

export const Empty = styled.p`
  font-size: 1rem;
  text-align: center;
  padding: 4rem;
`;

export const Paginate = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  .pagination > li {
    display: inline;
    color: #aaa;
  }

  .pagination > li > a,
  .pagination > li > span {
    padding: 1rem;
  }

  .pagination > li > a:hover,
  .pagination > li > span:hover {
    color: black;
    cursor: default;
    cursor: pointer;
  }

  .pagination > .active > a,
  .pagination > .active > span,
  .pagination > .active > a:hover,
  .pagination > .active > span:hover,
  .pagination > .active > a:focus,
  .pagination > .active > span:focus {
    color: black;
    font-weight: bold;
  }

  .pagination > .page,
  .pagination > .break {
    @media (max-width: 40rem) {
      display: none;
    }
  }

  .pagination > .previous,
  .pagination > .next {
    @media (min-width: 40rem) {
      display: none;
    }
  }
`;
