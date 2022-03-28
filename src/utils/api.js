import axios from 'axios';

// Replace with apiKey
const apiKey = process.env.REACT_APP_INSTECH_API_KEY;

const api = axios.create({
  baseURL: 'https://test-case.azurewebsites.net/api'
})

export async function apiCallGetPolicies() {
  return await (api.get('/policy?page=0&size=25', {
    headers: {
      'X-Api-Key' : apiKey
    }
  }).then(res => res.data));
}

export async function apiCallGetBrands() {
  return await (api.get('/car/brands', {
    headers: {
      'X-Api-Key' : apiKey
    }
  }).then(res => res.data));
}

export async function apiCallPremiumCalculation(modelId, startDate, endDate, kilometers, owners) {
  return await (api.get(`/calculator/premium?modelId=${modelId}&period.start=${startDate}&period.end=${endDate}&kilometers=${kilometers}&owners=${owners}`, {
    headers: {
      'X-Api-Key' : apiKey
    }
  }).then(res => res.data));
}

export async function apiCallCreatePolicy(modelId, startDate, endDate, kilometers, owners) {
  await (api.post('/policy', {
    "modelId": modelId,
    "period": {
      "start": startDate,
      "end": endDate
    },
    "owners": owners,
    "kilometers": kilometers
  }, {
    headers: {
      'X-Api-Key': apiKey
    }
  }));
}

export async function apiCallGetBrandModels(brandId) {
return await (api.get(`/car/models/${brandId}`, {
    headers: {
      'X-Api-Key' : apiKey
    }
  }).then(res => res.data));
}










