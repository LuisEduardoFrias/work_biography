import  { fildsTypes } from './types/filds_types';
import type { ReactElement } from 'react';
import Text from '../../svgs/text';
import Boxes from '../../svgs/boxes';
import Number from '../../svgs/number';
import CheckBox from '../../svgs/checkBox';
import MultiCheckBox from '../../svgs/multi_checkBox';
import Select from '../../svgs/select';
import DateTime from '../../svgs/date_time';
import Date from '../../svgs/date';
import Time from '../../svgs/time';
import File from '../../svgs/file';

export default function ShowIcon({ type, fill }: { type: keyof fildsTypes, fill: string }) {
  const icons: { [key: string]: () => ReactElement } = {
    text: () => <Text fill={fill} />,
    boxes: () => <Boxes fill={fill} />,
    number: () => <Number fill={fill} />,
    checkBox: () => <CheckBox fill={fill} />,
    multi_checkBox: () => <MultiCheckBox fill={fill} />,
    select: () => <Select fill={fill} />,
    datetime: () => <DateTime fill={fill} />,
    date: () => <Date fill={fill} />,
    time: () => <Time fill={fill} />,
    file: () => <File fill={fill} />,
  }

  return icons[type as string]();
}




