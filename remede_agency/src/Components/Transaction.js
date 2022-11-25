import React from "react";

const Transaction = (props) => {
  //   const [referenceT, setreferenceT] = useState("");
  //   const [moneyT, setmoneyT] = useState("");
  //   const [balanceT, setbalanceT] = useState("");

  //   useEffect(() => {
  //     setreferenceT(reference);
  //     setmoneyT(money);
  //     setbalanceT(balance);
  //   }, [balance, money, reference]);
  //   console.log(reference?.reference);
  //   console.log(money?.money);
  //   console.log(balance?.balance);

  if (props) {
    return (
      <div className="user__transaction__Container">
        <div className="user__transaction__Container__info">
          <p className="user__transaction__Container__info--ref">
            {props.reference}
          </p>
          <p className="user__transaction__Container__info--money">
            {props.money}
          </p>
          <p className="user__transaction__Container__info--balance">
            {props.balance}
          </p>
        </div>
        <div>
          <button className="user__transaction__Container__btn">
            View transactions
          </button>
        </div>
      </div>
    );
  }
};

export default Transaction;
