import React, { useEffect, useRef } from "react"; 
import { useFormik } from "formik"; 
import { 
 Box, 
 Button, 
 FormControl, 
 FormErrorMessage, 
 FormLabel, 
 Heading, 
 Input, 
 Textarea, 
 VStack, 
} from "@chakra-ui/react"; 
import * as Yup from 'yup'; 
import FullScreenSection from "./FullScreenSection"; 
import useSubmit from "../hooks/useSubmit"; 
import { useAlertContext } from "../context/alertContext"; 
import emailjs from '@emailjs/browser';

const Contact = () => { 
    const { isLoading, response, submit } = useSubmit(); 
    const { onOpen } = useAlertContext(); 
    const formRef = useRef(null); 
   
    const formik = useFormik({ 
      initialValues: { 
        firstName: "", 
        email: "", 
        comment: "", 
      }, 
      onSubmit: (values) => { 
        // Integrate EmailJS here only if the form is valid
        emailjs
          .sendForm(
            'service_x4b2xqi', 
            'template_0i3uqfi', 
            formRef.current, 
            'QwPkadmai5TpriMie'
          )
          .then(
            () => { 
              console.log('SUCCESS!'); 
              onOpen('success', 'Your message has been sent!'); // Notify success
              formik.resetForm(); // Reset form on success
            }, 
            (error) => { 
              console.error('FAILED...', error.text); 
              onOpen('error', 'Failed to send the message. Please try again.'); // Notify error
            }
          ); 
      }, 
      validationSchema: Yup.object({ 
        firstName: Yup.string().required("Required"), 
        email: Yup.string().email("Invalid email address").required("Required"), 
        comment: Yup.string() 
          .min(25, "Must be at least 25 characters") 
          .required("Required"), 
      }), 
    }); 
   
    useEffect(() => { 
      if (response) { 
        onOpen(response.type, response.message); 
        if (response.type === 'success') { 
          formik.resetForm(); 
        } 
      } 
    }, [response]); 
   
    return (
      <FullScreenSection
        isDarkBackground
        backgroundColor="#512DA8"
        py={16}
        spacing={8}
      >
        <VStack w="1024px" p={32} alignItems="flex-start">
          <Heading as="h1" id="contactme-section">
            Contact me
          </Heading>
          <Box p={6} rounded="md" w="100%">
            <form ref={formRef} onSubmit={formik.handleSubmit}> {/* Use formik.handleSubmit */}
              <VStack spacing={4}>
                <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                  <FormLabel htmlFor="firstName">Name</FormLabel>
                  <Input
                    id="firstName"
                    name="firstName"
                    {...formik.getFieldProps("firstName")}
                  />
                  <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    {...formik.getFieldProps("email")}
                  />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                  <FormLabel htmlFor="comment">Your message</FormLabel>
                  <Textarea
                    id="comment"
                    name="comment"
                    height={250}
                    {...formik.getFieldProps("comment")}
                  />
                  <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                </FormControl>
                <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                  Submit
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
      </FullScreenSection>
    );
   };
export default Contact;
