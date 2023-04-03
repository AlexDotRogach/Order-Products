import { typeSettingModal } from "../../components/ModalOrderDelete/types";

export type typeTotalPrice = {
  USD?: string;
  UAH?: string;
};

export type typeStateSettingModal = {
  settingModal: typeSettingModal;
  setSettingModal: (settingModal: typeSettingModal) => void;
};
