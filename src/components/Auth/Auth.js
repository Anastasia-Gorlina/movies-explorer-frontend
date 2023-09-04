// export const BASE_URL = "https://api.anastasia.gorlina.nomoreparties.co/";
export const BASE_URL = "http://localhost:3001";

// проверка ответа от сервера
const checkResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Ошибка ${response.status}`);
};

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      //'Accept': 'application/json',
      "Content-Type": "application/json",
    },
    credentials: "include", // теперь куки посылаются вместе с запросом
    body: JSON.stringify({ name, password, email }),
  }).then(checkResponse);
};

// функция, которая будет проверять логин и пароль пользователя
// на соответствие какому-либо профилю, хранящемуся в базе данных
export const authorize = (email, password) => {
  return (
    fetch(`${BASE_URL}/signin`, {
      method: "POST",
      headers: {
        //'Accept': 'application/json',
        "Content-Type": "application/json",
      },
      credentials: "include", // теперь куки посылаются вместе с запросом
      body: JSON.stringify({ email, password }),
    })
      .then(checkResponse)
      .catch((err) => console.log(err))
  );
};

export const logout = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  })
    .then(checkResponse)
    .catch((err) => console.log(err));
};
