import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button className='add-count'>About Button</button>
      </div>
      <Link to='/'>
        <button className='home'>Home page</button>
      </Link>
    </>
  );
}

export default About;
