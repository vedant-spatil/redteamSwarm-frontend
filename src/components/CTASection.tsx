import { motion } from "motion/react"
import { Play, Square, Shield, Globe, Activity } from "lucide-react"

interface Props {
  targetUrl: string
  setTargetUrl: (value: string) => void
  agentCount: number
  setAgentCount: (value: number) => void
  loading: boolean
  running: boolean
  onStart: () => void
  onStop: () => void
}

export default function CTASection({
  targetUrl,
  setTargetUrl,
  agentCount,
  setAgentCount,
  loading,
  running,
  onStart,
  onStop,
}: Props) {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-5xl"
      >
        <div className="text-center mb-14">
          <p className="text-white/60 uppercase tracking-[0.3em] text-xs mb-6">
            Autonomous Intelligence Platform
          </p>

          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95] tracking-tight">
            Multi-Agent
            <br />
            Security Swarm
          </h1>

          <p className="mt-8 text-white/70 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            Distributed autonomous agents collaboratively discover,
            validate, and report security vulnerabilities using shared
            memory and coordinated reasoning.
          </p>
        </div>

        <div className="liquid-glass rounded-3xl p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6 text-white">
                <Shield size={24} />
                <h2 className="text-2xl md:text-3xl font-medium">
                  Launch Swarm Scan
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-white/60 text-sm mb-3 uppercase tracking-wider">
                    Target Endpoint
                  </label>

                  <input
                    type="text"
                    placeholder="https://example.com"
                    value={targetUrl}
                    onChange={(e) => setTargetUrl(e.target.value)}
                    className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white placeholder:text-white/30 outline-none focus:border-white/30 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white/60 text-sm mb-3 uppercase tracking-wider">
                    Agent Count
                  </label>

                  <input
                    type="range"
                    min={1}
                    max={8}
                    value={agentCount}
                    onChange={(e) => setAgentCount(Number(e.target.value))}
                    className="w-full"
                  />

                  <div className="flex justify-between mt-2 text-white/50 text-sm">
                    <span>1</span>
                    <span>{agentCount} Agents</span>
                    <span>8</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    onClick={onStart}
                    disabled={loading || running}
                    className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black text-sm font-medium hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
                  >
                    <Play size={18} />
                    {loading ? "Starting..." : "Start Swarm"}
                  </button>

                  <button
                    onClick={onStop}
                    disabled={!running}
                    className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white text-sm hover:bg-white/10 transition-colors disabled:opacity-50"
                  >
                    <Square size={18} />
                    Stop Swarm
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
                <Activity className="text-white mb-4" size={24} />
                <h3 className="text-white text-lg mb-2">
                  Live Monitoring
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Watch autonomous agents collaborate and probe endpoints in real-time.
                </p>
              </div>

              <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
                <Globe className="text-white mb-4" size={24} />
                <h3 className="text-white text-lg mb-2">
                  Distributed Intelligence
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Parallel agents share findings and avoid duplicate attack paths.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}