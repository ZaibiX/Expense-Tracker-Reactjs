import '../styles/history.css';
export default function History({
  historyArray,
  setHistoryArray,
  setIncome,
  setExpense,
}) {

  function handleDelete(ind) {
    console.log(2);
    const obj = historyArray[ind];
    if (obj.type == 'expense') {
      setExpense((pre) => pre + Number(obj.amount));
    } else {
      setIncome((pre) => pre - Number(obj.amount));
    }
    setHistoryArray((pre) => {
      return pre.filter((val, i) => i != ind);
    });
  }
  return (
    <div>
      <h3>History</h3>
      <hr />

      <div>
        {historyArray.map((item, i) => {
          return (
            <div key={i} className="each-box">
              <button
                className="del-btn"
                onClick={() => {
                  handleDelete(i);
                }}
              >
                X
              </button>
              <div  className="each-item">
                <p className="text">{item.text}</p>

                <div className="amount-container">
                  <p className="amount">{item.amount}</p>
                  <div
                    style={{
                      backgroundColor: item.type == 'expense' ? 'red' : 'green',
                      width: '5px',
                    }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
