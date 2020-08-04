// #region Global Imports
import React from "react";
import NextLink from "next/link";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Heading, Text, Flex, Stack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

import Layout from "../../src/components/layouts/SiteLayout";

const Error = () => {
  const secondaryTextColor = useColorModeValue("gray.600", "gray.500");

  return (
    <Layout>
      <Stack spacing={8} justifyContent="center" alignItems="flex-start" m="0 auto 4rem auto" maxWidth="700px">
        <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" maxWidth="700px">
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            451 – Unavailable For Legal Reasons
          </Heading>
          <Text color={secondaryTextColor} my={4}>
            Why show a generic 404 when I can make it sound mysterious? It seems you've found something that used to
            exist, or you spelled something wrong. I'm guessing you spelled something wrong. Can you double check that
            URL?
          </Text>
          <NextLink href="/" passHref>
            <Button as="a" p={[1, 4]} w="250px" fontWeight="bold" m="3rem auto 0">
              Return Home
            </Button>
          </NextLink>
        </Flex>
      </Stack>
    </Layout>
  );
};

export default Error;
