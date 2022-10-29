import { useState } from 'react'
import { Box, Button, Flex, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react"
import { Layout } from "../component/Layout"
import { HiOutlineUpload } from "react-icons/hi"
import { MdCropRotate, MdOutlineFindInPage } from "react-icons/md"

export const UploadPage = () => {
    const [file, setFile] = useState(null)
    const [imageUrl, setImageUrl] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false)
    const handleImageLoadFromURL = () => { }

    return (
        <Layout>
            <Box>
                <Text fontSize='sm' color='blue' border='1px' p={2} backgroundColor="blue.50">
                    You can upload images of both handwritten or printed code.
                    Currently, we support C, C++, JavaScript and Python.
                </Text>


                <Text fontSize='sm' mt={3}>
                    OR Enter Image URL
                </Text>
                <InputGroup mt={1}>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<HiOutlineUpload color='gray.300' />}
                    />
                    <Input placeholder='Image URL' />
                    <Button
                        ml={2}
                        onClick={handleImageLoadFromURL}
                        disabled={!imageUrl}
                        size='md'
                        width='150px'
                        border='2px'
                        borderColor='green.500'
                    >
                        Load
                    </Button>
                </InputGroup>

                <Box mt={4} height="50vh" border="1px" borderColor="gray.400">

                </Box>
                <Flex justify="space-between" mt={4}>
                    <Button
                        size='md'
                        width='100%'
                        border='2px'
                        borderColor='green.500'
                        mr={2}
                        disabled={!file}
                        onClick={() => setIsModalVisible(true)}
                        leftIcon={<MdCropRotate />}
                    >
                        Crop Image
                    </Button>
                    <Button
                        size='md'
                        width='100%'
                        border='2px'
                        borderColor='green.500'
                        ml={2}
                        disabled={!file}
                        leftIcon={<MdOutlineFindInPage />}
                    >
                        Read Text
                    </Button>

                </Flex>
            </Box>

            {isModalVisible && (
                //     <ImageCropModal
                //     isVisible={isModalVisible}
                //     imageSrc={filePreview}
                //     closeModal={() => setIsModalVisible(false)}
                //     onCropSuccess={({ file, filePreview }) => {
                //       setIsModalVisible(false);
                //       setFile(file);
                //       setFilePreview(filePreview);
                //     }}
                //   /> 
                <Box>Hello</Box>
            )}
        </Layout>
    )
}