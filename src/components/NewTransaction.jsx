import { useState } from 'react';
export default function NewTransaction({
  setExpense,
  setIncome,
  income,
  expense,
  setHistoryArray,
}) {
  const [formData, setFormData] = useState({ text: '', amount: '' });

  function handleChange(e) {
    // console.log(e.target.value)
    const name = e.target.name;
    setFormData((pre) => {
      return {
        ...pre,
        [name]: e.target.value,
      };
    });

    // console.log(e.target.value)
  }

  function handleSubmit(e) {
    const text = formData.text;
    const amount = formData.amount;
    e.preventDefault();
    // console.log(formData.text, formData.amount);
    if (formData.text == '' || formData.amount == '') {
      alert('Fields cannot be empty');
      return;
    }
    // setTotalBalance(amount);
    if (formData.amount[0] == '-') {
      const expenseAmount = Number(amount.slice(1));
      console.log('from expense ', expenseAmount);
      setExpense((pre) => pre + expenseAmount);

      setHistoryArray((pre) => {
        return [
          ...pre,
          {
            type: 'expense',
            amount,
            text,
          },
        ];
      });

      // setTotalBalance(income - expenseAmount);
    } else {
      const incomeAmount = Number(amount);
      setIncome((pre) => pre + incomeAmount);

      setHistoryArray((pre) => {
        return [
          ...pre,
          {
            type: 'income',
            amount,
            text,
          },
        ];
      });

      // setTotalBalance(incomeAmount - expense);
    }
    setFormData({ text: '', amount: '' });
    return;
  }
  return (
    <div>
      <h3>Add New Transaction</h3>
      <hr />
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label htmlFor="text">Text</label>
        <br />
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
          placeholder="Enter text"
          style={{
            width: '300px',
            height: '25px',
            margin: 8,
            padding: 4,
          }}
        />
        <br />
        <label htmlFor="amount">
          Amount <br /> (Negative-expense, Positive-income)
        </label>
        <br />
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Enter amount"
          style={{
            width: '300px',
            height: '25px',
            margin: 8,
            padding: 4,
          }}
        />
        <br />
        <input
          style={{
            display: 'block',
            margin: '20px auto',
            backgroundColor: '#2baffb',
            border: 'none',
            width: '300px',
            height: '30px',
            padding: 4,
            cursor: 'pointer',
            color:"white"
          }}
          type="submit"
          value="Add Transaction"
        />
      </form>
    </div>
  );
}
