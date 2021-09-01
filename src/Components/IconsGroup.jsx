
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Divider } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddAlertIcon from '@material-ui/icons/AddAlert';


const IconsObj = {
    icons: [<InboxIcon />, <MailIcon />, <AddCircleIcon />, <AddAlertIcon />],
    texts : ['Inbox', 'Starred', 'Send email', 'Drafts']
}
const IconsGroups = () => {

    return ( 
        <>
            <List>
                {IconsObj.texts.map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon key={index}>
                            {IconsObj.icons[index]}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            
            <Divider />

            <List>
                {['All mail', 'Trash', 'Spam', '...Others'].map((text, index) => (
                    <ListItem button key={text}>
                    <ListItemIcon key={index}>
                        {IconsObj.icons[index]}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </>
    );
}
 
export default IconsGroups;