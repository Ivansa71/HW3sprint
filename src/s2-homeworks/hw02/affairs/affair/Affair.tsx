import React from 'react'
import { AffairType } from '../../HW2'
import s from './Affair.module.css'
import s2 from '../Affairs.module.css'

type AffairPropsType = {
    affair: AffairType // add correct type
    deleteAffairCallback: (_id: number) => void // add correct type
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        // Call the deleteAffairCallback with the current affair's id
        props.deleteAffairCallback(props.affair._id)
    }

    const nameClass = s.name + ' ' + s2[props.affair.priority]
    const buttonClass = s.closeButton + ' ' + s2[props.affair.priority]
    const affairClass = s.affair + ' ' + s2[props.affair.priority]

    return (
        <div id={'hw2-affair-' + props.affair._id} className={affairClass}>
            <div id={'hw2-name-' + props.affair._id} className={nameClass}>
                {/*создаёт студент*/}
                {props.affair.name}
                {/**/}
            </div>
            <div id={'hw2-priority-' + props.affair._id} hidden>
                {props.affair.priority}
            </div>

            <button
                id={'hw2-button-delete-' + props.affair._id}
                className={buttonClass}
                onClick={deleteCallback}
            >
                {/*создаёт студент*/}
                X
                {/**/}
            </button>
        </div>
    )
}

export default Affair
