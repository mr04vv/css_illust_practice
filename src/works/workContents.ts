import Osero from '../assets/images/osero.png';
import Bowl from '../assets/images/bowl.png';
import Koge from '../assets/images/kogepanman.png';

export interface WorkContent {
  path: string;
  name: string;
  imageUrl?: string;
}

export const WorkContents: WorkContent[] = [
  {
    path: '/works/bowl',
    name: '茶碗',
    imageUrl: Bowl,
  },
  {
    path: '/works/cat',
    name: 'ねこ',
    imageUrl: Osero,
  },
  {
    path: '/works/kogepanman',
    name: '焦げパンマン',
    imageUrl: Koge,
  },
];
