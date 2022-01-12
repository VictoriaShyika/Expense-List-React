import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expense = [
    {
      id: 'e1',
      title: 'Apple',
      amount: 6.10,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'Lemon',
      amount: 2.45,
      date: new Date(2021, 2, 12),
    },
    {
      id: 'e3',
      title: 'Potato',
      amount: 4.20,
      date: new Date(2020, 2, 28),
    },
    {
      id: 'e4',
      title: 'Grape',
      amount: 10.80,
      date: new Date(2021, 5, 12),
    },
  ]
  return (
    <div className="App">
      <ExpenseItem 
      title={expense[0].title} 
      amount={expense[0].amount} 
      date={expense[0].date}
     ></ExpenseItem> 
           <ExpenseItem 
      title={expense[1].title} 
      amount={expense[1].amount} 
      date={expense[1].date}
     ></ExpenseItem> 
           <ExpenseItem 
      title={expense[2].title} 
      amount={expense[2].amount} 
      date={expense[2].date}
     ></ExpenseItem> 
           <ExpenseItem 
      title={expense[3].title} 
      amount={expense[3].amount} 
      date={expense[3].date}
     ></ExpenseItem> 

    </div>
  );
}

export default App;
