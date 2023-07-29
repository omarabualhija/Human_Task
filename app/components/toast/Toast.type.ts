export type Iprops = {
  txt: string;
  position?: 'top' | 'bottom' | 'center';
  duration?: number;
};
export type ItoastRef = {
  show: (props: Iprops) => void;
};
