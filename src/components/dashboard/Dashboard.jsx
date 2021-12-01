import React from 'react';
import AddTask from '../tasks/AddTask';
import Tasks from '../tasks/Tasks';

const Dashboard = () => {
    return (
        <>
            <AddTask /><p/><p/>
            <Tasks />
        </>
    );
};

export default Dashboard;