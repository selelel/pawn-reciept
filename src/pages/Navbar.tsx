import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import Button from "../component/buttons";

type prop = {
  children?: ReactNode;
};

function Nav({ children }: prop) {
  return (
    <>
      <div className="fixed right-2 top-5">
        <ul className="text-white/70 text-sm font-roboto flex gap-4 p-2">
          <li>
            <Link to={"/pawn-peek"}>
              <Button primary>Home</Button>
            </Link>
          </li>
          <li>
            <Link to={"/pawn-peek/about"}>
              <Button primary>About</Button>
            </Link>
          </li>
          <li>
            <Link to={"/pawn-peek/contact"}>
              <Button primary>Contact</Button>
            </Link>
          </li>
        </ul>
      </div>
      {children}
    </>
  );
}

export default Nav;
