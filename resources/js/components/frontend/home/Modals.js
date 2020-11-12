import React from "react";
import SignIn from "./Modals/SignIn";
import Register from "./Modals/Register";
import TermsModal from "./Modals/TermsModal";
import PrivacyModal from "./Modals/PrivacyModal";
function Index() {
    return (
        <>
            <SignIn></SignIn>
            <Register></Register>
            <TermsModal></TermsModal>
            <PrivacyModal></PrivacyModal>
        </>
    );
}

export default Index;
