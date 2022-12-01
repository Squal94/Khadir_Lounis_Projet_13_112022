import React from "react";

/**
 * Component Transaction
 * @param {props} Data (reference,money,balance) hard input data in the user component.
 *
 * Component for displaying and formatting accounts data on the user page.
 */

const Transaction = (props) => {
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
        <div className="user__transaction__ContainerBtn">
          <button className="user__transaction__ContainerBtn__btn">
            View transactions
          </button>
        </div>
      </div>
    );
  }
};

export default Transaction;
