import React, { useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import classes from './staff.module.css';


const URL = 'https://jsonplaceholder.typicode.com/users';

function Staff() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setUsers(data)
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <Header />

      <div style={{height: '500px'}}>
      <div className={classes.staff} >
        <table>
          <caption> Сотрудники </caption>
          <thead>
            <tr>
              <th> № </th>
              <th> ИМЯ </th>
              <th> Имя пользователя</th>
              <th> ЭЛ.ПОЧТА </th>
            </tr>
          </thead>
          {
            users.map((user, i) =>
              <tbody key={i} >
                <tr>
                  <th>  {user.id} </th>
                  <td> {user.name} </td>
                  <td> {user.username} </td>
                  <td> {user.email} </td>
                </tr>
              </tbody>
            )
          }
        </table>
        </div >
        </div>

      <Footer />
    </div>
  )
}

export default Staff
