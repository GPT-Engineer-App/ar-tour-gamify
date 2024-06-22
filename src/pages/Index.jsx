import { Container, Text, VStack, Box, Button, HStack, Image } from "@chakra-ui/react";
import { useState } from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

const attractions = [
  { id: 1, name: "Eiffel Tower", points: 10, image: "/images/eiffel-tower.jpg" },
  { id: 2, name: "Statue of Liberty", points: 15, image: "/images/statue-of-liberty.jpg" },
  { id: 3, name: "Great Wall of China", points: 20, image: "/images/great-wall-of-china.jpg" },
];

const Index = () => {
  const [totalPoints, setTotalPoints] = useState(0);

  const handleVisit = (points) => {
    setTotalPoints(totalPoints + points);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">Welcome to the Tourism Experience</Text>
        <Text fontSize="2xl">Explore attractions and earn points!</Text>
        <HStack spacing={4}>
          {attractions.map((attraction) => (
            <Box key={attraction.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} textAlign="center">
              <Image src={attraction.image} alt={attraction.name} boxSize="150px" objectFit="cover" mb={4} />
              <Text fontSize="xl" fontWeight="bold">{attraction.name}</Text>
              <Text fontSize="md" mb={2}>Points: {attraction.points}</Text>
              <Button leftIcon={<FaMapMarkerAlt />} colorScheme="teal" onClick={() => handleVisit(attraction.points)}>Visit</Button>
            </Box>
          ))}
        </HStack>
        <Box mt={8} p={4} borderWidth="1px" borderRadius="lg" textAlign="center">
          <Text fontSize="2xl" fontWeight="bold">Total Points: {totalPoints}</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;