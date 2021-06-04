import React from 'react'
import { TableData } from "../../Data/Data"

function BalanceTable() {
    return (
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr className="table-header">
                        <th>Payment ID</th>
                        <th>Source</th>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {TableData.map((D) => (
                        <tr key={D.paymentid} className="hover-table-content">
                            <td>{D.paymentid}</td>
                            <td>{D.Source}</td>
                            <td>{D.date}</td>
                            <td>{D.Amount}</td>
                        </tr>
                    ))}
                    <tr>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BalanceTable
