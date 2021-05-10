import React from 'react';
import ImageFadeIn from 'react-image-fade-in';
import {useHistory} from 'react-router-dom';

import {Customer, Info, Name, TextContainer, Text} from './style';

export default function List({customers}) {
  const history = useHistory();
  return customers.map(({id, name, avatar, company}) => (
    <Customer key={id} onClick={() => history.push(`/customer/${id}`)}>
      <ImageFadeIn src={avatar} width="40rem" height="40rem" style={{borderRadius: '0.3rem'}} />
      <Info>
        <Name>{name}</Name>
        <TextContainer>
          <Text>{company.name}</Text>
        </TextContainer>
      </Info>
    </Customer>
  ));
}
