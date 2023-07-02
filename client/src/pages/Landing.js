import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'

const Landing = () => {
  return (
    <div>
        <main>
            <nav>
                <img src={logo} alt='jobify' className='logo'/>
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>job <span>Tracking</span> App</h1>
                    <p>
                    Write the following inside the 'emmet.includeLanguages' tag. 
                    Otherwise, paste the whole statement. 
                    "emmet.includeLanguages"
                    </p>
                    <button className="btn btn-hero">
                        Login/Register
                    </button>
                    <img src={main} alt='job hunt' className="img main-img"/>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Landing
