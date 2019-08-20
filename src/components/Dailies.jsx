import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

import Daily from './Daily';

const Container = styled.div`
  background-color: #72e0d1;
  display: flex;
  flex-direction: column;
`;

// Component for daily weather forecast
// TODO: Replace hardcoded information with data from props
const Dailies = ({ weather }) => {
  let showWeather;
  const { daily } = weather;

  if (weather) {
    showWeather = (
      <Container>
        <h2>Coming days</h2>
        {
          daily.data.map((dayWeather) => (
            <Daily weather={dayWeather} />
          ))
        }
      </Container>
    );
  } else {
    showWeather = (
      <p>loading...</p>
    );
  }
  return (
    showWeather
  );
};

Dailies.propTypes = {
  weather: PropTypes.objectOf(PropTypes.object),
};

Dailies.defaultProps = {
  weather: false,
};

export default Dailies;
