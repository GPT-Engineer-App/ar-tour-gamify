import { Container, Text, VStack, Box, Button, HStack, Image, useToast, ScaleFade } from "@chakra-ui/react";
import { useState } from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const attractions = [
  { id: 1, name: "Eiffel Tower", points: 10, image: "/images/eiffel-tower.jpg" },
  { id: 2, name: "Statue of Liberty", points: 15, image: "/images/statue-of-liberty.jpg" },
  { id: 3, name: "Great Wall of China", points: 20, image: "/images/great-wall-of-china.jpg" },
];

const Index = () => {
  const [totalPoints, setTotalPoints] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);
  const toast = useToast();

  const handleVisit = (points) => {
    setTotalPoints(totalPoints + points);
    toast({
      title: "Attraction Visited!",
      description: `You have earned ${points} points.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setShowAnimation(true);
    setTimeout(() => setShowAnimation(false), 1000);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="xl" fontStyle="italic">Hello, Traveler! Ready to explore?</Text>
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
        <ScaleFade initialScale={0.9} in={showAnimation}>
          <Box mt={8} p={4} borderWidth="1px" borderRadius="lg" textAlign="center">
            <Text fontSize="2xl" fontWeight="bold">Total Points: {totalPoints}</Text>
          </Box>
        </ScaleFade>
        <HStack spacing={4} mt={8}>
          <Link to="/treasure-hunt">
            <Button colorScheme="blue">Start Treasure Hunt</Button>
          </Link>
          <Link to="/user-profile">
            <Button colorScheme="green">View Profile</Button>
          </Link>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;