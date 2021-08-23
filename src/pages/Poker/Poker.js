import React from 'react';
import {StyledPoker} from "./styled";

const Poker = () => {
    const start = () => {
        const suits = ['♥', '♦', '♣', '♠'];
        const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

        const countPlayers = 0;

        const deck = [];

        numbers.forEach(number => {
            suits.forEach(suit => {
                deck.push(number+suit)
            })
        })

        deck.forEach(card => console.log(card + "/n"))
    }

    start()

    return (
        <StyledPoker>

        </StyledPoker>
    );
};

export default Poker;
