import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import Players from "../Players";
import Canvas from "../Canvas";
const GameRoom = () => {
  return (
    <>
      <Grid
        templateColumns="repeat(6, 1fr)"
        templateRows="repeat(1, 1fr)"
        // gap={"15%"}
        //   alignItems="center"
        // bg="yellow"
        textAlign="center"
        h="100%"
      >
        <GridItem>
          <Players />
        </GridItem>

        <GridItem colSpan={4}>
          <Box>
            <Canvas />
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box>Chat</Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default GameRoom;
