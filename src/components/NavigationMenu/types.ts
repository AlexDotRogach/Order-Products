export interface INavigationMenuProps {
  handleClose: () => void;
  show: boolean;
}

export type changeActiveParam = {
  isActive: boolean;
};

export type changeActiveFn = ({ isActive }: changeActiveParam) => string;
