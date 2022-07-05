import React from "react";
import ReactDOM from "react-dom";
import profile1 from "./images/boy-pic1.jpg"
import profile2 from "./images/boy-pic2.jpg"
import profile3 from "./images/girl-pic1.jpg"
import SingleComment from "./SingleComment";
import UserCard from "./UserCard";

const App = () => {
    return(
        <div className="ui comments">
            <UserCard name="Alex">
                <SingleComment name="Alex" date="Today at 5:00pm" text="It's amazing" picture={profile1} />
            </UserCard>
            <UserCard name="Jack">
                <SingleComment name="Jack" date="Today at 6:00pm" text="Great job" picture={profile2} />
            </UserCard>
            <UserCard name="Sarah">
                <SingleComment name="Sarah" date="Today at 7:00pm" text="Thanks..." picture={profile3} />
            </UserCard>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);