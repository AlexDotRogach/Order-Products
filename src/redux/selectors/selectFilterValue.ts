import { typeStateFilter } from "./types/types";
export const selectFilterValue = (state: typeStateFilter) => state.filter.value;
