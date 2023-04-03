export type typeSettingModal = {
  show: boolean;
  id: number;
};
//
export type typeSettingModalProps = {
  settingModal: typeSettingModal;
  closeModal: () => void;
};
