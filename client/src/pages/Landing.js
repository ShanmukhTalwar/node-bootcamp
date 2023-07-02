import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/Testing'
import { Logo } from '../components'

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>job <span>Tracking</span> App</h1>
                    <p>
                        I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
                        bottle single-origin coffee chia. Aesthetic post-ironic venmo,
                        quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
                        narwhal.
                    </p>
                    <button className="btn btn-hero">
                        Login/Register
                    </button>
                    <img src={main} alt='job hunt' className="img main-img" />
                </div>
            </div>
        </Wrapper>
    )
}

export default Landing
