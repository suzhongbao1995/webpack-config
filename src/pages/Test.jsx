import React from 'react';
import style from './test.less'

export default function Test({ name }) {
  console.log(name, 'name')
  return <div className={style.test}>{name || 222}</div>
}
