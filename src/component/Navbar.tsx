import React from "react"
import { Box, Link, Flex, Button, Heading } from "@chakra-ui/react"
import { Link as ReactLink } from "react-router-dom"

interface NavbarProps { }

export const Navbar: React.FC<NavbarProps> = () => {
    return (
        <Flex zIndex={1} position="sticky" top={0} bg="black" p={4}>
            <Flex flex={1} m="auto" align="center" maxW={800}>
                <ReactLink to="/">
                    <Link>
                        <Heading color="#fff">compiler</Heading>
                    </Link>
                </ReactLink>
                <Box ml={"auto"}>
                    <ReactLink to="/login">
                        <Button mr={2}>
                            <Link>login</Link>
                        </Button>
                    </ReactLink>
                    <ReactLink to="/register">
                        <Button mr={2}>
                            <Link>register</Link>
                        </Button>
                    </ReactLink>
                </Box>
            </Flex>
        </Flex>
    )
}