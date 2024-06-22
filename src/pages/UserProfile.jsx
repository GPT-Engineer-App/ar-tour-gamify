import { Box, Text, VStack, HStack, Progress, Avatar } from "@chakra-ui/react";

const UserProfile = () => {
  const user = {
    name: "John Doe",
    avatar: "/images/avatar.jpg",
    points: 45,
    badges: [
      { id: 1, name: "Explorer", image: "/images/badge-explorer.png" },
      { id: 2, name: "Adventurer", image: "/images/badge-adventurer.png" },
    ],
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Avatar src={user.avatar} size="xl" />
        <Text fontSize="2xl" fontWeight="bold">{user.name}</Text>
        <Text fontSize="xl">Points: {user.points}</Text>
        <Progress value={user.points} max={100} size="lg" colorScheme="green" width="100%" />
        <Text fontSize="xl" mt={4}>Badges:</Text>
        <HStack spacing={4}>
          {user.badges.map((badge) => (
            <Box key={badge.id} textAlign="center">
              <Image src={badge.image} alt={badge.name} boxSize="50px" objectFit="cover" mb={2} />
              <Text fontSize="md">{badge.name}</Text>
            </Box>
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};

export default UserProfile;