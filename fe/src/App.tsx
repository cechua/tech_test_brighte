import './App.css';
import ReferralForm from './components/ReferralForm';
import ReferralList from './components/ReferralList';

function App() {
  return (
    <div className="flex px-8 items-center ">
      <ReferralForm />
      <ReferralList />
    </div>
  );
}

export default App;
