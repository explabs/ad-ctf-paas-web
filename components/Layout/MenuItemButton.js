import Link from 'next/link';
import {
  Icon, ListItemIcon, ListItemText, MenuItem,
} from '@mui/material';
import { memo } from 'react';

const MenuItemButton = ({
  href,
  onClick,
  content,
}) => (
  <Link href={href}>
    <MenuItem component="a" onClick={onClick} role="button">
      <ListItemIcon sx={{ minWidth: '10rem' }}>
        <Icon>{content.icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={content.caption} />
    </MenuItem>
  </Link>
);

export default memo(MenuItemButton);
