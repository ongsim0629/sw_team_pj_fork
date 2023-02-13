import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>HomePage.jsx</h1>
      <Link to="/">
        <h1>페이지 이름</h1>
      </Link>
      <Link to="/members/test/write">
        <h1>일기 쓰러 가기</h1>
      </Link>
      <Link to="/diaries/id/date">
        <h1>10일</h1>
      </Link>
    </div>
  );
}

export default HomePage;
