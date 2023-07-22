import { Badge } from "@chakra-ui/react";

const CriticScore = ({ score }: { score: number }) => {
  let color = score >= 75 ? "green" : score >= 50 ? "yellow" : "red";

  return (
    <Badge
      fontSize="14px"
      paddingX="8px"
      borderRadius="4px"
      colorScheme={color}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
