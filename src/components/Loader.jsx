import React from 'react';
import styled from 'styled-components';
import LoadingOverlay from 'react-loading-overlay';
import HashLoader from 'react-spinners/HashLoader';

export default function Loader({children, loading}) {
  return (
    <StyledLoader spinner={<HashLoader color="#ddd" />} active={loading} classNamePrefix="Loader_">
      {children}
    </StyledLoader>
  );
}

const StyledLoader = styled(LoadingOverlay)`
  .Loader_overlay {
    background: white;
  }
`;
