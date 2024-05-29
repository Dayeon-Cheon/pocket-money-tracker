import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedMonth } from "../redux/slices/expensesSlice";

const MonthButton = styled.button`
  background-color: ${(props) => (props.$isSelected ? "blue" : "white")};
`;

const MonthSelector = () => {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const selectedMonth = useSelector((state) => state.expenses.selectedMonth);

  const dispatch = useDispatch();
  const handleMonthChange = (month) => {
    dispatch(setSelectedMonth(month));
  };

  return (
    <section>
      <div>
        {months.map((month) => (
          <MonthButton
            key={month}
            $isSelected={selectedMonth === month}
            onClick={() => handleMonthChange(month)}
          >
            {month}월
          </MonthButton>
        ))}
      </div>
    </section>
  );
};

export default MonthSelector;
