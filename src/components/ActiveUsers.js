import {useState} from "react";

const ActiveUsers = () => {
    const [users, setUsers] = useState([]);

    const onsubmit = (event) => {
        event.preventDefault();
        setUsers([
            ...users, {
                userId: event.target.userId.value,
                email: event.target.email.value
            }]);
        event.target.reset();
    };


    return (
        <div>
            <h1>이메일 리스트...</h1>
            <form onSubmit={onsubmit}>
                <input placeholder="계정명" type="text" name="userId"/>
                <input placeholder="이메일" type="text" name="email"/>
                <button type="submit">입력</button>
            </form>
            <ul>
                {users.map((user, index) => <li key={index}>userId:{user.userId}, email: {user.email}</li>)}
            </ul>
            <h3>유저수 : {users.length}</h3>
        </div>
    );

};

export default ActiveUsers