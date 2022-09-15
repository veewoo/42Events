import { VStack, CircularProgress } from "@chakra-ui/react";

export default function LoadingModal() {
  return (
    <VStack
      position="fixed"
      top={0}
      left={0}
      w="100vw"
      h="100vh"
      bg="white"
      justifyContent="center"
    >
      <CircularProgress isIndeterminate color="green.300" />
    </VStack>
  );
}
