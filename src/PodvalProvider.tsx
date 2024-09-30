import Podval from "./Podval"
import React, { Fragment } from "react";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


interface Case {
    case: string,
    phrases: string[]
}
interface SheetResponse {
    tasks: Case[]
}

const PodvalProvider = (data: SheetResponse) => {

    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (<>
        {data.tasks.length > 0
            ?
            data.tasks.map(task =>
                <Fragment key={task.case}>
                    <Podval name={task.case} expa={expanded} func={handleChange} >
                        {task.phrases}
                    </Podval>
                </Fragment>)
            :
            <Card sx={{ maxWidth: 350 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    // height="140"
                    image="src\assets\mp4-ezgif.com-video-to-gif-converter.gif"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Гружусь
                    </Typography>
                </CardContent>
            </Card>}
    </>)

}
export default PodvalProvider