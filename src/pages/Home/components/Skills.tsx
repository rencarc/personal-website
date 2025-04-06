import {
  Box,
  Flex,
  Grid,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { IconType } from "react-icons";
import { 
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, 
  SiTailwindcss, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiDjango, SiPython,
  SiMongodb, SiPostgresql, SiPrisma,
  SiVercel, SiNetlify, SiRender, SiGooglecloud, 
  SiAmazon, SiDocker, SiFirebase,
  SiGit, SiGithub, 
  SiGnubash, SiVite, SiFigma
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { TbArrowWaveRightUp } from "react-icons/tb";
import { me } from "../../../me";

const skillsData = {
  "Frontend": [
    { name: "React.js", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 }
  ],
  "Backend": [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "Django", icon: SiDjango },
    { name: "Python", icon: SiPython }
  ],
  "Database": [
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Prisma", icon: SiPrisma },
    { name: "SQL", icon: SiPostgresql }
  ],
  "DevOps & Cloud": [
    { name: "Vercel", icon: SiVercel },
    { name: "Netlify", icon: SiNetlify },
    { name: "Render", icon: SiRender },
    { name: "Google Cloud", icon: SiGooglecloud },
    { name: "AWS", icon: SiAmazon },
    { name: "Docker", icon: SiDocker },
    { name: "Firebase", icon: SiFirebase }
  ],
  "Tools & Misc": [
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "VS Code", icon: VscCode },
    { name: "Clerk", icon: SiGithub },
    { name: "Bash / Shell", icon: SiGnubash },
    { name: "Vite", icon: SiVite },
    { name: "Figma", icon: SiFigma }
  ],
  "Languages": [
    { name: "English (Fluent)" },
    { name: "Swedish (Intermediate)" },
    { name: "Chinese (Native)" }
  ]
};

const SingleSkill = ({
  name,
  icon,
  index = 0,
}: {
  name: string;
  icon?: IconType;
  index?: number;
}) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const controls = useAnimation();

  const variants = {
    hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.05,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.4}
      dragTransition={{ bounceStiffness: 1000, bounceDamping: 20 }}
    >
      <Stack
        direction={"column"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("brand.50", "brand.900")}
        px={4}
        py={3}
        borderRadius={"xl"}
        border={"1px"}
        borderColor={useColorModeValue("brand.200", "brand.700")}
        spacing={2}
        h="full"
      >
        {icon && (
          <Icon 
            as={icon} 
            boxSize={8} 
            color={useColorModeValue("brand.600", "brand.300")}
          />
        )}
        <Text 
          fontSize={"sm"} 
          fontWeight="medium"
          textAlign="center"
          noOfLines={2}
        >
          {name}
        </Text>
      </Stack>
    </motion.div>
  );
};

export const Skills = () => {
  return (
    <Box position="relative" overflow="hidden">
      <Box
        position="absolute"
        right="-5%"
        top="-5%"
        w="300px"
        h="300px"
        opacity={0.1}
        transform="rotate(15deg)"
        _dark={{ opacity: 0.05 }}
      >
        <Image
          src="/images/project-preview.png"
          alt="Background decoration"
          objectFit="contain"
          w="full"
          h="full"
          filter="blur(1px)"
        />
      </Box>
      <Flex
        id="skills"
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
        position="relative"
        zIndex={1}
      >
        <Box w={"full"}>
          <Heading as={"h2"} fontSize={"3xl"} mb={8}>
            Skills/Technologies
          </Heading>
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={8}
          >
            {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
              <Stack
                key={category}
                spacing={4}
                p={6}
                borderRadius="xl"
                border="1px"
                borderColor={useColorModeValue("brand.200", "brand.700")}
                bg={useColorModeValue("white", "brand.800")}
              >
                <Heading as="h3" fontSize="2xl" color={useColorModeValue("brand.600", "brand.300")}>
                  {category}
                </Heading>
                <SimpleGrid columns={3} spacing={4}>
                  {skills.map((skill, index) => (
                    <SingleSkill
                      key={skill.name}
                      {...skill}
                      index={categoryIndex * skills.length + index}
                    />
                  ))}
                </SimpleGrid>
              </Stack>
            ))}
          </Grid>
          <Flex 
            justify="flex-end" 
            align="center" 
            mt={6}
            gap={2}
          >
            <Text
              fontSize="md"
              color={useColorModeValue("brand.500", "brand.300")}
              fontWeight="medium"
            >
              Try dragging me!
            </Text>
            <Icon 
              as={TbArrowWaveRightUp} 
              boxSize={6} 
              color={useColorModeValue("brand.500", "brand.300")}
              transform="auto"
              transition="transform 0.3s ease-in-out"
              _hover={{
                transform: "translateX(5px) translateY(-2px)"
              }}
            />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Skills;
