import axios from 'axios';

const apiUrl = "https://localhost:5266"

export default {
  getTasks: async () => {
    const result = await axios.get(`${apiUrl}/items`)    
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    return {};
  },

  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete})
    return {};
  },

  deleteTask:async()=>{
    console.log('deleteTask')
  }
};
