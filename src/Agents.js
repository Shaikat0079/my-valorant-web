import React, { useEffect, useState } from 'react';

const Agents = ({ gameCharacter }) => {
    const { displayName, developerName, backgroundGradientColors, role, fullPortrait } = gameCharacter
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
            if (seconds >= 3) {
                setSeconds(seconds === 0);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [seconds])
    const agentColor = {
        backgroundColor: `#${backgroundGradientColors[seconds]}`
    }
    console.log(role.displayName)
    return (
        <div >
            <div style={agentColor} className="card w-96 glass">
                <figure><img src={fullPortrait} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{displayName}</h2>
                    <p >{role.displayName}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">{developerName}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Agents;