import React,{ useEffect, useState } from 'react';

import { Button } from "antd"
import {scenario} from '../../datas/game_1'
import styles from './Game.module.scss';
import Timer from './Timer/Timer';

const Game = () => {
    // Define state
    const [view, setView] = useState({})
    const [time, setTime] = useState(Date.now() + 180000)

    // On loading page, we get the first view
    useEffect(() => {
        updateView(0)
    }, [])

    // On change view, we see if there are "bonus" or "malus"
    useEffect(() => {
        view.actions?.map((action) => {
        if (action.type === "bonus") { // On bonus, we add 10sec to the timer
            setTime(time+10000);
        } else if (action.type === "malus") { // On malus, we remove 10sec to the timer
            setTime(time-10000);
        }
        })
    }, [view])

    // On click a button, the corresponding view is displayed by his ID
    const updateView = (id) => {
        scenario.views.findIndex(view => {
        if (view.id === id) {
            setView(view)
        }
        })
    }

    // HTML to render
    return(
    <div className={styles.Game} data-testid="Game">
        <img src={scenario.bg} alt={scenario.title} className={styles.bg}/>
        <h1 className="text-center">{scenario.title}</h1>
        <p className="text-center">{view.text}</p>
        <div className="d-flex flex-column">
        {view.actions?.map((action,key) => {
            return <Button key={key} onClick={() => updateView(action.goToView)} className={`${styles.btn} mb-3`}>{action.text}</Button>
            })}
        </div>
        <Timer actualDate={time} />
    </div>
)};

Game.propTypes = {};

Game.defaultProps = {};

export default Game;
