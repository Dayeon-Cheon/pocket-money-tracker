import { useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateExpense, removeExpense } from "../redux/slices/expensesSlice";

const Detail = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();
  const expense = location.state;

  const dateInputRef = useRef(expense.date);
  const itemInputRef = useRef(expense.item);
  const amountInputRef = useRef(expense.amount);
  const descriptionInputRef = useRef(expense.description);

  const handleUpdateExpense = (e) => {
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

    const updatedExpense = {
      id: expense.id,
      date,
      item,
      amount,
      description,
    };

    dispatch(updateExpense(updatedExpense));

    navigate(-1);
  };

  const handleDeleteExpense = () => {
    dispatch(removeExpense(expense.id));

    navigate(-1);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section>
      <div>
        <label htmlFor="date">날짜</label>
        <input
          ref={dateInputRef}
          id="date"
          type="text"
          defaultValue={expense.date}
        ></input>
        <input
          ref={itemInputRef}
          id="item"
          type="text"
          defaultValue={expense.item}
        ></input>
        <input
          ref={amountInputRef}
          id="amount"
          type="text"
          defaultValue={expense.amount}
        ></input>
        <input
          ref={descriptionInputRef}
          id="description"
          type="text"
          defaultValue={expense.description}
        ></input>
      </div>
      <div>
        <button onClick={handleUpdateExpense}>수정</button>
        <button onClick={handleDeleteExpense}>삭제</button>
        <button onClick={handleGoBack}>뒤로 가기</button>
      </div>
    </section>
  );
};

export default Detail;
