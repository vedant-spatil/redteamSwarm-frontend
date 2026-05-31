const API_BASE = (
  import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000"
).replace(/\/$/, "")

export async function startSwarm(targetUrl: string, agentCount: number) {
  const response = await fetch(`${API_BASE}/swarm/start`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      target_url: targetUrl,
      agent_count: agentCount,
    }),
  })

  return response.json()
}

export async function stopSwarm() {
  const response = await fetch(`${API_BASE}/swarm/stop`, {
    method: "POST",
  })

  return response.json()
}

export async function fetchAgents() {
  const response = await fetch(`${API_BASE}/agents`)
  return response.json()
}

export async function fetchFindings() {
  const response = await fetch(`${API_BASE}/findings`)
  return response.json()
}