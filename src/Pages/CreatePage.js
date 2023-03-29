import React from 'react';
import App from "../App";
import AppNavBar from "../Component/AppNavBar";
import CreateUpdateForm from "../Component/CreateUpdateForm";

const CreatePage = () => {
    return (
        <div>
            <AppNavBar/>
            <CreateUpdateForm/>
        </div>
    );
};

export default CreatePage;