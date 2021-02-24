import FilterListStyled from "./FilterListStyled";

const FilterList = ({ list, handleClickLi }) => {
  return (
    <FilterListStyled>
      <ul className="filter-list_ul">
        {list.map((item) => (
          <li
            className="filter-list_li"
            key={item.id}
            data-id={item.id}
            onClick={handleClickLi}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </FilterListStyled>
  );
};

export default FilterList;
