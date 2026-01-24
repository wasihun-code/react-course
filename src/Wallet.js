import { useEffect } from "react";

function Walletdisplay(props) {
    if (props.balance === 0)
        return {
            type: 'div',
            props: {
                style: {color: 'gray' },
                children: 'Connect Wallet',
            },
        }
    return {
        type: 'div',
        props: {
            style: {color: 'black' },
            children: props.balance + ' ETH',
        },
    };
}

export default Walletdisplay;
