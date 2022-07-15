const TabItem = ({ data, active, onChange }) => {
  return (
    <li
      data-filter="*"
      className={active === data?.key && "filter-active"}
      onClick={() => onChange(data?.key)}
    >
      {data?.name}
    </li>
  );
};

export default TabItem;
