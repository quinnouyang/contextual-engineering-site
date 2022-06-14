import { Flex, Box, useDisclosure, Collapse } from "@chakra-ui/react";
import Footer from "../src/components/footer";
import NavBar from "../src/components/navbar";
import { DATA } from "../src/types/index";

const TOPIC_COLOR = "lightgray";
const DETAIL_COLOR = "lightgray";
const ARROW_SIZE = "25px"

function Rotate(props: any) {
  const rotation = props.isOpen ? 90 : 0;

  return <>
    <Flex direction="column" minWidtqh={ARROW_SIZE}>
      <Box transform={`rotate(${rotation}deg)`} transition="transform 0.25s" transformOrigin="50% 50%">
        {props.children}
      </Box>
    </Flex>
  </>;
}

function If(props: any) {
  if(props.condition) {
    return props.children;
  } else {
    return <></>;
  }
}

export default function HomePage() {
  return <>
    <NavBar {...{ label: "Home" }}></NavBar>
    <Flex direction="column" align="flex-start" marginLeft="5%" marginRight="5%">
        {
          DATA.map(section => {
            const { isOpen, onToggle } = useDisclosure();
            
            return <>
              <Box onClick={onToggle} backgroundColor={TOPIC_COLOR} width="100%" marginBottom="10px">
                  <Flex direction="row">
                      <If condition={section.details.length != 0}>
                         <Rotate isOpen={isOpen}>
                              <img src="/images/arrow.png" width={ARROW_SIZE} height={ARROW_SIZE}></img>
                          </Rotate>
                        &nbsp;
                      </If>
                      {section.topic}
                  </Flex>
                  <Collapse in={isOpen}>
                      <Flex direction="row" wrap="wrap" paddingLeft="0px">
                        {section.details.map(detail => 
                          <Box backgroundColor={DETAIL_COLOR} border="1px solid black" margin="10px">
                              {detail}
                          </Box>
                        )}
                      </Flex>
                  </Collapse>
              </Box>
            </>;
          })
        }
    </Flex>
    <Footer/>
  </>;
}
