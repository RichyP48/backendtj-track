const API_URL = "http://localhost:8080/api/v1.0"

export async function testBackendConnection() {
  try {
    const response = await fetch(`${API_URL}/health`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    
    if (response.ok) {
      console.log('✅ Backend connection successful')
      return { success: true, status: response.status }
    } else {
      console.log('❌ Backend responded with error:', response.status)
      return { success: false, status: response.status, error: 'HTTP Error' }
    }
  } catch (error) {
    console.log('❌ Backend connection failed:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Connection failed' }
  }
}

export async function testApiEndpoints() {
  const endpoints = [
    { path: '/health', name: 'Health Check' },
    { path: '/catalogue/articles', name: 'Catalogue Articles' },
    { path: '/catalogue/categories', name: 'Categories' },
    { path: '/stock/articles', name: 'Stock Articles' },
    { path: '/stock/fournisseurs', name: 'Suppliers' },
    { path: '/profile', name: 'Profile' }
  ]
  
  const results = []
  
  for (const endpoint of endpoints) {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000) // 10s timeout
      
      const response = await fetch(`${API_URL}${endpoint.path}`, {
        signal: controller.signal,
        headers: { 'Content-Type': 'application/json' }
      })
      
      clearTimeout(timeoutId)
      
      results.push({
        endpoint: endpoint.path,
        name: endpoint.name,
        status: response.status,
        success: response.ok,
        responseTime: Date.now()
      })
    } catch (error) {
      results.push({
        endpoint: endpoint.path,
        name: endpoint.name,
        success: false,
        error: error instanceof Error ? error.message : 'Failed'
      })
    }
  }
  
  return results
}

export async function testDatabaseConnection() {
  try {
    const response = await fetch(`${API_URL}/health/db`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    
    if (response.ok) {
      const data = await response.json()
      return { success: true, data }
    } else {
      return { success: false, error: 'Database connection failed' }
    }
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Database connection failed' 
    }
  }
}