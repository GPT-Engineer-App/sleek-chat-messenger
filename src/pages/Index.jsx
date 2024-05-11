import { Box, Container, Flex, IconButton, Input, Text, VStack, Image, HStack, Avatar, Badge } from "@chakra-ui/react";
import { FaCamera, FaCommentDots, FaPhone, FaSearch, FaUserCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" p={0} m={0} maxH="100vh" overflow="hidden">
      <Flex direction="column" h="full">
        {/* Navigation Bar */}
        <Flex bg="gray.100" p={2} align="center" justify="space-between" boxShadow="sm">
          <IconButton icon={<FaCamera />} aria-label="Camera" variant="ghost" />
          <HStack spacing={4}>
            <Text fontWeight="bold" p={2} borderBottom="2px" borderColor="blue.500">
              Chats
            </Text>
            <Text p={2}>Status</Text>
            <Text p={2}>Calls</Text>
          </HStack>
          <IconButton icon={<FaSearch />} aria-label="Search" variant="ghost" />
        </Flex>

        {/* Search and New Chat */}
        <Flex p={4} align="center">
          <Input placeholder="Search or start new chat" flex="1" mr={2} />
          <IconButton icon={<FaCommentDots />} aria-label="New Chat" colorScheme="blue" />
        </Flex>

        {/* Chat List */}
        <VStack spacing={4} overflowY="auto" flex="1" p={2}>
          <ChatListItem name="John Doe" message="Hey, how are you?" time="12:34 PM" />
          <ChatListItem name="Jane Smith" message="Let's meet tomorrow!" time="11:21 AM" unread />
          <ChatListItem name="Bob Brown" message="Can you send the file?" time="Yesterday" />
          <ChatListItem name="Alice Johnson" message="Thank you!" time="Monday" />
        </VStack>
      </Flex>
    </Container>
  );
};

const ChatListItem = ({ name, message, time, unread = false }) => {
  return (
    <Flex align="center" w="full" p={3} bg={unread ? "blue.50" : "white"} borderRadius="lg" boxShadow="sm">
      <Avatar name={name} mr={3} />
      <Box flex="1">
        <Text fontWeight="bold">{name}</Text>
        <Text fontSize="sm">{message}</Text>
      </Box>
      <VStack align="flex-end">
        <Text fontSize="xs" color="gray.500">
          {time}
        </Text>
        {unread && <Badge colorScheme="green">New</Badge>}
      </VStack>
    </Flex>
  );
};

export default Index;
