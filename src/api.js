export const getComments = async () => {
  return [
    {
      id: "1",
      body: "Платье село отлично! Хороший материал. Буду заказывать еще, осталась очень довольна. ",
      username: "Нурайым Асанова",
      userId: "1",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "Заказываю постоянно одежду в этом магазине! Хорошие цены, хорошее качество! ",
      username: "Майрам Керезбекова",
      userId: "2",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },

    {
      id: "4",
      body: ":) Мне тоже понравилось их качество и цены",
      username: "Сезим  Азаматова ",
      userId: "2",
      parentId: "2",
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: " Чолпон Бактыбекова",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
