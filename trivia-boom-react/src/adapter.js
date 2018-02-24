import { API_WS_ROOT, API_ROOT, HEADERS } from './constants';

const createGameAndContents = (body) => {
  fetch(`${API_ROOT}/games`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({game: body})
  })
  fetch(`${API_ROOT}/contents`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({content: body})
  })
}

const getGames = () => {
  fetch(`${API_ROOT}/games`, {
    method: 'GET',
  })
}


export default {
  game: {
    createGameAndContents
  }
}