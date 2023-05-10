// import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div className={css.buttons}>
      <button type='button' className={css.button} onClick={() => onLeaveFeedback('good')}>Good</button>
      <button type='button' className={css.button} onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
      <button type='button' className={css.button} onClick={() => onLeaveFeedback('bad')}>Bad</button>
    </div>
  )
}