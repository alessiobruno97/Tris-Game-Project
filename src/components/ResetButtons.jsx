import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


export default function ResetButtons({ resetGame }) {

    return (

        <Button onClick={resetGame} size="small" startIcon={<DeleteIcon />} variant="contained">Reset the Game!</Button>

    );

}