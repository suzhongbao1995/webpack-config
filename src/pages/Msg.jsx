import React, { useEffect } from 'react';
import { what_are_doing, specifically_what_to_do } from './message'

import style from './index.less'

export default function Msg() {
  useEffect(() => {
    console.log(`I'M ${what_are_doing} ${specifically_what_to_do}`)
  }, [])
  return <div className={style.test}>{`I'M ${what_are_doing} ${specifically_what_to_do}`}</div>
}
