import './App.css';
import ReferralForm from './components/ReferralForm';
import ReferralList from './components/ReferralList';

function App() {
  return (
    <div className="bg-secondary-light">
      <div className="flex flex-col md:items-center xl:flex-row px-4 gap-4 py-4 ">
        <ReferralForm />
        <ReferralList />
      </div>
    </div>
  );
}

export default App;
