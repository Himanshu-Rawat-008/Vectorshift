import { Card } from "react-bootstrap"


export const PlainType = ({ id, data, text }) => {
    return (
        <Card.Text>
            {text}
        </Card.Text>
    )
}