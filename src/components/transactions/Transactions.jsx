import PropTypes from 'prop-types';
import css from './Transactions.module.css'

export const TransactionHistory = ({items}) => {
    return (
        <table className={css.transaction_history}>
<thead>
    <tr>
        <th className={css.header_columns}>Type</th>
        <th className={css.header_columns}>Amount</th>
        <th className={css.header_columns}>Currency</th>
    </tr>
</thead>
<tbody>
        {items.map(item =>
        (<tr className={css.rows} key={item.id}>
            <td className={css.columns}>{item.type}</td>
            <td className={css.columns}>{item.amount}</td>
            <td className={css.columns}>{item.currency}</td>
        </tr>))}
</tbody>
</table>)
}
TransactionHistory.protoTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      
    })).isRequired,
}