export default function SingIn() {
    return (
      <>
        <section className="form-login">
                <div className="box">
                    <h1 className="title">Sign in</h1>
                    <form className="form" action="#">
                        <input type="text" placeholder="Username"></input>
                        <input type="password" placeholder="Password"/>
                        <div className="forgout">
                            <p><a href="#">Forguot Password?</a></p>
                            <p><a href="#">Sign In</a></p>
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>
        </section>
      </>
    )
}

