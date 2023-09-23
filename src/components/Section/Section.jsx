import React from 'react';
import PropTypes from 'prop-types';
import { SectionStyle, SectionContainer } from './Section.styled';



export default function Section({ title, children }) {
  return (
    <SectionContainer>
      <SectionStyle>{title}</SectionStyle>
      {children}
    </SectionContainer>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
