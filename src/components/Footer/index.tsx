// #region Global Imports
import React from "react";
import { Flex, Link } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { FiTwitter, FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
// #endregion Global Imports

const Footer = () => (
  <Flex as="footer" justify="center" mb={4}>
    <Link href="https://twitter.com/phaneekr" title="Twitter" isExternal>
      <IconButton aria-label="Twitter" icon={<FiTwitter />} size="lg" color="gray.500" variant="ghost" />
    </Link>
    <Link href="https://github.com/phaneendra" title="GitHub" isExternal>
      <IconButton aria-label="GitHub" icon={<FiGithub />} size="lg" color="gray.500" variant="ghost" />
    </Link>
    <Link href="https://www.linkedin.com/in/phaneendra-krishnareddy-69495b38/" title="LinkedIn" isExternal>
      <IconButton aria-label="LinkedIn" icon={<FiLinkedin />} size="lg" color="gray.500" variant="ghost" />
    </Link>
    <Link href="mailto:phaneendra.krishnareddy@gmail.com" title="Email" isExternal>
      <IconButton aria-label="Email" icon={<FiMail />} size="lg" color="gray.500" variant="ghost" />
    </Link>
  </Flex>
);

export default Footer;
