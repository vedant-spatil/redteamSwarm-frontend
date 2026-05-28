import { useEffect, useState } from "react"

import CTASection from "./components/CTASection"
import Dashboard from "./components/Dashboard"
import Footer from "./components/Footer"
import VideoBackground from "./components/VideoBackground"

import {
  fetchAgents,
  fetchFindings,
  startSwarm,
  stopSwarm,
} from "./services/api"

export default function App() {
  const [targetUrl, setTargetUrl] = useState("")
  const [agentCount, setAgentCount] = useState(4)
  const [loading, setLoading] = useState(false)
  const [running, setRunning] = useState(false)

  const [agents, setAgents] = useState<any[]>([])
  const [findings, setFindings] = useState<any[]>([])

  const handleStart = async () => {
    if (!targetUrl) return

    try {
      setLoading(true)

      await startSwarm(targetUrl, agentCount)

      setRunning(true)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleStop = async () => {
    await stopSwarm()
    setRunning(false)
  }

  useEffect(() => {
    if (!running) return

    const interval = setInterval(async () => {
      try {
        const [agentsData, findingsData] = await Promise.all([
          fetchAgents(),
          fetchFindings(),
        ])

        setAgents(agentsData)
        setFindings(findingsData)
      } catch (error) {
        console.error(error)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [running])

  return (
    <main className="relative w-full min-h-[115vh] overflow-x-hidden flex flex-col items-center font-sans selection:bg-white/20 selection:text-white">
      <VideoBackground />

      <div className="absolute inset-0 bg-black/40 z-[1]" />

      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col min-h-[115vh]">
        <CTASection
          targetUrl={targetUrl}
          setTargetUrl={setTargetUrl}
          agentCount={agentCount}
          setAgentCount={setAgentCount}
          loading={loading}
          running={running}
          onStart={handleStart}
          onStop={handleStop}
        />

        <Dashboard
          findings={findings}
          agents={agents}
        />

        <div className="mt-auto pb-6 md:pb-10">
          <Footer />
        </div>
      </div>
    </main>
  )
}