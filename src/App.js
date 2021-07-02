import MainPage from './section.components/MainPage';
import './styles/Css/styles.css';
import process from './assests/images/process.gif'

function App() {
  return (
    <div>
      <MainPage />
      <div className='inProcess'>
        <div>We are working on the responsive design, it will be avaliable soon</div>
        <img src={process} />
      </div>
    </div>
  );
}

export default App;
