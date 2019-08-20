import React, { useState, useEffect } from 'react';
import Friend from './Friend';
import axiosWithAuth from '../utils/axiosWithAuth';

const FriendsList = props => {
  const [friends, setFriends] = useState([]);
  const [newFriend, setNewFriend] = useState({ name: '', age: undefined, email: '' })
  
  useEffect(() => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(response => {
        setFriends(response.data)
      })
      .catch(error => console.log(error.response))
  });

  const handleChange = event => {
    setNewFriend({
      ...newFriend, [event.target.name]: event.target.value
    })
  }

  const submitUserInfo = event => {
    event.preventDefault();
    axiosWithAuth()
      .post('http://localhost:5000/api/friends', newFriend)
      .then(response => console.log(response))
      .catch(error => console.log(error.response))
  };

  return (
    <div>
      <h3>Here are a list of your friends:</h3>
      {friends.map((friend, index) => (
        <Friend friend={friend} key={index} />
      ))}
      <div className="friend-application">
        <form>
          <input 
            className="input-field"
            type='text'
            placeholder="Please enter your full name."
            name='name'
            value={ newFriend.name }
            onChange={ handleChange }
          />
          <input 
            className="input-field"
            type='text'
            placeholder="Please enter your age."
            name='age'
            value={ newFriend.age }
            onChange={ handleChange }
          />
          <input 
            className="input-field"
            type='text'
            placeholder="Please enter your email address."
            name='email'
            value={ newFriend.email }
            onChange={ handleChange }
          />
        <button className="btn login-btn" onClick={ submitUserInfo }>Submit Info</button>
      </form>
      </div>
    </div>
  )
}

export default FriendsList; 