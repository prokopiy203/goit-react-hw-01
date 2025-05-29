import capitalizeFirstLetter from "../../helpers/capitalize-first-letter";
import style from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <div>
      <table className={style.wrapperTable}>
        <thead>
          <tr>
            <th className={style.tittle}>Type</th>
            <th className={style.tittle}>Amount</th>
            <th className={style.tittle}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr className={style.sectionRow} key={item.id}>
              <td className={style.section}>
                {capitalizeFirstLetter(item.type)}
              </td>
              <td className={style.section}>{item.amount}</td>
              <td className={style.section}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
