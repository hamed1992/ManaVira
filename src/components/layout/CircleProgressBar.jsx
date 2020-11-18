import React from 'react'

function CircleProgressBar({is_show , classItem}) {
    return (
        is_show &&
        <div className="CircularProgress-indeterminate">
            <svg className={`CircularProgress-svg ${classItem}`} viewBox="22 22 44 44"><circle className="CircularProgress-circle CircularProgress-circleIndeterminate" cx="44" cy="44" r="20.2" fill="none" strokeWidth="3.6"></circle></svg>
        </div>
    )
}

export default CircleProgressBar
