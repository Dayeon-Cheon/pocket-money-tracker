const ExpenseForm = () => {
  const addExpense = (e) => {
    e.preventDefault();

    // const formData = new FormData(e.target);
    // const title = formData.get("title");
    // const content = formData.get("content");

    // if (!title.trim() || !content.trim()) {
    //   alert("제목과 내용을 모두 입력해 주세요.");
    //   return;
    // }

    // const newTodo = {
    //   id: crypto.randomUUID(),
    //   title,
    //   content,
    //   isDone: false,
    // };

    // setTodos((prevTodos) => [newTodo, ...prevTodos]);

    // e.target.reset();
  };

  return (
    <section>
      <form onSubmit={addExpense}>
        <div>
          <div>
            <label htmlFor="date">날짜</label>
            <input
              name="date"
              id="date"
              type="text"
              placeholder="YYYY-MM-DD"
            ></input>
            <label htmlFor="item">항목</label>
            <input
              name="item"
              id="item"
              type="text"
              placeholder="지출 항목"
            ></input>
            <label htmlFor="amount">금액</label>
            <input
              name="amount"
              id="amount"
              type="text"
              placeholder="지출 금액"
            ></input>
            <label htmlFor="description">내용</label>
            <input
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
