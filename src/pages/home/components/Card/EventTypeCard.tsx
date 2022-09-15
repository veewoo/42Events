import { Heading, Image, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

type Props = {
  imageSource: string;
  redirectUrl: string;
  title: string;
};

export function EventTypeCard({ imageSource, redirectUrl, title }: Props) {
  return (
    <Link to={redirectUrl}>
      <VStack
        role="group"
        border="2px"
        borderColor="teal"
        borderRadius={8}
        py="16"
        _hover={{
          bg: "teal",
        }}
      >
        <Image src={imageSource} style={{ width: "50%" }} />
        <Heading
          fontSize="2xl"
          color="teal"
          _groupHover={{
            color: "white",
          }}
        >
          {title}
        </Heading>
      </VStack>
    </Link>
  );
}
