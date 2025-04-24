import type { ReactNode } from 'react';
import type { fildsTypes } from './filds_types';

type TFn = ({ fill }: { fill?: string }) => ReactNode;

export type InfoColumn = {
  text: string;
  prop: string;
  icon: TFn | null;
  type: fildsTypes;
  data?: any;
}