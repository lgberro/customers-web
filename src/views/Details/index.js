import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import Loader from '../../components/Loader';
import {Screen, Container, Avatar} from './style';

const get = (id, cb) => {
  fetch(`/customer/${id}`)
    .then(res => res.json())
    .then(data => cb(data));
};

export default function Details() {
  let [loading, setLoading] = useState(true);
  let [customer, setCustomer] = useState();
  let {id} = useParams();

  useEffect(() => {
    setLoading(true);
    get(id, data => {
      setCustomer(data);
      setLoading(false);
    });
  }, [id]);

  return (
    <Screen>
      <Container>{customer && <Avatar src={customer.avatar} />}</Container>
    </Screen>
  );
}
