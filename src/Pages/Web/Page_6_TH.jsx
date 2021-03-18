import { calStr } from '../Components/MBTI'
 
function Q6({ list, page, select }) {

    var str = calStr(list);

    return(
        <div>
            <h1 align = 'center'>{str}</h1>
        </div>
    );
}

export default Q6;