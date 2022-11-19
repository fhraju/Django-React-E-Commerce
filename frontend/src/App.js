import { Container } from 'react-bootstrap'

import Header from './components/Header';
import Footer from './components/Footer';
import HoomeScreen from './screens/HoomeScreen';

function App() {
  return (
    <div>
      <Header />
      <main className='py-3'>
        <Container>
          <HoomeScreen />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
