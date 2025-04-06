import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  useColorModeValue,
  Tag,
  Link,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { me } from "../../../me";

export const Projects = () => {
  const [projects] = useState(me.projects);

  return (
    <Flex
      id="projects"
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
        <Heading as={"h2"} fontSize={"3xl"} mb={12}>
          Projects
        </Heading>
        <Stack spacing={20}>
          {projects.map((project, i) => (
            <SingleProject 
              key={`project-${i}`} 
              {...project} 
              imageSettings={{
                objectFit: project.name === "Personal Portfolio Website" ? "contain" : "cover",
                padding: project.name === "Personal Portfolio Website" ? 4 : 0,
                height: "280px",
                width: project.name === "Swedish Vocabulary Platform" ? "85%" : "100%"
              }}
            />
          ))}
        </Stack>
      </Box>
    </Flex>
  );
};

interface ImageSettings {
  objectFit: "contain" | "cover";
  padding: number;
  height: string;
  width: string;
}

interface ProjectProps {
  name: string;
  description: string;
  contribution: string;
  technologies: readonly string[];
  links: readonly {
    name: string;
    uri: string;
  }[];
  image?: string;
  backgroundImage?: string;
  imageSettings: ImageSettings;
}

const SingleProject = ({
  name,
  description,
  contribution,
  technologies,
  links,
  image,
  backgroundImage,
  imageSettings,
}: ProjectProps) => {
  const bg = useColorModeValue("white", "brand.900");
  const borderColor = useColorModeValue("brand.200", "brand.700");
  
  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
      gap={12}
      transition="transform 0.2s"
      _hover={{
        transform: "translateY(-8px)"
      }}
    >
      {/* Project Image */}
      <GridItem position="relative">
        <Box
          position="relative"
          height={imageSettings.height}
          width="100%"
          overflow="hidden"
          borderRadius="xl"
          border="1px"
          borderColor={borderColor}
          bg={useColorModeValue("gray.50", "gray.900")}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={image || backgroundImage}
            alt={name}
            w={imageSettings.width}
            h={imageSettings.width === "100%" ? "full" : "auto"}
            objectFit={imageSettings.objectFit}
            p={imageSettings.padding}
          />
        </Box>
      </GridItem>

      {/* Project Info */}
      <GridItem>
        <Stack spacing={6}>
          <Heading
            as="h3"
            fontSize={{ base: "2xl", md: "3xl" }}
            color={useColorModeValue("brand.800", "white")}
          >
            {name}
          </Heading>
          
          <Text 
            fontSize={{ base: "md", md: "lg" }} 
            color={useColorModeValue("gray.700", "gray.300")}
            lineHeight="tall"
          >
            {description}
          </Text>

          <Text 
            fontSize={{ base: "sm", md: "md" }}
            color={useColorModeValue("gray.600", "gray.400")}
            lineHeight="tall"
          >
            {contribution}
          </Text>

          <Stack direction="row" spacing={4}>
            {links.map((link) => (
              <Button
                key={link.name}
                as={Link}
                href={link.uri}
                target="_blank"
                size="md"
                leftIcon={<FiExternalLink />}
                variant="outline"
                colorScheme="brand"
              >
                {link.name}
              </Button>
            ))}
          </Stack>

          <Stack direction="row" wrap="wrap" spacing={3}>
            {technologies.map((tech) => (
              <Tag
                key={tech}
                size="lg"
                variant="subtle"
                colorScheme="brand"
                borderRadius="full"
                px={4}
                py={2}
                fontSize="md"
                fontWeight="semibold"
              >
                {tech}
              </Tag>
            ))}
          </Stack>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default Projects;
