import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export function Statistics({title, good, neutral, bad, total, positivePercentage, children}) {
  return (
    <div className={css.container}>
      <h2 className={css.title}>{title}</h2>
      {good === 0 && neutral === 0 && bad === 0 ? children : (<>
      <p className={css.statistic}>Good: <span className={css.value}>{good}</span></p>
      <p className={css.statistic}>Neutral: <span className={css.value}>{neutral}</span></p>
      <p className={css.statistic}>Bad: <span className={css.value}>{bad}</span></p>
      <p className={css.statistic}>Total: <span className={css.value}>{total}</span></p>
      <p className={css.statistic}>Positive feedback: <span className={css.value}>{positivePercentage}</span>%</p>
      </>)}
    </div>
  )
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
}