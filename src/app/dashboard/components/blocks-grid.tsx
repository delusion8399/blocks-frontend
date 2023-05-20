import BlockRepository from "@/app/api/repositories/block-repository";
import { Block } from "@/app/types/block.types";
import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Input,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function BlocksGrid() {
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["fetch-all-blocks"],
    queryFn: () => BlockRepository.fetchAll(),
  });

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <SimpleGrid
          columns={4}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          spacing={20}
        >
          {data?.map((block: Block, idx: number) => {
            return (
              <Link key={idx} href={`/dashboard/${block.blockId}`}>
                <Card>
                  <CardHeader
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Text fontWeight={600}>{block.blockName}</Text>

                    <Badge>{block.createdAt}</Badge>
                  </CardHeader>
                  <Divider borderColor="gray.300" />
                  <CardBody>
                    <Input
                      variant="filled"
                      value={block.blockId}
                      color="black"
                      onChange={() => {}}
                    />
                  </CardBody>
                  <CardFooter>
                    <Badge colorScheme={block.isProtected ? "red" : "green"}>
                      {block.isProtected ? "Protected" : "Public"}
                    </Badge>
                  </CardFooter>
                </Card>
              </Link>
            );
          })}
        </SimpleGrid>
      )}
    </>
  );
}
