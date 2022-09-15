import { Button, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

type Props = {
  total: number;
  currentIndex: number;
  onPageChange: (nextPage: number) => void;
};

export default function Pagination({
  total,
  currentIndex,
  onPageChange,
}: Props) {
  const [visiblePages, setVisiblePages] = useState<number[]>([]);

  useEffect(() => {
    const arr = [];

    for (
      let i = Math.max(currentIndex - 3, 0);
      i < Math.min(currentIndex + 3, total);
      i++
    ) {
      arr.push(i);
    }

    setVisiblePages(arr);
  }, [total, currentIndex]);

  const goToPage = (index: number) => {
    onPageChange(index);
  };

  const handleClick = (index: number) => {
    if (currentIndex !== index) {
      goToPage(index);
    }
  };

  return (
    <HStack>
      <Button onClick={() => goToPage(0)}>{"<<"}</Button>
      <Button onClick={() => goToPage(--currentIndex)}>{"<"}</Button>
      {visiblePages.map((page) => (
        <Button
          key={"page-" + page}
          onClick={() => handleClick(page)}
          bg={currentIndex === page ? "gray.300" : ""}
        >
          {page + 1}
        </Button>
      ))}
      <Button onClick={() => goToPage(++currentIndex)}>{">"}</Button>
      <Button onClick={() => goToPage(total - 1)}>{">>"}</Button>
    </HStack>
  );
}
