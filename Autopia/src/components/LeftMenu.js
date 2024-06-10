
import React from 'react';
import { Link } from 'react-router-dom';

export default function LeftMenu() {
  return (
    <div className="leftMenu">
      <ul>
        <li>
          <Link to="/">
            <i className="fa fa-user-plus" aria-hidden="true"></i> Customer Details Enter
          </Link>
        </li>
        <li>
          <Link to="/search">
            <i className="fa fa-file-text" aria-hidden="true"></i> Customer Search
          </Link>
        </li>
        <li>
          <Link to="/sendmessage">
            <i className="fa fa-envelope" aria-hidden="true"></i> Message
          </Link>
        </li>
        <li>
          <Link to="/quotation">
            <i className="fa fa-download" aria-hidden="true"></i> Download Quotation
          </Link>
        </li>
      </ul>
    </div>
  );
}
