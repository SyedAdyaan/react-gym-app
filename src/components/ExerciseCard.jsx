import React from 'react'
import {Stack,Button,Typography} from '@mui/material'
import {Link} from 'react-router-dom'

const ExerciseCard = ({exercise,key}) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className="exercise-card">
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        <Stack direction="row">
            <Button sx={{ml:"20px",color:"#fff",background:"#ffa9a9",fontSize:"14px",borderRadius:"20px",textTransform:'capitalize'}}>
                {exercise.bodyPart}
            </Button>
            <Button sx={{ml:"20px",color:"#fff",background:"#fcc757",fontSize:"14px",borderRadius:"20px",textTransform:'capitalize'}}>
                {exercise.target}
            </Button>
        </Stack>
        <Typography ml="20px" color="#000" fontWeight="bold" mt="11px" textTransform="capitalize" pb="10px" fontSize="20px">
            {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard