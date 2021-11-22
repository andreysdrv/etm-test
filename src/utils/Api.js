class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  async getPosts() {
    const res = await fetch(this._url + 'posts?_start=0&_limit=5', {
      method: 'GET',
      headers: this._headers,
    });
    return this._checkResponse(res);
  }

  async getComments(id) {
    const res = await fetch(this._url + `comments?postId=${id}`, {
      method: 'GET',
      headers: this._headers,
    });
    return this._checkResponse(res);
  }

  async deletePost(id) {
    const res = await fetch(this._url + `posts/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    });
    return this._checkResponse(res);
  }
}

const api = new Api({
  url: 'http://jsonplaceholder.typicode.com/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default api;
