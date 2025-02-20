// src/pages/DashboardPage.js
import React from 'react';
import { AppBar, Toolbar, Typography, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';

const drawerWidth = 240;

function DashboardPage() {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Верхняя панель */}
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Панель управления
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Боковое меню (Drawer) */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <List>
          <ListItem button>
            <ListItemText primary="Пациенты" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Расписание" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Платежи" />
          </ListItem>
          {/* Дополнительные пункты можно добавить */}
        </List>
      </Drawer>

      {/* Основной контент дашборда */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Typography variant="h4">Добро пожаловать!</Typography>
        <Typography variant="body1">
          Здесь можно управлять клиникой.
        </Typography>
      </Box>
    </Box>
  );
}

export default DashboardPage;
