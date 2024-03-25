import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function JumpButtons({ jumpTo, description, move }) {

    return (
        <li key={move}>
            <Button onClick={() => jumpTo(move)} startIcon={<NavigateNextIcon />} size="small" variant="contained">{description}</Button>


        </li>

    );
}