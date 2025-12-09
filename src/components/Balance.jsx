import { useEffect, useState } from 'react';
import IncomeAndExpense from './IncomeAndExpense.jsx';
import NewTransaction from './NewTransaction.jsx';
import History from './History.jsx';
export default function Balance({ balance }) {
  // const [totalBalance, setTotalBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [historyArray, setHistoryArray] = useState([]);
  // [  { type: '', text: '', amount: '' },]
  let totalBalance = income - expense;
  return (
    <div
      style={{
        textAlign: 'left',
        width: '450px',
        margin: 'auto',
        padding: 8,

      }}
    >
      <h3>
        Your Balance <br /> {totalBalance}
      </h3>
      <IncomeAndExpense income={income} expense={expense} />
      <History
        historyArray={historyArray}
        setHistoryArray={setHistoryArray}
        setIncome={setIncome}
        setExpense={setExpense}
      />
      <NewTransaction
        totalBalance={totalBalance}
        setIncome={setIncome}
        setExpense={setExpense}
        setHistoryArray={setHistoryArray}
      />
    </div>
  );
}
