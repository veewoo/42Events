import {
  Box,
  Container,
  HStack,
  List,
  ListItem,
  Text,
  Link as ChakraLink,
  Link,
} from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export function Footer() {
  return (
    <Box as="footer" py={16} bg="black">
      <Container maxWidth="container.md" color="white">
        <HStack justifyContent="space-between" alignItems="flex-start">
          <Box>
            <List>
              <ListItem>
                <ChakraLink>About</ChakraLink>
              </ListItem>
              <ListItem>
                <ChakraLink>Contact</ChakraLink>
              </ListItem>
              <ListItem>
                <ChakraLink>Corporate Solutions</ChakraLink>
              </ListItem>
            </List>
            <Text opacity={0.5} fontSize="sm">
              © 2022 42Technology Pte Ltd.
            </Text>
          </Box>
          <HStack>
            <Link bg="gray.100" p={3} color="black" rounded="md">
              <FaFacebookF />
            </Link>
            <Link bg="gray.100" p={3} color="black" rounded="md">
              <FaInstagram />
            </Link>
            <Link bg="gray.100" p={3} color="black" rounded="md">
              <FaLinkedinIn />
            </Link>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}
