import React from 'react';
import { ButtonWrapper } from '../CustomButton/style';
import { CommonOrangeButton } from '../CustomButton';
import { CustomLink } from '../style';
import { HomeButtonContainer } from './style';

export const HomeButton = () => (
  <HomeButtonContainer>
    <ButtonWrapper>
      <CustomLink to="/">
        <CommonOrangeButton>もどる</CommonOrangeButton>
      </CustomLink>
    </ButtonWrapper>
  </HomeButtonContainer>
);
