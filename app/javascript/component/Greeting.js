import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setRandomGreeting } from "../redux/actions/greetingActions";

const Greeting = ({ randomGreeting, setRandomGreeting }) => {
  useEffect(() => {
    // Fetch a random greeting from your API endpoint
    fetch("/random_greeting")
      .then((response) => response.json())
      .then((data) => setRandomGreeting(data.message));
  }, [setRandomGreeting]);

  return (
    <div>
      <h1>Random Greeting</h1>
      <p>{randomGreeting}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  randomGreeting: state.greeting.randomGreeting,
});

export default connect(mapStateToProps, { setRandomGreeting })(Greeting);
