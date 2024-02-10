import { NavBar } from '../components/NavBar';
import './HomePage.css'

export function HomePage() {
    return (
        <>
        <NavBar/>
        <div className="container">
                <div className="hero">
                    <h1>Welcome to Frozen Lakes Incorporated</h1>
                    <p>Your go-to destination for cutting-edge technology solutions</p>
                </div>

                <div className="feature">
                    <div className="feature-item">
                        <img src="/images/service1.jpg" alt="Service 1" />
                        <h3>Web Development</h3>
                        <p>We offer bespoke web development solutions tailored to your needs.</p>
                    </div>
                    <div className="feature-item">
                        <img src="/images/service2.jpg" alt="Service 2" />
                        <h3>Mobile App Development</h3>
                        <p>Get innovative mobile app solutions to engage your audience.</p>
                    </div>
                    <div className="feature-item">
                        <img src="/images/service3.jpg" alt="Service 3" />
                        <h3>Cloud Solutions</h3>
                        <p>Unlock the power of cloud computing with our expert solutions.</p>
                    </div>
                </div>
            </div>

        </>
    )
}
