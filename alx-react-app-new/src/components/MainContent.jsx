import React from 'react';
import UserProfile from './UserProfile';

function MainContent() {
    return (
        <main style={{ backgroundColor: '#e8f0fe', padding: '20px', minHeight: '60vh' }}>
            <UserProfile name="Luzuko" age="3" bio="Abright and loving soul who brings joy everywhere she goes." />
            <UserProfile name="Bianca" age="22" bio="Creative visionary." />
        </main>
    );
}

export default MainContent;