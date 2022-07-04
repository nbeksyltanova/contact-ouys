import React from "react";
import Comments from "../comments/Comments";
const ComemtPages = () => {
  return (
    <div className="bg-comment ">
      <div className="com">
        <h1 className="h1">
          Отзывы наших покупателей
          <span>
            {" "}
            <img width={90} src="/hb-removebg-preview.png" />
          </span>
        </h1>
      </div>
      <Comments commentsUrl="http://localhost:3000/comt" currentUserId="1" />
    </div>
  );
};

export default ComemtPages;
