export function LoginPage() {
  return (
    <>
      <h1>Login Page</h1>
      <form>
        <label>
          Username:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
        <div />
        <label>
          Password:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}