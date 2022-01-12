import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Apple",
      amount: 6.1,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Lemon",
      amount: 2.45,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Potato",
      amount: 4.2,
      date: new Date(2020, 2, 28),
    },
    {
      id: "e4",
      title: "Grape",
      amount: 10.8,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
