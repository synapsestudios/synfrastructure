import React from 'react';
import PropTypes from 'prop-types';

function Icon({ width, height }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width || '24'} height={height || '24'} viewBox="0 0 24 24">
      <path d="M8.8 14.1H2.1V22H10v-7.9H8.8zm-4.7 5.8V16H8v3.9H4.1zM7 4.1v3.8h2.9v2H2.1v-2H5V4.1H2.1v-2h7.8v2M21.9 4.1v-2h-7.8v7.8h7.8v-2h-5.8V4.1M19.9 14.1h-5.8v7.8h2v-5.8h3.8v5.8h2v-7.8" />
    </svg>
  );
}

Icon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Icon;
