import { Flex } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Flex direction="column" align="center" maxW={{ xl: '1200px' }} m="0 auto">
        <Header />
        <Hero
          title="Share files with multiple owners"
          subtitle="Allowing users to be able to deploy secrets or files over the network"
          image="https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          ctaText="Share your own secret now"
          ctaLink="/signup"
        />
        <Footer />
      </Flex>
    </div>
  );
}
