import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";

const Profile = () => {
    const { user, isAuthenticated, isLoading} = useAuth0();

    if (isLoading) {
        return <div> LOOOOOADING </div>;
    }

    return (
        isAuthenticated && (
        <div>
            <JSONPretty data={user} />
            <img src={user.picture} />
        </div>
        )
    );
}

export default Profile;