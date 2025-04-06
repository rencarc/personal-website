import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { me } from "../../../me";

export const Education = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Flex
      id="education"
      w={"full"}
      maxW={"container.xl"}
      align={"center"}
      justify={"center"}
      direction={"column"}
      p={{
        base: 8,
        md: 16,
      }}
      tabIndex={-1}
    >
      <Box w={"full"}>
        <Heading as={"h2"} fontSize={"4xl"} mb={16}>
          Education
        </Heading>
        <Stack spacing={16}>
          {me.education.map((education, i) => (
            <Grid
              key={`education-${i}`}
              templateColumns={{
                base: "1fr",
                md: "1fr",
              }}
              gap={8}
              as={motion.div}
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: i * 0.2 },
                },
                hidden: { opacity: 0, y: 20 },
              }}
            >
              <GridItem>
                <Stack spacing={6}>
                  <Text
                    fontSize={"xl"}
                    color={useColorModeValue("brand.500", "brand.300")}
                  >
                    {education.duration}
                  </Text>
                  <Stack spacing={3}>
                    <Heading as={"h3"} fontSize={"4xl"} fontWeight={"bold"}>
                      {education.school}
                    </Heading>
                    <Text fontSize={"3xl"} fontWeight={"medium"}>
                      {education.degree} in {education.major}
                    </Text>
                    {education.achievements.map((achievement, j) => (
                      <Text 
                        key={`achievement-${i}-${j}`} 
                        fontSize={"xl"}
                        color={useColorModeValue("gray.700", "gray.300")}
                      >
                        {achievement}
                      </Text>
                    ))}
                  </Stack>
                </Stack>
              </GridItem>
            </Grid>
          ))}
        </Stack>
      </Box>
    </Flex>
  );
};

export default Education;
