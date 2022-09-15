import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  Input,
  List,
  ListItem,
  Select,
  useDisclosure,
  VStack,
  Text,
  Collapse,
  Slide,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { useRef } from "react";
import {
  BiBell,
  BiLogIn,
  BiMailSend,
  BiPencil,
  BiQuestionMark,
} from "react-icons/bi";
import { GoThreeBars } from "react-icons/go";
import { Link } from "react-router-dom";

export function Header() {
  const { isOpen, onToggle } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <HStack as="header" position="fixed" spacing={0} w="full" zIndex={2}>
      <HStack
        w="full"
        h="16"
        borderBottom="1px"
        position="relative"
        zIndex={2}
        spacing={0}
        bg="white"
      >
        <Container maxWidth="container.md" position="relative" zIndex={2}>
          <HStack justifyContent="space-between">
            <Button colorScheme="teal" variant="ghost">
              <BiBell size={24} />
            </Button>
            <Link to="/">
              <Heading
                as="h4"
                fontSize="lg"
                _hover={{
                  color: "teal",
                }}
              >
                42Race Events
              </Heading>
            </Link>
            <Button
              colorScheme="teal"
              variant="ghost"
              ref={btnRef}
              onClick={onToggle}
            >
              <GoThreeBars size={24} />
            </Button>
          </HStack>
        </Container>
      </HStack>
      <Slide direction="top" in={isOpen}>
        <Box w="full" bg="teal.400" marginLeft={0} zIndex={1} pt={16}>
          <Container maxWidth="container.md" color="white">
            <List spacing={4} pl={4} py={4}>
              <ListItem>
                <ChakraLink display="inline-flex" alignItems="center">
                  <BiLogIn size={20} />
                  <Text as="span" ml="2">
                    Login
                  </Text>
                </ChakraLink>
              </ListItem>
              <ListItem>
                <ChakraLink display="inline-flex" alignItems="center">
                  <BiPencil size={20} />
                  <Text as="span" ml="2">
                    Sign up
                  </Text>
                </ChakraLink>
              </ListItem>
              <ListItem>
                <ChakraLink display="inline-flex" alignItems="center">
                  <BiQuestionMark size={20} />
                  <Text as="span" ml="2">
                    Guides and FAQ
                  </Text>
                </ChakraLink>
              </ListItem>
              <ListItem>
                <ChakraLink display="inline-flex" alignItems="center">
                  <BiMailSend size={20} />
                  <Text as="span" ml="2">
                    Contact us
                  </Text>
                </ChakraLink>
              </ListItem>
            </List>
            <Divider />
            <HStack pl={4} py={4}>
              <Text>Language: </Text>
              <Select w="auto" border="none" placeholder="Select option">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </HStack>
          </Container>
        </Box>
      </Slide>
    </HStack>
  );
}
