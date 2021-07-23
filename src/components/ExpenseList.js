import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
  const expenses = [
    { id: 123, name: 'shopping', cost: 50 },
    { id: 123, name: 'holiday', cost: 500 },
    { id: 123, name: 'fuel', cost: 80 },
    { id: 123, name: 'shopping', cost: 50 },
  ];

  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
