import { useEffect, useState } from "react";
import "./FindFriendsPage.scss";

import { getAllUsers } from "../../API/API";

function FindFriendsPage() {
  const [input, setInput] = useState("");

  return (
    <section className="search-page">
      <div className="search-page__content">
        <span className="search-page__content__title">Find Your Friend</span>
        <div className="search-page__content__search-box">
          <input
            type="text"
            className="search-page__content__search-box__input"
            placeholder="search by username"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}

export default FindFriendsPage;
