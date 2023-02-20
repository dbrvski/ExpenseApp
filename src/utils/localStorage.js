export const saveLocalStorage = (data) => {
  localStorage.setItem("expenses", JSON.stringify(data));
};

export const loadLocalStorage = () => {
  const localSt = JSON.parse(localStorage.getItem("expenses"));
  const localStDate = localSt?.map((expense) => {
    return { ...expense, date: new Date(expense.date) };
  });
  return localStDate;
};
