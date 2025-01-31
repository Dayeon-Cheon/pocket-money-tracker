import styled from "styled-components";
import { useEffect } from "react";

const MonthButton = styled.button`
  background-color: ${(props) => (props.$isSelected ? "blue" : "white")};
`;

const MonthSelector = ({ selectedMonth, setSelectedMonth }) => {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  useEffect(() => {
    localStorage.setItem("month", selectedMonth);
  }, [selectedMonth]);

  return (
    <section>
      <div>
        {months.map((month) => (
          <MonthButton
            key={month}
            $isSelected={selectedMonth === month}
            onClick={() => setSelectedMonth(month)}
          >
            {month}월
          </MonthButton>
        ))}
      </div>
    </section>
  );
};

export default MonthSelector;
