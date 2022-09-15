import { HStack, Image, Link as ChakraLink, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

type Props = {
  imageSource: string;
  redirectUrl: string;
  title: string;
};

export function EventTypeCard({ imageSource, redirectUrl, title }: Props) {
  return (
    <Link to={redirectUrl}>
      <VStack>
        <Image src={imageSource} width="50%" />
        <ChakraLink href={redirectUrl} fontSize="2xl">{title}</ChakraLink>
      </VStack>
    </Link>
  );
}
