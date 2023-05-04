import React from "react";
import "./Users.css";

function Users() {
  return (
    <div className="bg-red-600">
      <div class="split left">
        <div class="centered">
          <h2>Jane Flex</h2>
          <p>Some text.</p>
        </div>
      </div>
      <div class="split right">
        <div class="centered">
          <h2>John Doe</h2>
          <p>Some text here too.</p>
        </div>
      </div>
    </div>
  );
}

export default Users;
