import { AllRoutes } from './routes/AllRoutes';
import { Footer, Header } from './components';


function App() {
  return (
    <div className="App dark:bg-slate-800">
      <Header />
      <main>
         <AllRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;