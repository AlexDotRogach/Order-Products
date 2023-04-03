import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { selectFilterValue } from "../../redux/selectors/selectFilterValue";
import { changeFilter } from "../../redux/actions/filterAction";
import { useDispatch, useSelector } from "react-redux";
import { filterValues } from "../../redux/selectors/types/types";

function FilterProducts() {
  const dispatch = useDispatch();

  return (
    <DropdownButton
      variant="outline-secondary"
      title="Тип"
      id="input-group-dropdown-1"
    >
      {Object.entries(filterValues).map(([key, value]) => {
        return (
          <Dropdown.Item key={key} onClick={() => dispatch(changeFilter(key))}>
            {value}
          </Dropdown.Item>
        );
      })}
    </DropdownButton>
  );
}

export default FilterProducts;
