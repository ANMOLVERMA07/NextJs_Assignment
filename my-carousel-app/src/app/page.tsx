import Carousel from '@/components/Carousel';
import { FaEmpire } from 'react-icons/fa';

export default function HomePage() {
  return (
    <main style={{ padding: '8rem' }}>
      <FaEmpire style={{ color:'orange',textAlign: 'center', scale:'3', margin:'auto',marginBottom:'2.0rem'}}/>
      <p style={{textAlign: 'center',fontSize:'0.8rem',marginBottom:'1.2rem',color:"grey"}}><span style={{color:"orange"}}>//</span> 02 . OUR VALUES</p>
      <h1 style={{ textAlign: 'center',color:"white",fontSize:'1.5rem',fontWeight:'bold' }}>The core values behind our work</h1>
      <Carousel />
    </main>
  );
}