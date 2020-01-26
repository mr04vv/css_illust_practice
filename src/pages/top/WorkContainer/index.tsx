import React from 'react';
import { WorkWrapper } from '../style';
import { Image, ImageContainer } from './style';
import { ButtonWrapper } from '../../../components/CustomButton/style';
import { CustomLink } from '../../../components/style';
import { CommonOrangeButton } from '../../../components/CustomButton';

interface Props {
  path: string;
  workName: string;
  imageUrl?: string;
}

export const WorkContainer: React.SFC<Props> = ({ path, workName, imageUrl }) => (
  <WorkWrapper>
    <ImageContainer>
      <Image src={imageUrl} />
    </ImageContainer>
    <ButtonWrapper>
      <CustomLink to={path}>
        <CommonOrangeButton>{workName}</CommonOrangeButton>
      </CustomLink>
    </ButtonWrapper>
  </WorkWrapper>
);
