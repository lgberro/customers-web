import React from 'react';
import {Link} from 'react-router-dom';
import ImageFadeIn from 'react-image-fade-in';

import {Customer, Info, Name, TextContainer, Text} from './style';

export default function List({customers}) {
  return customers.map(({id, name, avatar, company}) => (
    <Link to={`/customer/${id}`} key={id}>
      <Customer>
        <ImageFadeIn src={avatar} width="40rem" height="40rem" opacityTransition={1} style={{borderRadius: '0.3rem'}} />
        <Info>
          <Name>{name}</Name>
          <TextContainer>
            <Text>{company.name}</Text>
          </TextContainer>
        </Info>
      </Customer>
    </Link>
  ));
}
