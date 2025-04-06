import {
  Box,
  Flex,
  Heading,
  Link,
  Text,
  Stack,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";
import { me } from "../../../me";
import { FaEnvelope } from "react-icons/fa";

const wave = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

export const Contact = () => {
  const bgGradient = useColorModeValue(
    "linear(to-br, brand.50, brand.100)",
    "linear(to-br, brand.900, brand.800)"
  );
  const borderColor = useColorModeValue("brand.200", "brand.700");
  const shadowColor = useColorModeValue("brand.200", "brand.900");
  const waveAnimation = `${wave} 2s ease-in-out infinite`;

  return (
    <Flex
      id="contact"
      w={"full"}
      align={"center"}
      justify={"center"}
      direction={"column"}
      maxW={"container.xl"}
      p={{
        base: 8,
        md: 16,
      }}
      tabIndex={-1}
    >
      <Box w={"full"}>
        <Heading 
          as={"h2"} 
          fontSize={"4xl"} 
          mb={8}
          display="flex"
          alignItems="center"
          gap={4}
        >
          Let's Connect{" "}
          <Box
            as="span"
            animation={waveAnimation}
            display="inline-block"
            fontSize="5xl"
          >
            🤝
          </Box>
        </Heading>
        <Stack
          as={motion.div}
          whileHover={{ scale: 1.02 }}
          style={{ transition: "all 0.3s ease" }}
          w={"full"}
          bg={useColorModeValue("white", "brand.800")}
          borderRadius={"2xl"}
          overflow={"hidden"}
          boxShadow={`0 4px 20px ${shadowColor}20`}
          border={"1px"}
          borderColor={borderColor}
          position="relative"
          _before={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(90deg, transparent, brand.500, transparent)",
            animation: "shimmer 2s infinite",
          }}
        >
          <Box
            w={"full"}
            bgGradient={bgGradient}
            p={12}
          >
            <Stack spacing={6}>
              <Stack spacing={3}>
                <Text 
                  fontSize={"2xl"} 
                  maxW={"600px"}
                  fontWeight="medium"
                  color={useColorModeValue("gray.700", "white")}
                >
                  Have a question, idea, or just want to say hi?
                </Text>
                <Text 
                  fontSize={"2xl"} 
                  maxW={"600px"}
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  I'd love to hear from you — drop me a message below!
                </Text>
              </Stack>
              <Link
                href={`mailto:${me.contact.email}`}
                target="_blank"
                _hover={{ textDecoration: "none" }}
              >
                <Stack
                  direction={"row"}
                  align={"center"}
                  bg={useColorModeValue("white", "brand.700")}
                  p={6}
                  borderRadius={"xl"}
                  spacing={4}
                  maxW={"fit-content"}
                  border={"1px"}
                  borderColor={borderColor}
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                    bg: useColorModeValue("gray.50", "brand.600"),
                  }}
                  transition="all 0.3s"
                >
                  <Icon as={FaEnvelope} boxSize={7} />
                  <Text fontSize={"2xl"} fontWeight={"medium"}>
                    Send Message
                  </Text>
                </Stack>
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Contact;
