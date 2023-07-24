import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers, fetchSingleUser } from "./actions";
import Card from "./components/Card";
import CardInitial from "./components/CardInitial";
import "./App.css";

function App(props) {
  const { total, userData, fetchUsers, fetchSingleUser } = props;

  useEffect(() => {
    fetchUsers();
    let html = "";
    for (let i = 1; i <= total; i++) {
      html += `<button key=${i} id='${i}'>${i}</button>`;
    }
    document.getElementById("buttons").innerHTML = html;
  }, [fetchUsers, total]);

  const handleButtonClick = (event) => {
    if(event.target.id>=0){
        fetchSingleUser(event.target.id);
    }
  };

  return (
    <div>
        <h1 className="heading">Redux Store + API Mini project</h1>
      <div id="info">
        {userData ?
         (<Card user={userData} />)
        :(<CardInitial/>)
        }
      </div>
      <div id="buttons" onClick={handleButtonClick}>
        {/* {users.map((user) => (
            <button key={user.id} onClick={() => fetchSingleUser(user.id)}>
            {user.id}
            </button>
        ))} */}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  total: state.total,
  users: state.users,
  userData: state.userData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchSingleUser: (id) => dispatch(fetchSingleUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
