import React from 'react';
import CurFlags from './cur-flags';

const Currency = (props) => {
  const options = props.cur.map((e) => {
    const flag = CurFlags.currencies.find(cur => cur.code === e.base);
    return <option value={e.base}>{flag !== undefined? flag.emoji : null} {e.base}</option>
  });
  return (
    <div className="card__information">
      <label for="currency">{props.label}</label>
      <select name="currency" id="currency" onChange = {(e) => props.setChange(e.currentTarget.value)}>
        {options}
      </select>
    </div>
  )
}

export default Currency
