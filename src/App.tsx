import { useCallback, useEffect, useState } from "react";

import { Monster } from "./shared/types";

import "./App.css";
import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchfield, setSearchfield] = useState<string>("");

  const fetchMonsters = useCallback(async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Someting went wrong");
      }
      const data = await response.json();
      setMonsters(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchMonsters();
  }, [fetchMonsters]);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    setSearchfield(event.currentTarget.value);
  };

  const filteredMonsters = monsters.filter((monster: Monster) => {
    monster.name.toLowerCase();
    return monster.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
