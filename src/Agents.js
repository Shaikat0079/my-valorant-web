import React from 'react';

const Agents = ({ gameCharacter }) => {
    const { displayName, developerName, abilities, backgroundGradientColors, role, displayIconSmall } = gameCharacter
    return (
        <div>
            <p>Agent Name: {displayName}</p>
        </div>
    );
};

export default Agents;