import { Button, HStack } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";

type Props = {
  total: number;
  limit: number;
  currentIndex: number;
  onPageChange: (nextPage: number) => void;
};

export default function Pagination({
  total,
  limit,
  currentIndex,
  onPageChange,
}: Props) {
  const totalPage = useMemo(() => Math.ceil(total / limit), [total, limit]);
  const [visiblePages, setVisiblePages] = useState<number[]>([]);

  useEffect(() => {
    const arr = [];
    let i = 0;
    let length = totalPage;

    if (length > 3) {
      i = Math.max(currentIndex - 1, 0);
      length = Math.min(currentIndex + 1, totalPage);
    }

    while (i < length) {
      arr.push(i);
      i++;
    }

    setVisiblePages(arr);
  }, [totalPage, currentIndex]);

  const goToPage = (index: number) => {
    onPageChange(index);
  };

  const handleClick = (index: number) => {
    console.log(currentIndex, index);

    if (currentIndex !== index) {
      goToPage(index);
    }
  };

  return (
    <HStack>
      <Button onClick={() => goToPage(0)}>{"<<"}</Button>
      <Button onClick={() => goToPage(Math.max(--currentIndex, 0))}>
        {"<"}
      </Button>
      {visiblePages.map((page) => (
        <Button
          key={"page-" + page}
          onClick={() => handleClick(page)}
          bg={currentIndex === page ? "gray.300" : ""}
        >
          {page + 1}
        </Button>
      ))}
      <Button onClick={() => goToPage(Math.min(++currentIndex, totalPage - 1))}>
        {">"}
      </Button>
      <Button onClick={() => goToPage(totalPage - 1)}>{">>"}</Button>
    </HStack>
  );
}
