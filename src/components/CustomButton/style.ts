import styled, { css } from 'styled-components';
import { Button } from '@material-ui/core';
import { FONT_COLOR_WHITE, GREEN_COLOR, BLUE_COLOR, ORANGE_COLOR } from '../../styles/color';

const ButtonStyle = css`
  width: 100%;
  border-radius: 30px;
  text-transform: unset;
  background: #fff;
  color: #fff;
  position: relative;
`;

export const CustomGreenButton: React.FC = styled(Button)`
  ${ButtonStyle}
  background-color: ${GREEN_COLOR};
  color: ${FONT_COLOR_WHITE};
  border: ${GREEN_COLOR} solid 2px;
  ::after {
    background-color: ${GREEN_COLOR};
  }
  :hover {
    color: ${GREEN_COLOR};
    background: rgba(255,255,255,0.08);
  }
`;

export const CustomBlueButton: React.FC = styled(Button)`
  ${ButtonStyle}
  background: ${BLUE_COLOR};
  border: ${BLUE_COLOR} solid 2px;
  :hover {
    color: ${BLUE_COLOR};
    background: rgba(255,255,255,0.08);
  }
  ::after {
    background-color: ${BLUE_COLOR};
  }
`;

export const CustomOrangeButton: React.FC = styled(Button)`
  ${ButtonStyle}
  background-color: ${ORANGE_COLOR};
  color: ${FONT_COLOR_WHITE};
  border: ${ORANGE_COLOR} solid 2px;
  :hover {
    background-color: ${ORANGE_COLOR};
    opacity: 0.8;
  }
`;

export const ButtonWrapper = styled.div`
  height: 5vh;
  width: 100%;
  color: white;
  margin: 12px auto;
  @media (max-width: 420px) {
    margin: 16px auto;
  }
  @media (max-width: 1024px) and (min-width: 421px) {
    width: 100%;
  }
`;
