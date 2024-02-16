import { Button, Box, Typography, Rating } from "@mui/material";
import React, { useState } from "react";

function App() {
  const [maxStars, setMaxStars] = useState(0);
  const [starCount, setStarCount] = useState(0);

  const handleStarCount = () => setStarCount(stars);

  return (
    <Box className="w-full h-full border-2 border-black flex justify-center items-center">
      <Box className="w-80 flex flex-col">
        <Rating
          value={starCount}
          onChange={handleStarCount}
          max={maxStars}
        ></Rating>
        <Typography className="flex justify-center items-center">
          {maxStars}
        </Typography>
        <Box className="flex gap-4 flex-row p-4">
          <Button
            className="flex-grow"
            variant="contained"
            onClick={() => setMaxStars(maxStars - 1)}
          >
            -
          </Button>
          <Button
            className="flex-grow"
            variant="contained"
            onClick={() => setMaxStars(maxStars + 1)}
          >
            +
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
