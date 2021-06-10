import {Button} from "antd"
import {
  Link
} from "react-router-dom";
import logo from '../../assets/img/Fitter_logo_animated.gif'
import styles from './Home.module.scss';

const Home = () => (
  <div className={styles.Home} data-testid="Home">
    <img src={logo} alt="Logo Fitter" className="mb-5"/>
    <p className="text-center">Attention, ne jouez pas avec son coeur ... </p>
    <Link to="/room"><Button type="primary">Demarrer</Button></Link>
  </div>
);

export default Home;
