import React from 'react';
import {useQuery} from "@apollo/client";
import {FIND_TRADES} from "../../graphql/tradeQueries";
import {Trade} from "../../domain/trade";

const TradeMain = () => {
    const { loading, error, data } = useQuery<{trades: Trade[]}>(FIND_TRADES);

    console.log(data)
    return (
        <div>
            {/*{data?.trades.map()}*/}
        </div>
    )
}

export default TradeMain