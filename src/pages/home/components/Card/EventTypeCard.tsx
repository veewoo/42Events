import { HStack, Image, Link as ChakraLink, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

type Props = {
  imageSource: string;
  redirectUrl: string;
  title: string;
};

export function EventTypeCard({ imageSource, redirectUrl, title }: Props) {
  return (
    <VStack>
      <Link to={redirectUrl} style={{ width: "50%" }}>
        <Image src={imageSource} />
      </Link>
      <ChakraLink href={redirectUrl} fontSize="2xl">
        {title}
      </ChakraLink>
    </VStack>
  );
}
