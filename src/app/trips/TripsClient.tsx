'use client';

import Heading from '@/components/Heading';
import Container from '@/components/Container';

interface TripsClientProps {
  reservation: [];
  currentUser?: object | null;
}

const TripsClient: React.FC<TripsClientProps> = ({ reservation, currentUser }) => {
  return (
    <Container>
      TripsClient
    </Container>
  );
};

export default TripsClient;
