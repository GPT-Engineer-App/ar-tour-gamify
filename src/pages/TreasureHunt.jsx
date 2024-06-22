import { Box, Text, VStack, Button, HStack, Image } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";

const TreasureHunt = () => {
  const locations = [
    { id: 1, name: "Eiffel Tower", image: "/images/eiffel-tower.jpg" },
    { id: 2, name: "Statue of Liberty", image: "/images/statue-of-liberty.jpg" },
    { id: 3, name: "Great Wall of China", image: "/images/great-wall-of-china.jpg" },
  ];

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">Treasure Hunt</Text>
        <Text fontSize="xl">Explore the locations and find the treasures!</Text>
        <HStack spacing={4}>
          {locations.map((location) => (
            <Box key={location.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} textAlign="center">
              <Image src={location.image} alt={location.name} boxSize="150px" objectFit="cover" mb={4} />
              <Text fontSize="xl" fontWeight="bold">{location.name}</Text>
              <Button leftIcon={<FaMapMarkerAlt />} colorScheme="teal">Explore</Button>
            </Box>
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};

export default TreasureHunt;