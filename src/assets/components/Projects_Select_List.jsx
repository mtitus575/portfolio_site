import { useState } from "react";

function SelectionList({ onSelect }) {
  return (
    <ul id="prject-select" className="flex bg-nav">
      <li id="all-btn" onClick={() => onSelect("all")}>All</li>
      <li id="websites-btn" onClick={() => onSelect("website")}>Websites</li>
      <li id="apps-btn" onClick={() => onSelect("apps")}>Apps</li>
      <li id="games-btn" onClick={() => onSelect("games")}>Games</li>
    </ul>
  );
}
export default SelectionList;
