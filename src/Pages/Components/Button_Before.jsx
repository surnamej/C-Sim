import { Button } from "react-bootstrap";

function before({ lang, page, change }) {
    return(
        <Button onClick = {() => {change(page - 1)}}>
            {
                lang === "TH" ? <p>ก่อนหน้า</p> : <p>Previous</p>
            }
        </Button>
    );
}

export default before;