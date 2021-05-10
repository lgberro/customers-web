import React, {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import {useLocation, useHistory} from 'react-router-dom';

import FadeIn from '../../components/FadeIn';
import Loader from '../../components/Loader';
import List from './List';
import {Screen, Container, Search, Empty, Paginate} from './style';

export default function Book() {
  const [customers, setCustomers] = useState();
  const [input, setInput] = useState('');
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const query = new URLSearchParams(useLocation().search);
  const page = parseInt(query.get('page')) ?? 0;
  const name = query.get('name') ?? '';

  useEffect(() => {
    setLoading(true);
    fetch(`/customers?page=${page}&name=${name}`)
      .then(res => res.json())
      .then(data => {
        setCustomers(data.customers);
        setPages(data.pages);
        setLoading(false);
      });
  }, [name, page]);

  useEffect(() => {
    const handle = setTimeout(() => history.push(`/?page=0&name=${input}`), 500);
    return () => clearTimeout(handle);
  }, [history, input]);

  useEffect(() => setInput(name), [name]);

  const onInput = ({target: {value}}) => {
    setLoading(true);
    setInput(value);
  };

  const onPage = ({selected}) => history.push(`/?page=${selected}&name=${name}`);

  return (
    <Screen>
      <FadeIn style={{width: '100%'}}>
        <Container>
          <Search type="search" value={input} onChange={onInput} placeholder="name search" spellCheck={false} />
          <Loader loading={loading}>
            {!customers ? (
              <div style={{height: '10rem', width: '100%'}} />
            ) : !customers.length ? (
              <Empty>sorry, no results...</Empty>
            ) : (
              <List customers={customers} />
            )}
            {pages > 1 && (
              <Paginate>
                <ReactPaginate
                  forcePage={page}
                  pageCount={pages}
                  onPageChange={onPage}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  containerClassName="pagination"
                  activeClassName="active"
                />
              </Paginate>
            )}
          </Loader>
        </Container>
      </FadeIn>
    </Screen>
  );
}
