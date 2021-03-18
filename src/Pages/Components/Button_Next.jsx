import { Button } from "react-bootstrap";

function next({ lang, page, change }) {
    return(
        <Button onClick = {() => {console.log(page + 1);change(page + 1)}}>
            {
                lang === "TH" ? <p>ถัดไป</p> : <p>Next</p>
            }
        </Button>
    );
}

export default next;