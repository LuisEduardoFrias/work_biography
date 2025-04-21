import type { ReactNode } from 'react';
import type { fildsTypes } from './filds_types';

export type InfoColumn = {
  text: string;
  prop: string;
  icon: (() => ReactNode) | null;
  type: fildsTypes;
  data?: any;
}