import { Box, Flex, Select, Button, Text, Input } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { AiFillPlaySquare } from "react-icons/ai"
import { languageList, themeList, fontSizeList } from "../utils/constants"
import { Navbar } from "../component/Navbar"
import Editor from "@monaco-editor/react"
import { useRef } from "react"

const handleChange = () => { }

const LanguageSelectList = () => (
    <Select placeholder='Select language' width="25%" mr={3}>
        {languageList.map((lang: any) => (
            <option key={lang.value} value={lang.value}>
                {lang.label}
            </option>
        ))}
    </Select>
)

const ThemeSelectList = () => (
    <Select placeholder="Select Theme" onChange={handleChange} width="25%" mr={3}>
        {themeList.map((theme: any) => (
            <option key={theme.value} value={theme.value}>
                {theme.label}
            </option>
        ))}
    </Select>
)

const FontSizeSelectList = () => (
    <Select placeholder="Change Font Size" onChange={handleChange} width="25%">
        {fontSizeList.map((size: any) => (
            <option key={size.value} value={size.value}>
                {size.label}
            </option>
        ))}
    </Select>
)

const Error = ({ error }: any) => {
    if (!error) return null;

    return (
        <Box>
            <strong style={{ color: 'red' }}>Output</strong>: {error}
        </Box>
    )
}

export const EditorPage = () => {
    const editorRef = useRef(null)

    const handleEditorDidMount = ({ editor, monaco }: any) => {
        editorRef.current = editor
    }

    // const showValue = () => {
    //     alert(editorRef!.current!.getValue())
    // }

    return (
        <>
            <Navbar />
            <Flex backgroundColor="gray.100" height="90vh">
                <Box width="50%" border="1px" borderColor="gray.400" backgroundColor="white" m={2}>
                    Hello
                </Box>
                <Box width="50%" border="1px" borderColor="gray.400" backgroundColor="white" m={2}>
                    <Flex p={2} backgroundColor="gray.50">
                        <LanguageSelectList />
                        <ThemeSelectList />
                        <FontSizeSelectList />
                    </Flex>
                    <Editor
                        height="77%"
                        width="100%"
                        defaultLanguage="javascript"
                        defaultValue="// write your solution here..."
                        onMount={handleEditorDidMount}
                    />
                    <Box backgroundColor="gray.100">
                        <Flex align="center" p={2}>
                            <Text fontSize='md' as='b' mr={2}>
                                Standard Input:
                            </Text>
                            <Input
                                focusBorderColor="green.500"
                                width="80%"
                                placeholder='enter value'
                            />
                        </Flex>
                        <Button
                            size='md'
                            width='100%'
                            border='1px solid'
                            borderColor='gray.500'
                            backgroundColor="green.50"
                            // onClick={showValue}
                            leftIcon={<AiFillPlaySquare />}
                        >
                            Run Code
                        </Button>
                    </Box>
                </Box>
            </Flex>
        </>
    )
}
