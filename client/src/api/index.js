const url = 'http://localhost:5000/api';

const reqOptions = {
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
};

export const getAnimals = async (success, failure) => {
  try {
    const response = await fetch(`${url}/`, reqOptions);
    const categories = await response.json();
    success(categories);
  } catch (error) {
    failure(error);
  }
}

export const postAnimal = async (body, success, failure) => {
  try {
    const response = await fetch(`${url}/`, {
      ...reqOptions,
      method: 'POST',
      body: JSON.stringify(body),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    success(data);
  } catch (error) {
    failure(error.message)
  }
}

export const updateAnimal = async (id, body, success, failure) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      ...reqOptions,
      method: 'PATCH',
      body: JSON.stringify(body),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    success(data);
  } catch (error) {
    failure(error.message)
  }
}

export const deleteAnimal = async (id, success, failure) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      ...reqOptions,
      method: 'DELETE'
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    success(data);
  } catch (error) {
    failure(error.message)
  }
}

const api = {
  getAnimals,
  postAnimal,
  updateAnimal,
  deleteAnimal,

}

export default api;