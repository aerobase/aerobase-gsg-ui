import React from 'react';
import { ListItemIcon, ListItemText} from 'material-ui/List';
import { MenuList, MenuItem } from 'material-ui/Menu';
import SettingsIcon from 'material-ui-icons/Settings';
import BookIcon from 'material-ui-icons/Book';
import LinkIcon from 'material-ui-icons/Link';

export const menuListItems = (
    <div>
        <MenuList>
            <MenuItem selected={true}>
                <ListItemIcon>
                    <SettingsIcon/>
                </ListItemIcon>
                <ListItemText primary="Your App Configuration"/>
            </MenuItem>
            <MenuItem>
                <ListItemIcon>
                    <BookIcon/>
                </ListItemIcon>
                <ListItemText primary="Quick Start Guides"/>
            </MenuItem>
            <MenuItem button>
                <ListItemIcon>
                    <LinkIcon/>
                </ListItemIcon>
                <ListItemText primary="Useful Resources"/>
            </MenuItem>
        </MenuList>
    </div>
);