import { Button, useBreakpointValue } from "@chakra-ui/react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

type Props = {
  id: string;
  direction: "left" | "right";
};

const NavigationButton = ({ id, direction }: Props) => {
  const distance = useBreakpointValue({
    base: "4px",
    md: "-56px",
  });

  const props = direction === "left" ? { left: distance } : { right: distance };

  return (
    <Button
      id={id}
      position="absolute"
      top="50%"
      zIndex={2}
      rounded="full"
      p={3}
      h="auto"
      role="group"
      _hover={{
        bg: "teal",
        color: "white",
      }}
      {...props}
    >
      {direction === "left" ? <BiLeftArrow /> : <BiRightArrow />}
    </Button>
  );
};

export default NavigationButton;
