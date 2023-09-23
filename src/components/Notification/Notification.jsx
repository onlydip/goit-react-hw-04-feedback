import React from 'react';
import PropTypes from 'prop-types';
import { NotificationStyle } from './Notification.styled';


export default function Notification({ message }) {
  return <NotificationStyle>{message}</NotificationStyle>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
