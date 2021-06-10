import Game from '../../components/Game/Game'
import PropTypes from 'prop-types';
import React from 'react';
import styles from './Room.module.scss';
const Room = () => (
  <div className={styles.Room} data-testid="Room">
    <Game></Game>
  </div>
);

Room.propTypes = {};

Room.defaultProps = {};

export default Room;
