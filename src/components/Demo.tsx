import React, {FC} from 'react';

// 手抜き -> propsは、hooksのtypeを参照するのがベストである
type Props = {
    myName: string
}
export const Demo: FC<Props> = ({myName}) => <>私の名前は、{myName}</>
