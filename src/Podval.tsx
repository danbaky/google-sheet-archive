
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
// import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import * as React from 'react';




interface IProps{
    name: string,
    children:string[],
    expa:  string | false,
    func:(panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void
}

const copyTextToClipboard = async (text:string) => {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Текст успешно скопирован в буфер обмена!');
  } catch (err) {
    console.error('Ошибка:', err);
  }
};

const Podval:React.FC<IProps> = ({func, expa, name, children}) => {

    // const [expand, setExpand] = React.useState(expa === name)


    return(
    <Accordion expanded = {expa === name} onChange = {func(name)}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            {name}
          </AccordionSummary>
          <AccordionDetails>

              {children.filter(el => el != '').map(ph => (
            <Card sx={{ minWidth: 275 }} variant="outlined">
              <CardContent>
                <Typography>
                {ph}
                </Typography>
              </CardContent>
              <CardActions>
              <Button size="small" onClick={() => copyTextToClipboard(ph)}>Скопировать</Button>
              </CardActions>
            </Card>
              ))}

          {/* <AccordionActions>
          <Button onClick={()=>{setExpand(!expand)}}> Закрыть </Button>
          </AccordionActions> */}
          </AccordionDetails>
        </Accordion>)
}

export default Podval