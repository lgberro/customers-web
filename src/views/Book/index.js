import React, {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';

import Loader from '../../components/Loader';
import List from './List';
import {Screen, Container, Search, Empty, Paginate} from './style';

const get = (search, page, cb) => {
  fetch(`/customers?name=${search}&page=${page}`)
    .then(res => res.json())
    .then(data => cb(data));
};

export default function Book() {
  let [customers, setCustomers] = useState([]);
  let [input, setInput] = useState('');
  let [search, setSearch] = useState('');
  let [page, setPage] = useState(0);
  let [pages, setPages] = useState(1);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    get(search, page, data => {
      setCustomers(data.customers);
      setPages(data.pages);
      setLoading(false);
    });
  }, [search, page]);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setSearch(input);
      setPage(0);
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [input]);

  const onInput = ({target: {value}}) => {
    setInput(value);
  };

  const onPage = ({selected}) => setPage(selected);

  return (
    <Screen>
      <Container>
        <Search type="search" value={input} onChange={onInput} placeholder="name search" spellCheck={false} />

        <Loader loading={loading}>
          {!customers.length ? <Empty>sorry, no results...</Empty> : <List customers={customers} />}
        </Loader>

        {pages > 1 && (
          <Paginate>
            <ReactPaginate
              pageCount={pages}
              onPageChange={onPage}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              containerClassName="pagination"
              activeClassName="active"
            />
          </Paginate>
        )}
      </Container>
    </Screen>
  );
}
