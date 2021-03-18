import React from 'react'
import { useObserver, useLocalStore, Observer } from 'mobx-react';
import { decorator } from '@store'

import style from './index.less'

function Profile(){
    const { count, price, add, setValue } = useLocalStore(()=> decorator );
    function* generator() {
        yield 'status one'         // yield 表达式是暂停执行的标记
        return 'hello world'
    }
    const iterator = generator();
    const x = iterator.next()
    return (
        <Observer>{
            () => (
                <div className={style.profile} onClick={setValue}>
                    {`${price} + ${count} = `}{add}
                </div>
            )
        }
        </Observer>

    )
}


export default Profile
