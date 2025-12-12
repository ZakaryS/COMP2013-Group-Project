import { useNavigate, Link } from "react-router-dom";
export default function FormComponent({
  formData,
  handleOnSubmit,
  handleOnChange,
  currentPage,
  nextPage,
  postResponse,
  messageColor,
}) {
  const navigate = useNavigate();
  return (

    <div>

      <h1>
              { currentPage === "create-user" ? "Create a New User" : "Groceries App 🍎" }
      </h1>

      <form onSubmit={handleOnSubmit}>
        <label htmlFor="username">Username </label>
        <input
          type="text"
          name="username"
          id="username"
          value={formData.username}
          onChange={handleOnChange}
        />
        
        <label htmlFor="password">Password  </label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleOnChange}
        />
        
        <button>Submit</button>
      </form>

       
      {nextPage !== "" ? (
        <p> Not a member yet? Click <Link to={`/${nextPage}`}>here</Link> to join </p>  ) : ( <Link to="/">Back to Login Page</Link> )}
        
      <p style={{ color: messageColor }}>{postResponse}</p>


    </div>

  );
}
