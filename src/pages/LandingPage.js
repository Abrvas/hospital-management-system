// src/pages/LandingPage.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';

function LandingPage() {
  return (
    <>
      {/* Верхняя панель */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Hospital Management
          </Typography>
          <Button color="inherit" href="/login">
            Войти
          </Button>
        </Toolbar>
      </AppBar>

      {/* Основной контент */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh',
          backgroundColor: '#f5f5f5',
          textAlign: 'center',
        }}
      >
        <Container>
          <Typography variant="h3" gutterBottom>
            Добро пожаловать в систему управления клиникой
          </Typography>
          <Typography variant="h6" gutterBottom>
            Управляйте пациентами, расписанием и платежами в одном месте
          </Typography>
          <Button variant="contained" color="primary" href="/login">
            Войти в систему
          </Button>
        </Container>
      </Box>

      {/* Футер */}
      <Box sx={{ textAlign: 'center', py: 2 }}>
        <Typography variant="body2">
          © 2025 Hospital Management System
        </Typography>
      </Box>
    </>
  );
}

export default LandingPage;
