import React,{useEffect, useState} from "react";

function ExpensesList({ expensesDetails }) {
  const [anoExercicio, setAnoExercicio] = useState('2019')
  const [selectYears, setSelectYears] = useState([]);

  const getAnoAtual = () => {
    return new Date().getFullYear().toString();
  };

  const handleSelectedOption = e => {
    setAnoExercicio(e.target.value);
    fetchExpensesByYear(anoExercicio)
  };

  const fetchExpensesByYear = year => {

  }

  useEffect(() => {
    const currentYear = getAnoAtual()
    let startYear = 2005;
    const years = []
    while (startYear <= currentYear) {
      years.push(startYear++);
    }
    setSelectYears(years)
  },[])

  return (
    <div className="tile is-child box">
      <p className="title">Despesas</p>
      <div className="field">
        <div className="has-icons-left control">
          <div className="select">
            <select
                onChange={handleSelectedOption}
                value={anoExercicio}
            >
              {selectYears.map(year => (
                  <option value={year} key={year}>
                    {year}
                  </option>
              ))}
            </select>
          </div>
          <div className="icon is-small is-left">
            <i className="fas fa-file-invoice-dollar"></i>
          </div>
        </div>
      </div>
      <table className="table is-striped is-fullwidth is-narrow">
        <thead>
          <tr>
            <th>Data do Documento</th>
            <th>Tipo de Despesa</th>
            <th>Tipo de Documento</th>
            <th>Fornecedor</th>
            <th>Valor do Documento</th>
            <th>Valor Líquido</th>
          </tr>
        </thead>
        <tbody>
          {expensesDetails.map(expense => {
            return (
              <tr key={expense.codDocumento}>
                <td>{`${expense.mes}/${expense.ano}`}</td>
                <td>{expense.tipoDespesa}</td>
                <td>
                  {expense.tipoDocumento === "Nota Fiscal Eletrônica"
                    ? "NFE"
                    : expense.tipoDocumento}
                </td>
                <td>{expense.nomeFornecedor}</td>
                <td>{`R$ ${expense.valorDocumento}`}</td>
                <td>{`R$ ${expense.valorLiquido}`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ExpensesList;
