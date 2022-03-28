



  
import axios from 'axios';
  

const api = axios.create({
  baseURL: 'https://test-case.azurewebsites.net/'
})


    export const getPolicy = () => {
    api.get('https://test-case.azurewebsites.net/api/policy?page=0&size=25', {
      headers: {
        'X-Api-Key' : 'e993baf3-4e2e-4dbe-a944-f6c41fb1a243'
      }
    }).then(res => {
      console.log(res)
    })
  }



  // export const createPolicy = async () => {
  //   let res = await api.post('https://test-case.azurewebsites.net/api/policy', { "modelId": 1, "period": { "start": "2021-03-25T11:23:15.875Z", "end": "2022-03-25T11:23:15.875Z" }, "owners": 10, "kilometers": 50000 },
  //     { 
  //       headers: {
  //         'X-Api-Key': 'e993baf3-4e2e-4dbe-a944-f6c41fb1a243'
  //       }
  //     }
  //   )
  //   console.log(res);

  // }