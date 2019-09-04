import React, {useState, useEffect, useCallback, Fragment} from "react";
import axios from "axios";
import { baseUrl } from "../api";
import LoadImage from "../LoadImage/LoadImage";
import "./LawmakerDetails.css";
import ExpensesList from "../ExpensesList/ExpensesList";
import Details from "../Details/Details";
import LawmakerDetailsAvatar from "../LawmakerDetailsAvatar/LawmakerDetailsAvatar";
import { getAnoAtual } from "../util";

function LawmakerDetails(props) {
  const { id } = props.match.params;
  const [lawmaker, setLawmaker] = useState([]);
  const [lawmakerExpenses, setLawmakerExpenses] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const fetchLawmakerDetail = useCallback(async () => {
    setLoaded(false);

    await axios.get(`${baseUrl}/deputados/${id}`).then(res => {
      setLawmaker(res.data.dados);
    });
    setLoaded(true);
  }, [id]);

  const fetchLawmakerExpenses = useCallback(async () => {
        await axios
      .get(`${baseUrl}/deputados/${id}/despesas?ano=${getAnoAtual()}&ordem=DESC&ordenarPor=ano`)
      .then(res => {
        console.log(res.data)
        setLawmakerExpenses(res.data.dados);
      });
  }, [id]);

  useEffect(() => {
    fetchLawmakerDetail();
    fetchLawmakerExpenses();
  }, [fetchLawmakerDetail, fetchLawmakerExpenses]);
  const { ultimoStatus } = lawmaker;

  return (
    <section className="section">
      <div className="container">
        {loaded ? (
          <Fragment>
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <LawmakerDetailsAvatar lawmakerDetails={ultimoStatus} />
            </div>
            <div className="tile is-parent">
              <Details lawmaker={lawmaker} />
            </div>
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-12 is-vertical is-parent">
              <ExpensesList expensesDetails={lawmakerExpenses} />
            </div>
          </div>
        </Fragment>
        ) : (
          <LoadImage />
        )}
      </div>
    </section>
  );
}

export default LawmakerDetails;
