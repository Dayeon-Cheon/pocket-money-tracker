import { useRef, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseForm = () => {
  const { setExpenses } = useContext(ExpenseContext);

  const dateInputRef = useRef("");
  const itemInputRef = useRef("");
  const amountInputRef = useRef("");
  const descriptionInputRef = useRef("");

  const handleSubmitExpense = (e) => {
    e.preventDefault();

    const date = dateInputRef.current.value;
    const item = itemInputRef.current.value;
    const amount = amountInputRef.current.value;
    const description = descriptionInputRef.current.value;

    if (!date.trim() || !item.trim() || !amount.trim() || !description.trim()) {
      alert("모든 항목을 입력해 주세요.");
      return;
    }

    const dateFormat = /^\d{4}-\d{2}-\d{2}$/;
    if (!date.match(dateFormat)) {
      alert("날짜 형식이 올바르지 않습니다.");
      return;
    }

    if (isNaN(amount)) {
      alert("금액은 숫자만 입력해 주세요.");
      return;
    }

    const newExpense = {
      id: crypto.randomUUID(),
      date,
      item,
      amount,
      description,
    };

    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);

    e.target.reset();
  };

  return (
    <section>
      <form onSubmit={handleSubmitExpense}>
        <div>
          <div>
            <label htmlFor="date">날짜</label>
            <input
              ref={dateInputRef}
              id="date"
              type="text"
              placeholder="YYYY-MM-DD"
            ></input>
            <label htmlFor="item">항목</label>
            <input
              ref={itemInputRef}
              id="item"
              type="text"
              placeholder="지출 항목"
            ></input>
            <label htmlFor="amount">금액</label>
            <input
              ref={amountInputRef}
              id="amount"
              type="text"
              placeholder="지출 금액"
            ></input>
            <label htmlFor="description">내용</label>
            <input
              ref={descriptionInputRef}
              name="description"
              id="description"
              type="text"
              placeholder="지출 내용"
            ></input>
          </div>
          <div>
            <button type="submit">저장</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ExpenseForm;
