import React from "react";

function ExpensesList({ expensesDetails }) {
  return (
    <div className="tile is-child box">
      <p className="title">Despesas</p>
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
              <tr>
                <td>{`${expense.mes}/${expense.ano}`}</td>
                <td>{expense.tipoDespesa}</td>
                <td>
                  {expense.tipoDocumento === "Nota Fiscal Eletrônica"
                    ? "NFE"
                    : expense.tipoDocumento}
                </td>
                <td>{expense.nomeFornecedor}</td>
                <td>{expense.valorDocumento}</td>
                <td>{expense.valorLiquido}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ExpensesList;
