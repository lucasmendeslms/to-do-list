import axios from 'axios';

import { API_URL, Authorization } from '../../config.ts'

export async function createNewTask (userSession: string, content: string): Promise<void> {

  const taskParams = {
    userSession: userSession,
    contentTask: content
  }

  try {
    await axios.post(`${API_URL}/tasks`, taskParams, {
      headers: {
        "Authorization": Authorization
      }
    })
  } catch(error) {
    console.log(error);
  }
}

export async function reqUserAuthentication() {
  try {
    const sessionID = localStorage.getItem('session');
    
    if(!sessionID) {
      const userSession = await axios.get(`${API_URL}/authentication`, {
        headers: {
          'Content-Type': "application/json",
          'Authorization': Authorization,
        }
      });
      const { session } = userSession.data;
      localStorage.setItem("session", session);
    }
    
  } catch(error) {
    console.error('Acesso negado')
    
  }
}

