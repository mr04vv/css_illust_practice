import React from 'react';
import { Container } from './style';
import { WorkContents, WorkContent } from '../../works/workContents';
import { WorkContainer } from './WorkContainer';

export const Top = () => (
  <Container>
    {WorkContents.map((work: WorkContent) => (
      <WorkContainer workName={work.name} path={work.path} imageUrl={work.imageUrl} />
    ))}
  </Container>
);
