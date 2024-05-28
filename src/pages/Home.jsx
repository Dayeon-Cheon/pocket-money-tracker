import ExpenseForm from "../components/ExpenseForm";
import MonthSelector from "../components/MonthSelector";
import MonthlyExpenseOverview from "../components/MonthlyExpenseOverview";

function Home({ selectedMonth, setSelectedMonth, expenses, setExpenses }) {
  return (
    <>
      {/* 지출 등록 컴포넌트 */}
      <ExpenseForm setExpenses={setExpenses} />
      {/* 월 선택 컴포넌트 */}
      <MonthSelector
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      {/* 지출 리스팅해서 보여주는 컴포넌트 */}
      <MonthlyExpenseOverview
        selectedMonth={selectedMonth}
        expenses={expenses}
      />
    </>
  );
}

export default Home;
