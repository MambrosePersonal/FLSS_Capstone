import { useNavigate } from "react-router-dom";

export function NavigateToTask () {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }
    return (
        <button onClick={handleClick}>Go to task</button>
    )
}