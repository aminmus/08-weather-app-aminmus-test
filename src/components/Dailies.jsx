import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSun } from '@fortawesome/free-solid-svg-icons';

import Daily from './Daily';

const Container = styled.div`
  background-color: #72e0d1;
  display: flex;
  flex-direction: column;
`;

// Container for Daily components to show multiple day weather forecast
const Dailies = ({ weather }) => {
  return (
    <Container>
      <h2>Coming days</h2>
      {
        weather.data.map((dayWeather) => (
          // Using the Unix Timestamp of the day as key
          <Daily
            key={dayWeather.time.toString()}
            weather={dayWeather}
          />
        ))
      }
    </Container>
  );
};

Dailies.propTypes = {
  weather: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
};

Dailies.defaultProps = {
  weather: false,
};

export default Dailies;
