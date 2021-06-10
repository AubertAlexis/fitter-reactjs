import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserInfo.module.scss';

const UserInfo = () => (
  <div className={styles.UserInfo} data-testid="UserInfo">
    UserInfo Component
  </div>
);

UserInfo.propTypes = {};

UserInfo.defaultProps = {};

export default UserInfo;
