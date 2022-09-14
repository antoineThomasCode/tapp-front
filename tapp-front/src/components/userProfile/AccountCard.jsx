import React from "react";
import '../userProfile/AccountCard.scss'
import '../Generic/Button.scss'

function AccountCard ({titleAccount, amountAccount, amountDescription,viewTransactionEvent}) {

    return (
        <section className="accountCard">
            <h3>{titleAccount}</h3>
            <p className="amountAccount">$ {amountAccount}</p>
            <p>{amountDescription}</p>
            <button onClick={viewTransactionEvent} className='button'>View transactions</button>
        </section>
    )
}
export default AccountCard