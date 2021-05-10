import React, {useState, useEffect} from 'react';
import ImageFadeIn from 'react-image-fade-in';
import {useParams} from 'react-router-dom';
import {IconContext} from 'react-icons';
import {FaBuilding, FaDesktop, FaEnvelope, FaGlobeAmericas, FaMapMarkerAlt, FaPhoneAlt} from 'react-icons/fa';

import FadeIn from '../../components/FadeIn';
import {Screen, Container, Info, Name, Text} from './style';

export default function Details() {
  let [customer, setCustomer] = useState();
  let {id} = useParams();

  useEffect(() => {
    fetch(`/customer/${id}`)
      .then(res => res.json())
      .then(data => setCustomer(data));
  }, [id]);

  return (
    !!customer && (
      <IconContext.Provider value={{size: '0.8rem', style: {marginRight: '0.3rem'}}}>
        <FadeIn>
          <Screen>
            <Container>
              <ImageFadeIn
                src={customer.avatar}
                width={128}
                height={128}
                style={{borderRadius: '0.3rem', marginRight: '0.4rem'}}
              />
              <Info>
                <Name>{customer.name}</Name>
                <Text>
                  <FaBuilding />
                  {customer.company.name}
                </Text>
                <Text>
                  <FaMapMarkerAlt />
                  {customer.address.streetC}
                </Text>
                <Text>
                  <FaGlobeAmericas />
                  {customer.address.city} - {customer.address.country}
                </Text>
                <Text>
                  <FaPhoneAlt style={{verticalAlign: 'bottom'}} />
                  {customer.phone}
                </Text>
                <Text>
                  <FaEnvelope style={{verticalAlign: 'bottom'}} />
                  {customer.email.toLowerCase()}
                </Text>
                <Text>
                  <FaDesktop style={{verticalAlign: 'bottom'}} />
                  www.{customer.website.toLowerCase()}
                </Text>
              </Info>
            </Container>
          </Screen>
        </FadeIn>
      </IconContext.Provider>
    )
  );
}
