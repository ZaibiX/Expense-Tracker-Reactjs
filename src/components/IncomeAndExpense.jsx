export default function IncomeAndExpense({income,expense}) {
  return (
    <div className="income-and-expense"
      style={{
        display: 'flex',
        backgroundColor: 'light-grey',
        // flexDirection: 'row',
        margin:"auto",
        // width:"50%",
        justifyContent:"space-evenly",
        alignItems:"center",
        gap:"auto",
        padding:"20px",
        fontSize:"larger"
        
      }}
    >
      <div style={{ }}>
        <h5 sstyle={{textAlign:"center"}}>Income</h5>
        <h5 style={{textAlign:"center"}}>{income}</h5>
      </div>
      <div className="vertical-line"></div>
      <div style={{ }}>
        <h5 style={{textAlign:"center"}}>Expense</h5>
        <h5 style={{textAlign:"center"}}>{expense}</h5>
      </div>
    </div>
  );
}
