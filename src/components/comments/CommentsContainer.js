import CommentData from "../../data/comments.json";
import userIcon from "../../assets/userIcon.svg";

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentList comments={CommentData} />
    </div>
  );
};

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex m-3 p-3 shadow-sm bg-gray-200 rounded-lg">
      <img src={userIcon} alt="us er" className="h-8" />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

//Disclaimer --> Don't use index as keys
const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border  ml-5">
      <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentsContainer;
