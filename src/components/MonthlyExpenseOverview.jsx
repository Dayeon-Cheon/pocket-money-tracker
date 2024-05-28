import { Link } from "react-router-dom";
import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const MonthlyExpenseOverview = () => {
  const { selectedMonth, expenses } = useContext(ExpenseContext);

  return (
    <section>
      <div>
        <ul>
          {expenses
            .filter(
              (expense) =>
                parseInt(expense.date.substring(5, 7), 10) === selectedMonth
            )
            .map((expense) => (
              <li key={expense.id}>
                <Link to={`/detail/${expense.id}`} state={expense}>
                  <span>{expense.date}</span>
                  <span>{expense.item}</span>
                  <span>{expense.amount}</span>
                  <span>
                    {/* 나중에 css로 구현? */}
                    {expense.description.length > 50
                      ? expense.description.slice(0, 47) + "..."
                      : expense.description}
                  </span>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default MonthlyExpenseOverview;
