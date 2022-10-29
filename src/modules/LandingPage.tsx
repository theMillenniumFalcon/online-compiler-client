import { Box, Button, List, ListIcon, ListItem } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { Layout } from "../component/Layout"
import { MdCheckCircle } from "react-icons/md"

export const LandingPage = () => {
    return (
        <Layout>
            <Box>
                <List spacing={1}>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='green.500' />
                        One Click execute handwritten code
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='green.500' />
                        Upload and crop image to execute
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='green.500' />
                        Run your code in a sandbox environment
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='green.500' />
                        Auto detects your language
                    </ListItem>
                </List>
                <Link to="/upload">
                    <Button mt={2}>
                        Get Started
                    </Button>
                </Link>
            </Box>
        </Layout>
    )
}