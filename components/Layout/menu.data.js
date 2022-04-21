const data = {
  publicRoutes: [
    {
      id: 1,
      href: '/login',
      content: {
        icon: 'lock',
        caption: 'Войти',
      },
    },
    {
      id: 2,
      href: '/register',
      content: {
        icon: 'person_add',
        caption: 'Начать',
      },
    },
  ],
  authRoutes: [
    {
      id: 1,
      href: '/scoreboard',
      content: {
        icon: 'scoreboard_outlined',
        caption: 'Рейтинг',
      },
    },
    {
      id: 2,
      href: '/download-config',
      content: {
        icon: 'upload_file',
        caption: 'Конфиг',
      },
    },
  ],
};

export default data;
