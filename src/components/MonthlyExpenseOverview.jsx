import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const MonthlyExpenseOverview = () => {
  const selectedMonth = useSelector((state) => state.expenses.selectedMonth);
  const expenses = useSelector((state) => state.expenses.expenses);

  return (
    <ExpenseListSection>
      <div>
        <ul>
          {expenses
            .filter(
              (expense) =>
                parseInt(expense.date.substring(5, 7), 10) === selectedMonth
            )
            .map((expense) => (
              <ExpenseListItem key={expense.id}>
                <ExpenseItemLink to={`/detail/${expense.id}`} state={expense}>
                  <ExpenseLeftDiv>
                    <ExpenseDateSpan>{expense.date}</ExpenseDateSpan>
                    <ExpenseContentSpan>
                      {expense.item}
                      &nbsp;:&nbsp;
                      {expense.description.length > 50
                        ? expense.description.slice(0, 47) + "..."
                        : expense.description}
                    </ExpenseContentSpan>
                  </ExpenseLeftDiv>
                  <ExpenseRightDiv>
                    <span>{expense.amount}&nbsp;원</span>
                  </ExpenseRightDiv>
                </ExpenseItemLink>
              </ExpenseListItem>
            ))}
        </ul>
      </div>
    </ExpenseListSection>
  );
};

export default MonthlyExpenseOverview;

const ExpenseListSection = styled.section`
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: white;
`;

const ExpenseListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const ExpenseItemLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-radius: 6px;
  background-color: #f6f7f7;
  text-decoration-line: none;
  color: black;
  &:hover {
    background-color: orange;
  }
`;

const ExpenseLeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ExpenseDateSpan = styled.span`
  font-size: 14px;
`;

const ExpenseContentSpan = styled.span`
  font-weight: bold;
`;

const ExpenseRightDiv = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
`;
