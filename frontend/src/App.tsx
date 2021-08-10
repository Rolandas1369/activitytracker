import React from "react";
import "./App.css";

type NameTagProps = {
  name: string;
};

const NameTag = (props: NameTagProps) => {
  return <h1>{props.name}</h1>;
};

const App = () => <NameTag name="Rolandas" />;

export default App;
