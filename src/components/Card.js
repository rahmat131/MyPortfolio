import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 
import React from "react"; 
 
const Card = ({ title, description,url, imageSrc }) => { 
   return ( 
     <VStack 
       color="black" 
       backgroundColor="white" 
       
       borderRadius="xl" 
     > 
       <Image borderRadius="xl" src={imageSrc} alt={title} /> 
       <VStack spacing={4} p={4} alignItems="flex-start"> 
         <HStack justifyContent="space-between" alignItems="center"> 
           <Heading as="h3" size="md"> 
             {title} 
           </Heading> 
         </HStack> 
         <Text color="#64748b" fontSize="lg"> 
           {description} 
         </Text> 
         <HStack cursor="pointer"  spacing={2} alignItems="center"> 
          {/* <a>{url}</a> */}
          <p><a href={url} target="_blank"> See more</a></p> 
           <FontAwesomeIcon icon={faArrowRight} size="1x" /> 
         </HStack> 
       </VStack> 
     </VStack> 
   ); 
}; 
 
export default Card; 