// This file is shared across the demos.

import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import SettingsIcon from 'material-ui-icons/Settings';
import BookIcon from 'material-ui-icons/Book';
import LinkIcon from 'material-ui-icons/Link';

export const menuListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Your App Configuration" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <BookIcon />
            </ListItemIcon>
            <ListItemText primary="Quick Start Guides" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <LinkIcon />
            </ListItemIcon>
            <ListItemText primary="Useful Resources" />
        </ListItem>
    </div>
);