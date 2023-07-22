import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import { useLayoutEffect, useRef } from "react";

const GameCardSkeleton = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (cardRef.current) {
      const width = cardRef.current.offsetWidth;
      cardRef.current.style.height = `${width}px`;
    }
  }, []);

  return (
    <Card ref={cardRef} width="100%" borderRadius="10px" overflow="hidden">
      <Skeleton height="100%" />
      <CardBody>
        <SkeletonText height="100px" />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
